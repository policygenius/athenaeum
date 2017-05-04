import renderOptGroup from 'utils/Fields/renderOptGroup';
import renderOption from 'utils/Fields/renderOption';

export default function renderOptions(opt, idx) {
  if (opt.group) return renderOptGroup(opt, idx);

  return renderOption({
    value: opt.value,
    label: opt.label,
    index: idx
  });
}
