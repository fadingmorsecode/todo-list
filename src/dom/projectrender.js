import { storageContainers } from '../logic/storage';
import deleteImage from '../assets/trash-xmark-svgrepo-com.svg';
const projContainer = document.querySelector('.project-container');

const renderProjects = () => {
  while (projContainer.firstChild)
    projContainer.removeChild(projContainer.lastChild);
  //Resets projContainer and then render
  storageContainers.projectContainer.forEach((project) => {
    const newProj = document.createElement('div');
    const newProjPara = document.createElement('p');
    newProjPara.textContent = project;
    newProj.appendChild(newProjPara);
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('proj-delete');
    const deleteIcon = new Image();
    deleteIcon.src = deleteImage;
    deleteBtn.appendChild(deleteIcon);
    newProj.appendChild(deleteBtn);
    newProj.classList.add('proj');
    projContainer.appendChild(newProj);
  });
};

export { renderProjects };
