function formatDate(val) {
  let yyyy = val.getFullYear();
  let mm = val.getMonth() + 1;
  let dd = val.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return `${yyyy}-${mm}-${dd}`;
}

module.exports = formatDate;
