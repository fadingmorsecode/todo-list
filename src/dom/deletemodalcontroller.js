import { deleteModalLoader } from './deletemodal';
import { storageContainers } from '../logic/storage';

export function deleteModal(proj) {
  deleteModalLoader();

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'flex';

  const deleteBtn = document.querySelector('.modal-delete-btn');
  const cancelBtn = document.querySelector('.modal-cancel-btn');

  deleteBtn.addEventListener('click', function () {
    console.log(proj.target.parentNode.parentNode.data.id);
    storageContainers.deleteProject(proj.target.parentNode.parentNode.data.id);
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.remove();
    }
  });

  cancelBtn.addEventListener('click', function () {
    modal.remove();
  });
}
