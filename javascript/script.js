setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    cairoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    cairoTimeElement.innerHTML = moment().tz("Africa/Cairo").format("H:mm:s");
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
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
