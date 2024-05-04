const addModulePreloadLink = () => {
  const linkRelList = document.createElement("link").relList;
  if (linkRelList && linkRelList.supports && linkRelList.supports("modulepreload")) return;

  for (const existingLink of document.querySelectorAll('link[rel="modulepreload"]')) {
    handleLink(existingLink);
  }

  new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.tagName === "LINK" && addedNode.rel === "modulepreload") {
            handleLink(addedNode);
          }
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });

  function handleLink(link) {
    if (link.ep) return;
    link.ep = true;
    const options = {
      integrity: link.integrity,
      referrerPolicy: link.referrerPolicy,
      credentials: link.crossOrigin === "use-credentials" ? "include" : link.crossOrigin === "anonymous" ? "omit" : "same-origin"
    };
    fetch(link.href, options);
  }
};

const createNavbar = () => {
  const navbar = document.createElement("div");
  navbar.innerHTML = `
    <div class="flex-1 justify-center">
      <a class="btn btn-ghost text-3xl" href="https://bagelindustries.com/">Bagel Industries</a>
    </div>
  `;
  navbar.setAttribute("class", "navbar bg-base-100");
  return navbar;
};

const initializeApp = () => {
  const app = document.getElementById("app");
  app.appendChild(createNavbar());
  addModulePreloadLink();
};

initializeApp();
