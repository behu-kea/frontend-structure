import renderMain from "./pages/main/main.js";
import renderAbout from "./pages/about/about.js";
import renderUser from "./pages/user/user.js";

const router = new Navigo("/", { hash: true });

router
  .on({
    "/": () => {
      // call updatePageLinks to let navigo handle the links
      // when new links have been inserted into the dom
      renderMain().then(router.updatePageLinks);
    },
    about: () => {
      renderAbout();
    },
    "/user/:id/": ({ data, params }) => {
      console.log(data);
      console.log(params);
      renderUser(data.id);
    },
  })
  .resolve();
