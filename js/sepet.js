
document.addEventListener("DOMContentLoaded", () => {
  const liste = document.getElementById("sepet-listesi");
  const sepet = JSON.parse(localStorage.getItem("sepet")) || [];
  if (sepet.length === 0) {
    liste.innerHTML = "<p>Sepetiniz boş.</p>";
    return;
  }
  liste.innerHTML = "<ul>" + sepet.map(item => `<li>${item}</li>`).join("") + "</ul>";
});

function temizle() {
  localStorage.removeItem("sepet");
  location.reload();
}
