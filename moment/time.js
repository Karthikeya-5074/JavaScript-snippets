function getTime() {
  var timez = document.getElementById("timezone").value;
  var result = luxon.DateTime.local().setZone(timez);
  var date = result.c;
  readData =
    date.day +"/" +
    date.month +
    "/" +
    date.year +
    " " +
    date.hour +
    ":" +
    date.minute +
    ":" +
    date.second;
  document.getElementById("tresult").innerHTML = readData;
}
