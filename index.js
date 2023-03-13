function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

const contectDiv = document.getElementById()
const home = `<div w3-include-html="./home/home.html"></div>`;
const about = `<div w3-include-html="./about/about.html"></div>`
const resources = `<div w3-include-html="./resources/resources.html"></div>`
const blog = `<div w3-include-html="./blog/blog.html"></div>`
const meet = `<div w3-include-html="./meet/meet.html"></div>`

const routes = {
  '/' : home,
  '/about' : about,
  '/resources' : resources,
  '/blog' : blog,
  '/meet' : meet
};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  content.innerHTML = routes[pathname]
  window.onpopstate()
}

window.onpopstate = () => {
  content.innerHTML = routes[window.location.pathname];
}