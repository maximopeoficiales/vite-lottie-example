import './style.css'
import lottie from "lottie-web";

const $loader = document.querySelector('.loader')!;
const $content = document.querySelector('.content')!;

document.addEventListener('load', () => {
  console.log("me ejecuto");

  setTimeout(() => {
    $loader.classList.toggle('d-none');
    $content.classList.toggle('d-none');
  }, 5000);
});

const $app = document.querySelector<HTMLDivElement>('#app')!;

let instanceLottie = lottie.loadAnimation({
  container: $app, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './lottie-files/tv.json' // the path to the animation json
});


$app.addEventListener("click", function (e) {
  console.log("estoy haciendo focus");
  instanceLottie.destroy()
  instanceLottie = lottie.loadAnimation({
    container: $app, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie-files/javascript-logo.json' // the path to the animation json
  });

})
// instanceLottie.addEventListener('', () => {
//   console.log("se completo la animacion");

// });