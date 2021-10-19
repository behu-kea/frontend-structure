console.log("in index.js");

function addDataToPage() {
  // First create a new url with the page you want to navigate to
  const url = new URL(`${getHref()}pages/profile/profile.html`);

  // Now add the query parameter
  url.searchParams.append("name", "benjamin");

  // Select the link tag and set the href attribute to the href from the newly created url
  document.querySelector("a").setAttribute("href", url.href);
}

addDataToPage();

// So the href might have a backslash (/) in the url or it might not
// fx https://behu-kea.github.io/frontend-structure/ but with localhost it looks like this http://localhost:5500
// This we need to handle
function getHref() {
  const lastHrefCharacter =
    window.location.href[window.location.href.length - 1];
  const href =
    lastHrefCharacter !== "/"
      ? `${window.location.href}/`
      : window.location.href;

  return href;
}
