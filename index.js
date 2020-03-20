
function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
  const nestedDivs = document.getElementById('nested').querySelectorAll('div')
  for (let i = 0; i < nestedDivs.length; i++) {
    return nestedDivs
  }
}

function increaseRankBy(n) {

}
