import { deleteModal } from './deletemodalcontroller';

const projectContainer = document.querySelector('.project-container');

export function loadDeleteProjListener() {
  function deleteProj(event) {
    if (event.target.matches('#delete-icon')) {
      deleteModal(event);
      console.log(event.target.parentNode.parentNode.data.id);
    }
  }
  projectContainer.addEventListener('click', deleteProj);
}
