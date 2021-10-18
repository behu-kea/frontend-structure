console.log("in search");

const urlQueryParameters = new URLSearchParams(window.location.search);
const queryParameters = Object.fromEntries(urlQueryParameters.entries());

if ("name" in queryParameters) {
  document.querySelector(
    "h1"
  ).innerText = `${queryParameters.name}'s profile page`;
}
