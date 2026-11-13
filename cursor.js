const flyImg = document.createElement('img');
flyImg.src = 'assets/fly.webp';
flyImg.id = 'cursor-fly';
flyImg.setAttribute('aria-hidden', 'true');
flyImg.alt = '';

document.body.appendChild(flyImg);

const fly = document.getElementById('cursor-fly');
const mamouscaLink = document.querySelector('.portfolio-title a');
const wowWord = document.querySelector('.wow');

window.addEventListener('mousemove', (e) =>{
	fly.style.left = `${e.clientX}px`;
	fly.style.top = `${e.clientY}px`;
})

mamouscaLink.addEventListener('mouseenter', () => fly.classList.add('active'));
mamouscaLink.addEventListener('mouseleave', () => fly.classList.remove('active'));

if (wowWord) {
	wowWord.addEventListener('mouseenter', () => fly.classList.add('active'));
	wowWord.addEventListener('mouseleave', () => fly.classList.remove('active'));
}
