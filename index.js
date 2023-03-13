const content = document.getElementById("content")
const home = `<div w3-include-html="./home/home.html"></div>`;
const about = `<div w3-include-html="./about/about.html"></div>`
const resources = `<div w3-include-html="./resources/resources.html"></div>`
const blog = `<div w3-include-html="./blog/blog.html"></div>`
const meet = `<div w3-include-html="./meet/meet.html"></div>`

const routes = {
  404 : '404.html', 
  '/index.html' : './home/home.html',
  '/' : './home/home.html',
  '/about' : './about/about.html',
  '/resource' : './resources/resources.html',
  '/blog' : './blog/blog.html',
  '/meet' : './meet/meet.html'
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState(
    {},
    "",
    event.target.href
  )
  handleLocation();
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404]
  const html = await fetch(route).then((data) => data.text());
  content.innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
