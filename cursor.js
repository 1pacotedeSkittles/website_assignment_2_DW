const fly = document.createElement('img');
fly.src = 'assets/fly.webp';
fly.id = 'cursor-fly';
fly.alt = '';
fly.setAttribute('aria-hidden', 'true');
document.body.appendChild(fly);

window.addEventListener('mousemove', (e) => {
	fly.style.left = `${e.clientX}px`;
	fly.style.top = `${e.clientY}px`;
});