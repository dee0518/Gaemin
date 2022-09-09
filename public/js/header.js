const header = () => {
  const $body = document.querySelector("body");
  const $ModalOpenBtn = document.querySelector(".header__top__location");
  const $modal = document.querySelector(".modal");
  const $addAddressBtn = document.querySelector(
    ".modal__body__add__address__btn"
  );
  const $myPlaceList = document.querySelector(".my__place__list");
  const $countContainer = document.querySelector(".local__count__group");
  const $count = document.querySelector(".local__count");

  const modalHandler = () => {
    $modal.style.display = "block";
    $body.style.overflow = "hidden";

    $addAddressBtn.focus();
  };

  const modalOff = () => {
    $modal.style.display = "none";
    $body.style.overflow = "auto";
  };

  $ModalOpenBtn.addEventListener("click", modalHandler);
  $modal.addEventListener("click", (e) => {
    if (
      e.target.closest(".modal__body") &&
      !e.target.classList.contains("modal__body__close__btn")
    )
      return;

    modalOff();
  });

  $myPlaceList.addEventListener("click", (e) => {
    if (e.target.matches(".my__place__list")) return;

    modalOff();
    $ModalOpenBtn.textContent =
      e.target.closest("li").firstElementChild.textContent;
  });

  window.addEventListener("DOMContentLoaded", () => {
    const count = localStorage.getItem("cart");
    if (count === null) return;

    $count.textContent = count;
    $countContainer.style.display = "block";
  });
};

export default header;
