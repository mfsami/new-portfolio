document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidenav .nav-item");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    // remove any existing highlight
    link.classList.remove("active");

    // highlight the link if its href matches the current page
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }

    // special case: if URL ends with nothing (just "/"), treat it as index.html
    if (
      (currentPage === "" || currentPage === "/") &&
      link.getAttribute("href") === "index.html"
    ) {
      link.classList.add("active");
    }
  });
});
