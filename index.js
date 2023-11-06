let width = document.getElementById('width');
var onresize = function() {
   //your code here
   //this is just an example
   width.innerText = document.body.clientWidth;
   width.classList.add('display-width');
   setTimeout(() => {
       width.classList.remove('display-width');
   }, 2000)
}
window.addEventListener("resize", onresize);
