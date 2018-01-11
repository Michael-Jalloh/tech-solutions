$ = function(id){
  return document.getElementById(id);
}

var show = function(id) {
  $(id).style.display = 'block';
  return false;

}

var hide = function(id) {
  $(id).style.display = 'none';
  return false;
}
