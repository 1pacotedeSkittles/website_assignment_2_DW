const wow = document.querySelector('.wow');
let current = null;

wow.addEventListener('click', () => {
  if (current) current.cancel();

  current = wow.animate(
    [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(-12deg)', offset: 0.2},
      {transform: 'rotate(360deg)'}
    ],
    { duration: 2200, easing: 'cubic-bezier(.45, 0, .2, 1)' }
  );
});