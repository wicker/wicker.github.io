/* add 'hidden' class to only desired elements */

function show(c) {
  c = 'portfolio__box-'+c;
  var elements = [...document.getElementsByClassName("portfolio__box")];
  for (var i = 0; i < elements.length; i++) {
    elClassList = elements[i].classList;
    if (c == 'portfolio__box-all' || elClassList.contains(c)) {
      elements[i].classList.remove('hidden');
    } else {
      elements[i].classList.add('hidden');
    }
  }
}
