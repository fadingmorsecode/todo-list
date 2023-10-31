import { storageContainers } from '../logic/storage';

const projectContainer = document.querySelector('.project-container');

export function loadDeleteProjListener() {
  function deleteProj(event) {
    if (event.target.matches('#delete-icon')) {
      storageContainers.deleteProject(
        event.target.parentNode.parentNode.data.id
      );
    }
  }
  projectContainer.addEventListener('click', deleteProj);
}
