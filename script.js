const btnRight = document.querySelector('.button-right')
const btnLeft = document.querySelector('.button-left')

const imgContainer = document.querySelector('.img-container')
const imgs = document.querySelectorAll('.img-container img')

let count = 0

btnRight.addEventListener('click', () => {
  count++
  // -1 * 600
  imgContainer.style.transform = `translateX(${-count * 600}px)`
  if (count >= imgs.length - 1) {
    btnRight.style.display = 'none'
  }
  btnLeft.style.display = 'block'
  let windowWidth = window.innerWidth
  if (windowWidth <= 640) {
      imgContainer.style.transform = `translateX(${-count * 250}px)`;
  }
})

btnLeft.addEventListener('click', () => {
  count--;
  // -1 * 600
  imgContainer.style.transform = `translateX(${-count * 600}px)`;
  if (count === 0) {
    btnLeft.style.display = 'none';
  }
  btnRight.style.display = 'block';
  let windowWidth = window.innerWidth;
  if (windowWidth <= 640) {
    imgContainer.style.transform = `translateX(${-count * 250}px)`;
  }
});