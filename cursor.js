const fly = document.getElementById('cursor-fly');
const mamouscaLink = document.querySelector('.portfolio-title a');

window.addEventListener('mousemove', (e) =>{
	fly.style.left = `${e.clientX}px`;
	fly.style.top = `${e.clientY}px`;
})


mamouscaLink.addEventListener('mouseenter', () => fly.classList.add('active'));
mamouscaLink.addEventListener('mouseleave', () => fly.classList.remove('active'));
