function menuBarAnimation(x){
    x.classList.toggle('change');
    document.getElementById("nav").classList.toggle('drop');
}
function scrollToContent() {
    document.querySelector('#content').scrollIntoView({behavior: 'smooth'});
  }