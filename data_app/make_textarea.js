const old_make_textarea = ({on_change, on_undo, on_redo}) => {
  const textarea = document.createElement('textarea');
  let prev_value = '';
  let start;
  let end;
  textarea.addEventListener('beforeinput', (ev) => {
    const call_record = {type: 'beforeinput', value: ev.target.value, selection_start: ev.target.selectionStart, selection_end: ev.target.selectionEnd, input_type: ev.inputType};
//    record_for_testing(call_record);

    const real_logic = ({value, selection_start, selection_end, input_type}) => {
      //console.log({ev, value: ev.target.value, target_ranges: ev.getTargetRanges(), selection_start: ev.target.selectionStart, inputType: ev.inputType});
      if(input_type === 'deleteContentBackward'  &&  selection_start === selection_end) {
        return {start: Math.max(0, selection_start - 1), end: selection_start};
      } else if(input_type === 'deleteContentForward'  &&  selection_start === selection_end) {
        return {start: selection_start, end: Math.min(selection_start + 1, value.length)};
      } else {
        return {start: selection_start, end: selection_end};
      }
    };

    const output = real_logic(call_record);
//    record_for_testing({type: 'output', call_record, output});
    ({start, end} = output);
  });
  textarea.addEventListener('input', (e) => {
    if(e.inputType === 'historyUndo') {
      textarea.value = prev_value;
      return on_undo();
    }
    if(e.inputType === 'historyRedo') {
      textarea.value = prev_value;
      return on_redo();
    }

    const new_value = textarea.value;
    const removed = prev_value.slice(start, end);
    const inserted = new_value.slice(start, start + (new_value.length - prev_value.length + removed.length));
    const expected_new_value = prev_value.slice(0, start) + inserted + prev_value.slice(end);
    if(expected_new_value !== new_value)
      throw (console.error({prev_value, start, end, removed, inserted, expected_new_value, new_value}), 1243);
    on_change({prev_value, removed, inserted, index: start, new_value});
    prev_value = new_value;
  });
  const set_value = (new_value) => {
    prev_value = new_value;
    textarea.value = new_value;
  };
  return {textarea, set_value};
};

const process_keydown = async({text_value, event: e, selection_start, selection_end}) => {
  const specials = [
    e.key === 'z' && (e.ctrlKey || e.metaKey) && !e.shiftKey,
    (e.key === 'y' || (e.key === 'z' && e.shiftKey)) && (e.ctrlKey || e.metaKey),
    e.key === 'c' && (e.ctrlKey || e.metaKey),
    e.key === 'v' && (e.ctrlKey || e.metaKey),
    e.key === 'x' && (e.ctrlKey || e.metaKey),
    e.key === 'Home' && e.ctrlKey,
    e.key === 'End' && e.ctrlKey,
  ];
  const [isUndo, isRedo, isCopy, isPaste, isCut] = specials;

  if((e.ctrlKey || e.metaKey || e.altKey) && !specials.some((x)=>(x)))
    return {new_value: text_value, not_recognized: true, selection_start, selection_end};

  let not_recognized = false;

  if(isUndo) {
    // Do nothing
  } else if(isRedo) {
    // Do nothing
  } else if(isCopy) {
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    navigator.clipboard.writeText(text_value.slice(selection_0, selection_1));
  } else if(isPaste) {
    const to_insert = await navigator.clipboard.readText();
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    text_value = text_value.slice(0, selection_0) + to_insert + text_value.slice(selection_1);
    selection_end = selection_start = selection_0 + to_insert.length;
  } else if(isCut) {
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    navigator.clipboard.writeText(text_value.slice(selection_0, selection_1));
    text_value = text_value.slice(0, selection_0) + text_value.slice(selection_1);
    selection_end = selection_start = selection_0;
  } else if(selection_end !== selection_start  &&  (e.key==='Backspace' || e.key==='Delete')) {
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    text_value = text_value.slice(0, selection_0) + text_value.slice(selection_1);
    selection_end = selection_start = selection_0;
  } else if(e.key === 'Backspace' && selection_start > 0) {
    text_value = text_value.slice(0, selection_start - 1) + text_value.slice(selection_start);
    selection_start -= 1;
    selection_end = selection_start
  } else if(e.key === 'Delete' && selection_start < text_value.length) {
    text_value = text_value.slice(0, selection_start) + text_value.slice(selection_start + 1);
  } else if(e.key === 'ArrowLeft' && selection_end > 0 && !e.ctrlKey) {
    selection_end -= 1;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key === 'ArrowDown') {
    const origin = selection_end;
    for(; selection_end>0; --selection_end)
      if(text_value[selection_end-1] === '\n')
        break;
    const distance = origin - selection_end;
    for(selection_end = origin; selection_end<text_value.length; ++selection_end)
      if(text_value[selection_end] === '\n')
        break;
    if(selection_end < text_value.length)
      selection_end += 1;
    const candidate = Math.min(selection_end + distance, text_value.length);
    for(; selection_end<candidate; ++selection_end)
      if(text_value[selection_end] === '\n')
        break;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key === 'ArrowUp') {
    const origin = selection_end;
    for(; selection_end>0; --selection_end)
      if(text_value[selection_end-1] === '\n')
        break;
    const distance = origin - selection_end;
    if(selection_end > 0)
      selection_end -= 1;
    for(; selection_end>0; --selection_end)
      if(text_value[selection_end-1] === '\n')
        break;
    const candidate = Math.min(selection_end + distance, text_value.length);
    for(; selection_end<candidate; ++selection_end)
      if(text_value[selection_end] === '\n')
        break;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key === 'ArrowRight' && selection_end < text_value.length && !e.ctrlKey) {
    selection_end += 1;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key.length === 1) {
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    text_value = text_value.slice(0, selection_0) + e.key + text_value.slice(selection_1);
    selection_end = selection_start = selection_0 + 1;
  } else if(e.key === 'End' && !e.ctrlKey) {
    for(; selection_end<text_value.length; ++selection_end)
      if(text_value[selection_end] === '\n')
        break;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key === 'Home' && !e.ctrlKey) {
    for(; selection_end>0; --selection_end)
      if(text_value[selection_end-1] === '\n')
        break;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key === 'End' && e.ctrlKey) {
    selection_end = text_value.length;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key === 'Home' && e.ctrlKey) {
    selection_end = 0;
    if(!e.shiftKey)
      selection_start = selection_end;
  } else if(e.key === 'Enter') {
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    text_value = text_value.slice(0, selection_0) + '\n' + text_value.slice(selection_1);
    selection_end = selection_start = selection_0 + 1;
  } else {
    not_recognized = true;
  }

  return {new_value: text_value, not_recognized, selection_start, selection_end};
};

