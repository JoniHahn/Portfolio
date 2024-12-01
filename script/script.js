// Flower animation
// https://codepen.io/theArtsy07/pen/oNPOVqB
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };