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
        renderProjects();
        projForm.reset();
      }
    }
  }

  document.addEventListener('click', newProjModal);
}
