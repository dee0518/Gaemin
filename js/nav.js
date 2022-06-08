const nav = () => {
  const nav_li = document.querySelectorAll(".nav__li a");
  console.log(nav_li)

  const liHandler = (el, e) => {
    e.preventDefault();
    nav_li.forEach((x) => {
      if (x.classList.contains("selected")) {
        const openedTab = x.getAttribute("aria-controls");
        x.classList.remove("selected");
        x.setAttribute("aria-selected", "false");
        const openedTabPannel = document.getElementById(openedTab);
        openedTabPannel.style.display = "none";
        openedTabPannel.style.paddingTop = "0";
      }
    });

    const selectedTab = el.getAttribute("aria-controls");
    el.classList.add("selected");
    el.setAttribute("aria-selected", "true");
    const selectedTabPannel = document.getElementById(selectedTab);
    selectedTabPannel.style.display = "block";
    selectedTabPannel.style.paddingTop = "100px";
  };

  const render = () => {
    nav_li[4].classList.add("selected");
    nav_li[4].setAttribute("aria-selected", "true");
    const firstTabtoShow = nav_li[4].getAttribute("aria-controls");
    const firstSelectedPannel = document.getElementById(firstTabtoShow);
    firstSelectedPannel.style.display = "block";
    firstSelectedPannel.style.paddingTop = "100px";
  };

  render();
  nav_li.forEach((x) => x.addEventListener("click", (e) => liHandler(x, e)));
};

export default nav;
