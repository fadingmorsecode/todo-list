import { deleteModalLoader } from './deletemodal';
import { storageContainers } from '../logic/storage';

export function deleteModal(event) {
  deleteModalLoader();

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'flex';

  const deleteBtn = document.querySelector('.modal-delete-btn');
  const cancelBtn = document.querySelector('.modal-cancel-btn');

  deleteBtn.addEventListener('click', function () {
    storageContainers.deleteProject(event.target.parentNode.parentNode.data.id);
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  cancelBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });
}