const process_keydown_2 = ({prev_value, new_value, start_0, end_0, event: e, on_undo, on_redo, on_change, notify}) => {
  const specials = [
    e.key === 'z' && (e.ctrlKey || e.metaKey) && !e.shiftKey,
    (e.key === 'y' || (e.key === 'z' && e.shiftKey)) && (e.ctrlKey || e.metaKey),
    e.key === 'c' && (e.ctrlKey || e.metaKey),
    e.key === 'v' && (e.ctrlKey || e.metaKey),
    e.key === 'x' && (e.ctrlKey || e.metaKey),
    e.key === 'Home' && e.ctrlKey,
    e.key === 'End' && e.ctrlKey,
  ];
  const [isUndo, isRedo, isCopy, isPaste, isCut] = specials;

  if((e.ctrlKey || e.metaKey || e.altKey) && !specials.some((x)=>(x)))
    return prev_value;

  if(isUndo) {
    on_undo();
    return prev_value;  // TODO: return something else eventually
  } else if(isRedo) {
    on_redo();
    return prev_value;  // TODO: return something else eventually
  } else {
    if(new_value === prev_value)
      return prev_value;

    const {start, end} = (() => {
      if(e.key === 'Backspace' && start_0===end_0 && start_0 > 0) {
        return {start: start_0 - 1, end: start_0};
      } else if(e.key === 'Delete' && start_0===end_0 && start_0 < prev_value.length) {
        return {start: start_0, end: start_0 + 1};
      } else {
        return {start: start_0, end: end_0};
      }
    })();
    const removed = prev_value.slice(start, end);
    const inserted = new_value.slice(start, start + (new_value.length - prev_value.length + removed.length));
    const expected_new_value = prev_value.slice(0, start) + inserted + prev_value.slice(end);
    if(expected_new_value !== new_value)
      throw (console.error({prev_value, start, end, removed, inserted, expected_new_value, new_value}), notify(1263));
    on_change({prev_value, removed, inserted, index: start, new_value});
    return new_value;
  }
};

const make_textarea = ({on_change, on_undo, on_redo, notify}) => {
  let text_value = '';
  let selection_start = 0;
  let selection_end = 0;

  const editor = document.createElement('div');
  editor.style.cssText = `
    font-family: monospace;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
    min-height: 100px;
    white-space: pre;
    outline: none;
    line-height: 1.5;
    margin: 20px;
    font-size: 14px;
  `;
  editor.setAttribute('tabindex', 0);

  const render = () => {
    const maybe_cursor = (() => {
      if(document.activeElement === editor)
        return '█';
      else
        return '';
    })();
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    editor.textContent = (
        text_value.slice(0, selection_0)
      + maybe_cursor + text_value.slice(selection_0, selection_1)
      + maybe_cursor + text_value.slice(selection_1)
    );
  };

  editor.addEventListener('keydown', async(e) => {
    const prev_value = text_value;
    const start_0 = selection_start;
    const end_0 = selection_end;
    let new_value, not_recognized;
    ({new_value, not_recognized, selection_start, selection_end} = await process_keydown({text_value, event: e, selection_start, selection_end}));
    if(not_recognized) {
      // Do nothing
    } else {
      e.preventDefault();
      text_value = process_keydown_2({new_value, prev_value, start_0, end_0, event: e, on_undo, on_redo, on_change, notify});
      render();
    }
  });

  editor.addEventListener('focus', render);
  editor.addEventListener('blur', render);

  const set_value = (new_value) => {
    text_value = new_value;
    render();
  };

  return {
    div: editor,
    set_value,
    get_selection_start: () => (selection_start),
    set_selection_start: (x) => {selection_start = x;},
    get_selection_end: () => (selection_end),
    set_selection_end: (x) => {selection_end = x;},
  };
};
