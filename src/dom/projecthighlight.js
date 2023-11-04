const inbox = document.querySelector('.inbox');

export function defaultInboxHighlight() {
  inbox.classList.remove('white');
  inbox.classList.add('grey');
}

export function changeProjWhite() {
  const projContainer = document.querySelector('.project-container');
  const projects = projContainer.childNodes;
  [...projects].forEach((project) => {
    project.classList.remove('grey');
    project.classList.add('white');
  });
}

export function loadHighlighting() {
  // default highlighting set to inbox
  changeProjWhite();
  defaultInboxHighlight();

  function updateHighlight(event) {
    if (event.target.matches('.proj')) {
      // highlight the project selected
      changeProjWhite();
      inbox.classList.remove('grey');
      inbox.classList.add('white');
      event.target.classList.remove('white');
      event.target.classList.add('grey');
    } else if (event.target.matches('.inbox')) {
      // highlight the inbox if selected
      changeProjWhite();
      defaultInboxHighlight();
    }
  }

  document.addEventListener('click', updateHighlight);
}
