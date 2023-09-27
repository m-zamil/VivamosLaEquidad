let anchorlinks = document.querySelectorAll('a[href^="#"]');
let prevTarget = null;

for (let item of anchorlinks) {
  // relitere
  item.addEventListener('click', (e) => {
    if (prevTarget) {
      prevTarget.style.maxHeight = null;
      prevTarget.classList.remove('active');
    }
    let hashval = item.getAttribute('href');
    let target = document.querySelector(hashval);
    target.classList.add('active');
    target.style.maxHeight = target.scrollHeight + 'px';
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    history.pushState(null, null, hashval);
    prevTarget = target;
    e.preventDefault();
  });
}
