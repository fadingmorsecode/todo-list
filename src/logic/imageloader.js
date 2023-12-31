import logoImage from '../assets/tasktigerlogo.svg';
import plusImage from '../assets/plus-circle-svgrepo-com.svg';

const loadImages = () => {
  const logoContainer = document.querySelector('.logo-img');
  const logoIcon = new Image();
  logoIcon.src = logoImage;
  logoContainer.appendChild(logoIcon);

  const plusIconContainer = document.querySelector('.new-task-btn');
  const plusIcon = new Image();
  plusIcon.src = plusImage;
  plusIcon.classList.add('plus-icon');
  plusIconContainer.appendChild(plusIcon);
};

export { loadImages };
