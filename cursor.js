const fly = document.createElement('img');
fly.src = 'assets/fly.webp';
fly.id = 'cursor-fly';
fly.alt = '';
fly.setAttribute('aria-hidden', 'true');
document.body.appendChild(fly);

const hoverTargets = '.portfolio-title a, .wow, .who';

window.addEventListener('mousemove', (e) => {
	fly.style.left = `${e.clientX}px`;
	fly.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseover', (e) => {
	fly.classList.toggle('active', !!e.target.closest(hoverTargets));
});
