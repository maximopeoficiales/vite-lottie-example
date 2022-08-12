import './style.css'
import lottie from "lottie-web";
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