const list = document.getElementById('projects');

function createCard({ title, year, category, type, description, image }) {
  const card = document.createElement('li');
  card.className = 'project-card';

  card.innerHTML = `
    <img src="${image}" alt="${title}" loading="lazy">
    <h2>${title}</h2>
    <p class="project-info">${category} · ${type} · ${year}</p>
    <p>${description}</p>
  `;
  return card;
}

async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const projects = await response.json();

    list.replaceChildren(...projects.map(createCard));
  } catch (error) {
    list.textContent = 'Could not load the projects.';
    console.error(error);
  }
}

loadProjects();