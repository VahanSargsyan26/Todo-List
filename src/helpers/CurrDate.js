export default function getCurrentDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Months are zero-based
  var year = currentDate.getFullYear();

  // Zero-padding for single-digit day and month
  var formattedDay = day < 10 ? '0' + day : day;
  var formattedMonth = month < 10 ? '0' + month : month;

  var formattedDate = formattedDay + '.' + formattedMonth + '.' + year;
  return formattedDate;
}