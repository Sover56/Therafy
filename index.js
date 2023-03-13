const content = document.getElementById("content");
const home = `<div w3-include-html="./pages/home.html"></div>`;
const about = `<div w3-include-html="./pages/about.html"></div>`;
const resources = `<div w3-include-html="./pages/resources.html"></div>`;
const blog = `<div w3-include-html="./pages/blog.html"></div>`;
const meet = `<div w3-include-html="./pages/meet.html"></div>`;

const routes = {
  404: "/404.html",
  "/index.html": "/pages/home.html",
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/resources": "/pages/resources.html",
  "/blog": "/pages/blog.html",
  "/meet": "/pages/meet.html",
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
  console.log(event.target.href);
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  content.innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
