import { createProject } from '../logic/projectcreation';
import { renderProjects } from './projectrender';
const newProjInput = document.querySelector('#new-project-input');
const newProjectsContainer = document.querySelector('.new-projects-container');
const invalidPara = document.createElement('p');
invalidPara.textContent = '1 to 16 characters';
invalidPara.setAttribute('id', 'invalid-proj');

export function loadNewProjListener() {
  function newProjModal(event) {
    if (event.target.matches('.new-proj-btn')) {
      if (newProjectsContainer.contains(invalidPara)) {
        newProjectsContainer.removeChild(invalidPara);
      }
      if (newProjInput.checkValidity()) {
        createProject(newProjInput.value);
        newProjInput.value = '';
        renderProjects();
      } else {
        newProjectsContainer.appendChild(invalidPara);
      }
    }
  }

  document.addEventListener('click', newProjModal);
}
