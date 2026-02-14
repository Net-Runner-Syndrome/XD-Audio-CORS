const valentinesMsg = document.getElementById('Message');
const img = document.getElementById('Miku');

img.addEventListener('click', ()=>{
valentinesMsg.textContent = "Valentines is both a curse and a blessing, Happy Valentines Day! <3";
    setTimeout(() => {
        img.remove();
    }, 2500);

    setTimeout(() => {
        valentinesMsg.textContent = "Miku will redirect you to an awesome slideshow";
    }, 2500);

    setTimeout(() => {
          valentinesMsg.style.color = "red";
          valentinesMsg.style.textShadow = "0 0 10px red, 0 0 20px red, 0 0 30px red";
          valentinesMsg.textContent = "You Can Trust Miku";
    }, 4500);

    setTimeout(() => {
          valentinesMsg.style.color = "cyan";
          valentinesMsg.style.textShadow = `
    0 0 5px cyan,
    0 0 10px cyan,
    0 0 20px cyan,
    0 0 40px cyan`;
          valentinesMsg.textContent = "redirecting.";
    }, 5500);
    setTimeout(() => {
          valentinesMsg.textContent = "redirecting..";
    }, 6500);
    setTimeout(() => {
          valentinesMsg.textContent = "redirecting...";
    }, 7500);

    setTimeout(() => {
          valentinesMsg.textContent = "redirecting.";
    }, 8500);
    setTimeout(() => {
          valentinesMsg.textContent = "redirecting..";
    }, 9500);
    setTimeout(() => {
          valentinesMsg.textContent = "redirecting...";
    }, 10500);

    setTimeout(() => {
    window.location.href = "slideshow.html";
}, 11000);

});
