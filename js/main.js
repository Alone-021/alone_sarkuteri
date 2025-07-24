
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const urun = btn.parentElement.querySelector("h3").textContent;
    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    sepet.push(urun);
    localStorage.setItem("sepet", JSON.stringify(sepet));
    alert("Ürün sepete eklendi!");
  });
});
