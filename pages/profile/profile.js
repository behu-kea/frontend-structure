console.log("in search");

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if ("name" in params) {
  document.querySelector("h1").innerText = `${params.name}'s profile page`;
}
