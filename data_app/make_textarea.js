const make_textarea = ({on_change, on_undo, on_redo}) => {
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
  return {
    div: textarea,
    set_value,
    get_selection_start: () => (textarea.selectionStart),
    set_selection_start: (x) => {textarea.selectionStart = x;},
    get_selection_end: () => (textarea.selectionEnd),
    set_selection_end: (x) => {textarea.selectionEnd = x;},
  };
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

const create_caret = () => {
  const ret = document.createElement('div');
  ret.style.cssText = `
    display: inline;
    white-space: nowrap;
  `;

  const child = document.createElement('div');
  child.style.cssText = `
    display: inline-block;
    width: 0px;
    height: 1lh;
    vertical-align: bottom;
  `;
  ret.appendChild(child);

  const grandchild = document.createElement('div');
  grandchild.style.cssText = `
    display: inline-block;
    background-color: black;
    width: 1px;
    height: 100%;
  `;
  child.appendChild(grandchild);

  return ret;
};

const fix_whitespace = (str, cell, {selected = false} = {}) => {
  // Replace some spaces with non-breaking spaces:
  //const processedStr = str.replace(/([\n ]) | (\n|$)/g, (match) => ((match[1]??'') + '\u00A0' + (match[2]??'')));
  //const processedStr = str.replace(/ /g, (match) => ('\u00A0'));
  const processedStr = (str
    .replace(/[\n ] +/g, (match) => (match[0][0] + '\u00A0'.repeat(match[0].length-1)))
    .replace(/ (\n|$)/g, (match) => ('\u00A0' + (match[1]??'')))
  );

  console.log({processedStr});

  return processedStr.split('\n').flatMap((x, i, pieces) => {
    const rendered = document.createElement('span');
    if(selected) {
      rendered.style.cssText = `\
        background-color: rgb(51, 104, 209);
        color: white;
      `;
    }
    rendered.innerText = x;

    if(i === pieces.length - 1) {
      rendered.dataset.base_index = cell.counter;
      cell.counter += x.length;
      if(i !== 0)
        cell.line_start = (x.length === 0);
      return [rendered];
    } else {
      if(x.length === 0 && cell.line_start) {
        rendered.innerText = '\u00A0';
        rendered.dataset.blank_line = true;
      }
      rendered.dataset.base_index = cell.counter;
      cell.counter += x.length;
      cell.counter += 1;  // For the newline
      return [rendered, document.createElement('br')];
    }
  });
};

//    .replace(/\n$/g, (match) => ('\n\u00A0'))

const render_helper = ({div, text_value, notify}) => {
  throw notify('not implemented yet');

  const cell = {counter: 0, line_start: true};
  const matches = text_value.matchAll(/(\s+)|(\S+)/g);
  matches.flatMap((match) => {
    if(match[1] !== undefined) {
      return match[1].map((c) => {
        if(c === '\n') {
          return [document.createElement('br')];
        } else {
          return 
        }
      });
    } else if(match[2] !== undefined) {
      const span = document.createElement('span');
      span.innerText = '\u00A0';
      span.dataset.base_index = text_value.length;
      span.dataset.blank_line = true;
      return [span];{
      const rendered = document.createElement('span');
      if(selected) {
        rendered.style.cssText = `\
          background-color: rgb(51, 104, 209);
          color: white;
        `;
      }
      rendered.innerText = x;

      if(i === pieces.length - 1) {
        rendered.dataset.base_index = cell.counter;
        cell.counter += x.length;
        if(i !== 0)
          cell.line_start = (x.length === 0);
        return [rendered];
      } else {
        if(x.length === 0 && cell.line_start) {
          rendered.innerText = '\u00A0';
          rendered.dataset.blank_line = true;
        }
        rendered.dataset.base_index = cell.counter;
        cell.counter += x.length;
        cell.counter += 1;  // For the newline
        return [rendered, document.createElement('br')];
      }
    }
    } else {
      throw notify(1264);
    }
  });

  // Old code:
//  editor.append(
//    ...fix_whitespace(text_value.slice(0, selection_0), cell),
//    ...maybe_create_caret(selection_end === selection_0),
//    ...fix_whitespace(text_value.slice(selection_0, selection_1), cell, {selected: true}),
//    ...maybe_create_caret(selection_end !== selection_0),
//    ...fix_whitespace(text_value.slice(selection_1), cell),
//    ...(() => {
//      if(text_value.slice(-1)[0] === '\n') {
//        return [(() => {
//          const ret = document.createElement('span');
//          ret.innerText = '\u00A0';
//          ret.dataset.base_index = text_value.length;
//          ret.dataset.blank_line = true;
//          return ret;
//        })()];
//      } else {
//        return [];
//      }
//    })(),
//  );
};

const new_make_textarea = ({on_change, on_undo, on_redo, notify}) => {
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
    outline: none;
    line-height: 1.5;
    margin: 20px;
    font-size: 14px;
  `;
  editor.setAttribute('tabindex', 0);

  const render = () => {
    const maybe_create_caret = (additional_constraint) => {
      if(additional_constraint  &&  document.activeElement === editor)
        return [create_caret(), '\u2060'];
      else
        return [];
    };
    const selection_0 = Math.min(selection_start, selection_end);
    const selection_1 = Math.max(selection_start, selection_end);
    editor.innerHTML = '';
    render_helper({div: editor, text_value, notify});
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

  editor.addEventListener('click', (e) => {
    e.preventDefault();

    const r = document.caretPositionFromPoint(e.clientX, e.clientY);
    if(r === null)
      return;

    const {offsetNode: node, offset} = r;

    if(node.parentElement.dataset.blank_line)
      selection_end = +node.parentElement.dataset.base_index;
    else
      selection_end = +node.parentElement.dataset.base_index + offset;

    console.log({base_index: node.parentElement.dataset.base_index, offset});

    if(!e.shiftKey)
      selection_start = selection_end;

    render();
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
