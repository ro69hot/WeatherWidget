const buttons = document.querySelectorAll("button");

// /api/:index/

function getData(index) {
  fetch(`/api/${index}/`)
    .then(e => e.json())
    .then(data => {
      console.log(data);
      const img = document.querySelector("img");
      const city = document.querySelector("h3");
      const cityTemp = document.querySelector("p");

      img.src = data.img;
      city.innerHTML = data.city;
      cityTemp.innerHTML = data.temp;
    });
}

buttons[0].addEvenLisener("click", () => {
  getData(0);
});

buttons[0].addEvenLisener("click", () => {
  getData(1);
});

buttons[0].addEvenLisener("click", () => {
  console.log("hello 3");
  getData(2);
});
