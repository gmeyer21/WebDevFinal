// select all the elements that you want to animate
const elements = document.querySelectorAll('.fade-in');

// loop through each element and apply the animation
elements.forEach(element => {
  element.style.opacity = 0; // start with opacity of 0
  let start = null;
  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    element.style.opacity = progress / 1000; // increase opacity gradually
    if (progress < 1000) {
      window.requestAnimationFrame(animate); // repeat the animation
    }
  }
  window.requestAnimationFrame(animate);
});