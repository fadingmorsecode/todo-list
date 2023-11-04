import { createProject } from '../logic/projectcreation';
import { renderProjects } from './projectrender';

export function loadNewProjListener() {
  const newProjInput = document.querySelector('#new-project-input');
  const projForm = document.querySelector('.proj-form');
  function newProjModal(event) {
    if (event.target.matches('.proj-submit-btn')) {
      if (projForm.checkValidity()) {
        event.preventDefault();
        createProject(newProjInput.value);

        // get currently selected project
        let currentlySelected = '';
        const projContainer = document.querySelector('.project-container');
        const projects = projContainer.childNodes;
        [...projects].forEach((project) => {
          if (project.classList.contains('grey')) {
            console.log((currentlySelected = project.data.id));
          }
        });

        renderProjects();

        [...projects].forEach((project) => {
          // add grey background to project if currently selected
          console.log(currentlySelected);
          if (project.data.id === currentlySelected) {
            console.log(project);
            project.classList.remove('white');
            project.classList.add('grey');
          } else {
            project.classList.add('white');
          }
        });

        projForm.reset();
      }
    }
  }

  document.addEventListener('click', newProjModal);
}
