import { deleteModalLoader } from './deletemodal';
import { storageContainers } from '../logic/storage';
import { renderAllTodos } from './todorender';
import { changeProjWhite, defaultInboxHighlight } from './projecthighlight';

export function deleteModal(proj) {
  deleteModalLoader();

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'flex';

  const deleteBtn = document.querySelector('.modal-delete-btn');
  const cancelBtn = document.querySelector('.modal-cancel-btn');

  deleteBtn.addEventListener('click', function () {
    storageContainers.deleteProject(proj.target.parentNode.parentNode.data.id);
    changeProjWhite();
    defaultInboxHighlight();
    renderAllTodos();
    modal.remove();
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
