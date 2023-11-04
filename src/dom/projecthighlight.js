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
  //DEFAULT HIGHLIGHT TO BE INBOX.
  changeProjWhite();
  defaultInboxHighlight();

  //FUNCTION FOR CHANGING HIGHLIGHT UPON EVENT LISTENER

  function updateHighlight(event) {
    if (event.target.matches('.proj')) {
      changeProjWhite();
      inbox.classList.remove('grey');
      inbox.classList.add('white');
      event.target.classList.remove('white');
      event.target.classList.add('grey');
    } else if (event.target.matches('.inbox')) {
      changeProjWhite();
      defaultInboxHighlight();
    }
  }
  //EVENT LISTENER ON DOCUMENT
  document.addEventListener('click', updateHighlight);
}
