export function deleteModalLoader() {
  const body = document.querySelector('body');
  const modalContainer = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalParagraph = document.createElement('p');
  const modalBtnsContainer = document.createElement('div');
  const modalCancelBtn = document.createElement('button');
  const modalDeleteBtn = document.createElement('button');

  modalParagraph.textContent =
    'Are you sure you want to delete the project and all of its contents?';
  modalDeleteBtn.textContent = 'Delete';
  modalCancelBtn.textContent = 'Cancel';

  modalContainer.classList.add('modal-container');
  modalContent.classList.add('modal-content');
  modalParagraph.classList.add('modal-paragraph');
  modalBtnsContainer.classList.add('modal-btns-container');
  modalCancelBtn.classList.add('modal-btn');
  modalCancelBtn.classList.add('modal-cancel-btn');
  modalDeleteBtn.classList.add('modal-btn');
  modalDeleteBtn.classList.add('modal-delete-btn');

  modalContainer.appendChild(modalContent);
  modalContent.appendChild(modalParagraph);
  modalContent.appendChild(modalBtnsContainer);
  modalBtnsContainer.appendChild(modalCancelBtn);
  modalBtnsContainer.appendChild(modalDeleteBtn);
  body.appendChild(modalContainer);
}
