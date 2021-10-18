console.log("in index.js");

function addDataToPage() {
  // First create a new url with the page you want to navigate to
  const url = new URL(`${window.location.href}/pages/profile/profile.html`);

  // Now add the query parameter
  url.searchParams.append("name", "benjamin");

  // Select the link tag and set the href attribute to the href from the newly created url
  document.querySelector("a").setAttribute("href", url.href);
}

addDataToPage();
