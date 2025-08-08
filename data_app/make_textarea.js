const make_textarea = ({on_change, on_undo, on_redo}) => {
  const textarea = document.createElement('textarea');
  let prev_value = '';
  let start;
  let end;
  textarea.addEventListener('beforeinput', (ev) => {
    const call_record = {type: 'beforeinput', value: ev.target.value, selection_start: ev.target.selectionStart, selection_end: ev.target.selectionEnd, input_type: ev.inputType};
    record_for_testing(call_record);

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
    record_for_testing({type: 'output', call_record, output});
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
