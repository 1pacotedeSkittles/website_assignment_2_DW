const list = document.getElementById('projects');
let projects = [];

const dialog = document.createElement('dialog');
dialog.className = 'project-dialog';
dialog.innerHTML = `
	<button class="dialog-close" type="button" aria-label="Close">close</button>

	<div class="slider">
		<button class="slider-btn" type="button" data-dir="-1" aria-label="Previous image"></button>
		<div class="slider-track" tabindex="0" aria-label="Project images"></div>
		<button class="slider-btn" type="button" data-dir="1" aria-label="Next image"></button>
	</div>

	<h2 class="dialog-title"></h2>
	<p class="project-info dialog-info"></p>
	<p class="dialog-description"></p>
`;
document.body.append(dialog);

const track = dialog.querySelector('.slider-track');
const prevBtn = dialog.querySelector('.slider-btn[data-dir="-1"]');
const nextBtn = dialog.querySelector('.slider-btn[data-dir="1"]');
const dialogTitle = dialog.querySelector('.dialog-title');
const dialogInfo = dialog.querySelector('.dialog-info');
const dialogDescription = dialog.querySelector('.dialog-description');

function createCard({ title, year, category, type, description, image }, index) {
	const card = document.createElement('li');
	card.className = 'project-card';

	card.innerHTML = `
		<div class="project-media">
			<img src="${image}" alt="${title}" loading="lazy">
			<div class="project-overlay">
				<button class="project-more" type="button" data-index="${index}">See more</button>
			</div>
		</div>
		<div class="project-head">
			<h2>${title}</h2>
			<button class="project-more" type="button" data-index="${index}">See more</button>
		</div>
		<p class="project-info">${category} · ${type} · ${year}</p>
		<p>${description}</p>
	`;
	return card;
}

function updateSliderButtons() {
	const noScroll = track.scrollWidth <= track.clientWidth;
	const atStart = track.scrollLeft <= 0;
	const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;

	prevBtn.style.visibility = noScroll || atStart ? 'hidden' : 'visible';
	nextBtn.style.visibility = noScroll || atEnd ? 'hidden' : 'visible';
}

function openProject(index) {
	const { title, year, category, type, description, image, images } = projects[index];
	const gallery = Array.isArray(images) ? images : [image];

	track.replaceChildren(...gallery.map((src) => {
		const img = document.createElement('img');
		img.src = src;
		img.alt = title;
		return img;
	}));
	track.scrollTo({ left: 0 });

	dialogTitle.textContent = title;
	dialogInfo.textContent = `${category} · ${type} · ${year}`;
	dialogDescription.textContent = description;

	dialog.showModal();
	requestAnimationFrame(updateSliderButtons);
}

list.addEventListener('click', (e) => {
	const button = e.target.closest('.project-more');
	if (button) openProject(Number(button.dataset.index));
});

dialog.addEventListener('click', (e) => {
	const arrow = e.target.closest('.slider-btn');
	if (arrow) {
		track.scrollBy({ left: track.clientWidth * Number(arrow.dataset.dir), behavior: 'smooth' });
		return;
	}
	if (e.target === dialog || e.target.closest('.dialog-close')) dialog.close();
});

track.addEventListener('scroll', updateSliderButtons);

async function loadProjects() {
	try {
		const response = await fetch('projects.json');
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		projects = await response.json();

		list.replaceChildren(...projects.map(createCard));
	} catch (error) {
		list.textContent = 'Could not load the projects.';
		console.error(error);
	}
}

loadProjects();