const wow = document.querySelector('.wow');
const who = document.querySelector('.who');

function spinOnClick(selector, duration = 2200) {
	const el = document.querySelector(selector);
	if (!el) return;               // evita erro se o elemento não existir
	let current = null;            // uma animação por elemento

	el.addEventListener('click', () => {
		if (current) current.cancel();
		current = el.animate(
			[
				{ transform: 'rotate(0deg)' },
				{ transform: 'rotate(-12deg)', offset: 0.2 },
				{ transform: 'rotate(360deg)' }
			],
			{ duration, easing: 'cubic-bezier(.45, 0, .2, 1)' }
		);
	});
}

spinOnClick('.wow');
spinOnClick('.who');