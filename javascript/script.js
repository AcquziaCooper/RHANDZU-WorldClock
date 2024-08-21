setInterval(function () {
  let joburgElement = document.querySelector("#joburg");
  let joburgDateElement = joburgElement.querySelector(".date");
  let joburgTimeElement = joburgElement.querySelector(".time");
  joburgDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  joburgTimeElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("H:mm:s");

  let mauritiusElement = document.querySelector("#mauritius");
  let mauritiusDateElement = mauritiusElement.querySelector(".date");
  let mauritiusTimeElement = mauritiusElement.querySelector(".time");
  mauritiusDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  mauritiusTimeElement.innerHTML = moment()
    .tz("Indian/Mauritius")
    .format("H:mm:s");
}, 1000);
