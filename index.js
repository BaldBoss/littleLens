function menuBarAnimation(x){
    x.classList.toggle('change');
    document.getElementById("nav").classList.toggle('drop');
}
function scrollToContent() {
    document.querySelector('#content').scrollIntoView({behavior: 'smooth'});
  }
function dropDetail(){
    document.getElementById("cardDetail").classList.toggle('dropDetail');
    var elem = document.getElementById('btnDetail');
    if(elem.value == 'Đóng'){
        elem.value = 'Chi tiết'
    }else{
        elem.value = 'Đóng'
    }
}
function dropDetail2(){
    document.getElementById("cardDetail2").classList.toggle('dropDetail');
    var elem = document.getElementById('btnDetail2');
    if(elem.value == 'Đóng'){
        elem.value = 'Chi tiết'
    }else{
        elem.value = 'Đóng'
    }
}
function dropDetail3(){
    document.getElementById("cardDetail3").classList.toggle('dropDetail');
    var elem = document.getElementById('btnDetail3');
    if(elem.value == 'Đóng'){
        elem.value = 'Chi tiết'
    }else{
        elem.value = 'Đóng'
    }
}
function showContact(){
    document.getElementById('formContent').classList.toggle('showContact');
}