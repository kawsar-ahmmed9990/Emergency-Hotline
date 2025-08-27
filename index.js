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
    const serviceName = callBtn.parentNode.parentNode.children[1].innerText;
    const nmbr = callBtn.parentNode.parentNode.children[3].innerText;

    const currentCoin = getElement("coin-number").innerText;

    if (currentCoin < 20) {
      alert("You don't have enough coins to make a call!");
    } else {
      const presentCoin = currentCoin - 20;
      getElement("coin-number").innerText = presentCoin;
      alert(serviceName + " " + nmbr);
    }
  }
});
