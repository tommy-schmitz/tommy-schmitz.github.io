const make_textarea = (callback) => {
  const textarea = document.createElement('textarea');
  let prev_value = '';
  let start;
  let end;
  textarea.addEventListener('beforeinput', (ev) => {
    console.log({ev, value: ev.target.value, target_ranges: ev.getTargetRanges(), selection_start: ev.target.selectionStart, inputType: ev.inputType});
    if(ev.inputType === 'deleteContentBackward'  &&  textarea.selectionStart === textarea.selectionEnd) {
      start = Math.max(0, textarea.selectionStart - 1);
      end = textarea.selectionStart;
    } else if(ev.inputType === 'deleteContentForward'  &&  textarea.selectionStart === textarea.selectionEnd) {
      start = textarea.selectionStart;
      end = Math.min(textarea.selectionStart + 1, textarea.value.length);
    } else {
      start = textarea.selectionStart;
      end = textarea.selectionEnd;
    }
  });
  textarea.addEventListener('input', (e) => {
    const new_value = textarea.value;
    const removed = prev_value.slice(start, end);
    const inserted = new_value.slice(start, start + (new_value.length - prev_value.length + removed.length));
    const expected_new_value = prev_value.slice(0, start) + inserted + prev_value.slice(end);
    if(expected_new_value !== new_value)
      throw (console.error({prev_value, start, end, removed, inserted, expected_new_value, new_value}), 1234);
    callback({prev_value, removed, inserted, index: start, new_value});
    prev_value = new_value;
  });
  const set_value = (new_value) => {
    prev_value = new_value;
    textarea.value = new_value;
  };
  return {textarea, set_value};
};
