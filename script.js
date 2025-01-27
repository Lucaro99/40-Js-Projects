document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        'Change Color',
        'Counter',
        'Carrusel',
        'NavBar',
        'SideBar',
        'Modal',
        'Questions',
        'Menu',
        'VideoProject',
        'ScrollProject',
        'Tabs',
        'Timer',
        'LoremIpsum',
        'List'

        // Añade más carpetas de proyecto aquí
    ];

    const projectListElement = document.getElementById('projectList');

    projects.forEach((project) => {
        const projectElement = document.createElement('a');
        projectElement.href = `./${project}/index.html`;
        projectElement.textContent = project;
        projectElement.className = 'project';
        projectListElement.appendChild(projectElement);
    });
});