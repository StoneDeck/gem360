var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]'),
    mobile = form.querySelector('[name="mobile"]'),
    crgtype = form.querySelector('[name="crgtype"]');
    const data = {
        name: name.value,
        mobile: mobile.value,
        crgtype: crgtype.value,
    };
    console.log(data);
    toggleModal()
}