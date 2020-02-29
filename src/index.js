import sum from './sum';
import axios from 'axios';

const Carousel = require("vanilla-js-carousel");

const carousel = new Carousel({
  elem: 'carousel',    // id of the carousel container
  autoplay: false,     // starts the rotation automatically
  infinite: true,      // enables the infinite mode
  interval: 2000,      // interval between slide changes
  initial: 0,          // slide to start with
  dots: true,          // show navigation dots
  arrows: true,        // show navigation arrows
  buttons: false,      // hide play/stop buttons,
  btnStopText: 'Pause' // STOP button text
});
carousel.play();

const yourMessages = [
  'Scoops ahoy',
  'Where are you located/found?',
  'What do you think about kids?',
  'Is there Ice Cream in <ZIP>?'
]

const botMessages = [
  'Starcourt mall, Hawkins Indiana',
  'Turns out Im a pretty damn good babysitter.',
  'Man, kids are the worst! Who needs em, anyway?'
]


console.log(sum(1,2));

const main = async () => {
  const res = await axios.get('https://project.wnyc.org/ice-cream/data/places.json');
  // console.log(res.data);
  const addresses = res.data.map(shops => {
    const address = shops.address
    const shopName = shops.name
    console.log(address);
  })
}

main();

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

const modalBody = document.querySelector(".modal-body")
const msgerForm = document.querySelector(".msger-inputarea");
const msgerInput = document.querySelector(".msger-input");

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
msgerForm.addEventListener('submit', event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if(!msgText) return;

  console.log(msgText);
  appendMessage("right", msgText);
  msgerInput.value = "";

  botResponse();
})

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function appendMessage(side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-bubble">
        <div class="msg-info"></div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  modalBody.insertAdjacentHTML("beforeend", msgHTML);
  modalBody.scrollTop += 500;
}

function botResponse() {
  const botMsg = "What's upp??";

    setTimeout(() => {
    appendMessage("left", botMsg);
  }, 1500);
}
