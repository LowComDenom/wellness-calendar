function Nav() {
  const _ = document.createElement("nav")
  _.innerHTML = `
    <a href="docs.html">Home</a>
    <a href="server.html">Server</a>
    <a href="client.html">Client</a>
    <a href="glossary.html">Glossary</a>
    `
  return _
}

function Footer() {
  const _ = document.createElement("footer")
  _.innerHTML = `
    <a>Github</a>
    <a>Version 0.0</a>
    `
  return _
}

function SideBar() {
  const _ = document.createElement("section")
  _.innerHTML = `
    <a href="#top">Go To Top</a>
    <a href="#bottom">Go To Bottom</a>
    `
  return _
}

document.querySelector("nav-bar").replaceWith(Nav())
document.querySelector("foot-bar").replaceWith(Footer())
document.querySelector("side-bar").replaceWith(SideBar())
