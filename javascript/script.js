setInterval(function () {
  let joburgElement = document.querySelector("#joburg");
  if (joburgElement) {
    let joburgDateElement = joburgElement.querySelector(".date");
    let joburgTimeElement = joburgElement.querySelector(".time");
    joburgDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    joburgTimeElement.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("H:mm:s");
  }

  let mauritiusElement = document.querySelector("#mauritius");
  if (mauritiusElement) {
    let mauritiusDateElement = mauritiusElement.querySelector(".date");
    let mauritiusTimeElement = mauritiusElement.querySelector(".time");
    mauritiusDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    mauritiusTimeElement.innerHTML = moment()
      .tz("Indian/Mauritius")
      .format("H:mm:s");
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("-", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("H:mm:s")}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
