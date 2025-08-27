function getElement(id) {
  const val = document.getElementById(id);
  return val;
}

getElement("card-container").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-icon")) {
    const heartIcon = e.target;
    const currentHeart = getElement("heart-cnt").innerText;
    const totalHeart = Number(currentHeart) + 1;
    getElement("heart-cnt").innerText = totalHeart;
  }
});
getElement("card-container").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const callBtn = e.target;
    const serviceName = callBtn.parentNode.parentNode.children[2].innerText;
    const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
    const nmbr = callBtn.parentNode.parentNode.children[3].innerText;

    const currentCoin = getElement("coin-number").innerText;

    if (currentCoin < 20) {
      alert("Insufficient coins! Minimum 20 coins required to make a call.");
    } else {
      const currentTime = new Date().toLocaleTimeString();
      const presentCoin = currentCoin - 20;
      getElement("coin-number").innerText = presentCoin;
      alert("Calling " + serviceName + " " + nmbr);
      const historySectionContainer = getElement("history-section-container");
      const newCart = document.createElement("div");

      newCart.innerHTML = `<div
              class="flex justify-between gap-4 items-center bg-[#fafafa] p-2 mt-4 rounded-lg mb-2"
            >
              <div>
                <h1 class="text-[16px] font-semibold">${cardTitle}</h1>
                <h2 class="text-[#5c5c5c] font-semibold">${nmbr}</h2>
              </div>
              <h1 class="text-[16px]">${currentTime}</h1>
            </div>`;
      historySectionContainer.append(newCart);
    }
  }
});
document.getElementById("clear-btn").addEventListener("click", function (e) {
  getElement("history-section-container").innerText = "";
});
getElement("card-container").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    const copyBtn = e.target;
    const number = copyBtn.parentNode.parentNode.children[3].innerText;
    const currentCopy = getElement("copy-cnt").innerText;
    const totalCopy = Number(currentCopy) + 1;
    getElement("copy-cnt").innerText = totalCopy;
    alert("Number has been copied: " + number);
    navigator.clipboard.writeText(number);
  }
});
