const devices = [
  {
    deviceName: "iPhone X",
    width: "357",
    height: "812",
    image: "iphone-x.png",
  },
  {
    deviceName: "iPhone 14",
    width: "430",
    height: "932",
    image: "iphone-14.png",
  },
  {
    deviceName: "iPad Pro",
    width: "1024",
    height: "1366",
    image: "ipad-pro.jpg",
  },
  {
    deviceName: "iMac",
    width: "1920",
    height: "1080",
    image: "imac.png",
  },
];

const searchBtn = document.querySelector(".search-btn");
const linkInput = document.querySelector(".search-bar");

const cardContainer = document.querySelector(".card-container");

searchBtn.addEventListener("click", () => {
  const linkIn = linkInput.value;
  window.open(linkIn, "", "width=320 height=482");
});

devices.forEach((device) => {
  let card = document.createElement("div");
  card.className =
    "card shadow text-light p-2 d-flex flex-column align-items-center ";
  card.style.width = "18rem";
  card.insertAdjacentHTML(
    "afterbegin",
    ` <img
  src="./assets/images/${device.image}"
  class="card-img-top card-img"
  alt="..."
/>
<div class="card-body d-flex flex-column justify-content-center justify-content-center">
  <h5 class="card-title text-center">${device.deviceName}</h5>
  <p class="card-text text-center">${device.width} X ${device.height}</p>


</div>`
  );
  cardContainer.appendChild(card);
  const checkBtn = document.createElement("button");
  checkBtn.className = "btn btn-primary check-btn";
  checkBtn.textContent = "Check";
  console.log(checkBtn.in);
  checkBtn.addEventListener("click", () => {
    const linkIn = linkInput.value;
    window.open(linkIn, "", `width=${device.width} height=${device.height}`);
  });
  card.appendChild(checkBtn);
});
