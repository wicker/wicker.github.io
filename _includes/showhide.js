/* add 'hidden' class to only desired elements */

function show(c) {
  c = 'web-design__box-'+c;
  var elements = [...document.getElementsByClassName("web-design__box")];
  for (var i = 0; i < elements.length; i++) {
    elClassList = elements[i].classList;
    if (c == 'web-design__box-all' || elClassList.contains(c)) {
      elements[i].classList.remove('hidden');
    } else {
      elements[i].classList.add('hidden');
    }
  }
}
