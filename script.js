function complete(val) {
  var flag = true;
  var prog = document.querySelectorAll("#progress");
  var width = 1;
  var interv = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(interv);
    } else {
      width++;
      for (var i = 0; i < prog.length; i++) {
        prog[i].style.width = width + "%";
        prog[i].innerHTML = "<span  class='label' >" + width + "%" + "<span>";
      }
    }
  }
}
