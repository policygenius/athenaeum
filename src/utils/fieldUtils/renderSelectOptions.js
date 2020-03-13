import { renderOption } from '.';

function renderSelectOptions(options) {
  if (!options) return null;

  return options.map(renderOption);
}

export default renderSelectOptions;
