function filterNullValues(item) {
  const newItem = {};
  Object.keys(item)
    .filter((key) => item[key] !== null)
    .forEach((key) => (newItem[key] = item[key]));
  return newItem;
}

function convertResults(data) {
  const rows = Array.isArray(data) ? data : [data];
  return rows.map((row) => Object.assign({}, filterNullValues(row)));
}

function getConvertedValue(par) {
  if (par === true || par === "true") {
    return "1";
  }
  if (par === false || par === "false") {
    return "0";
  }
  if (typeof par === "string") {
    return "'" + par + "'";
  }
  return String(par);
}

export { convertResults, getConvertedValue };
