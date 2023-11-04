import { storageContainers } from '../logic/storage';
import deleteImage from '../assets/trash-xmark-svgrepo-com.svg';
const projContainer = document.querySelector('.project-container');

const renderProjects = () => {
  while (projContainer.firstChild)
    projContainer.removeChild(projContainer.lastChild);
  //Resets projContainer and then render
  storageContainers.getProjectContainer().forEach((project) => {
    const newProj = document.createElement('div');
    newProj.textContent = project.title;
    newProj.data = project;
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('proj-delete');
    const deleteIcon = new Image();
    deleteIcon.src = deleteImage;
    deleteIcon.setAttribute('id', 'delete-icon');
    deleteBtn.appendChild(deleteIcon);
    newProj.appendChild(deleteBtn);
    newProj.classList.add('proj');
    projContainer.appendChild(newProj);
  });
};

export { renderProjects };
