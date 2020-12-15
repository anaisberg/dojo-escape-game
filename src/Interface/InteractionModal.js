// Get the modal
const modal = document.getElementById("myModal");
export const sphinxModal = document.getElementById("sphinxModal");
export const lastModal = document.getElementById("lastModal");

modal.style.display = "none";

export const askForPlayerName = () => {
  modal.style.display = "block";
}

export const validateButton = document.getElementById("validate-name");

export const validateName = () => {
  let name = document.getElementById("player-name").value;
  if (!!name) {
    localStorage.setItem('playerName', name);
  } else {
    name = 'Chris';
    localStorage.setItem('playerName', 'Chris');
  }
  modal.style.display = "none";
  return name;
}

export const openSphinxEnigma = () => {
  sphinxModal.style.display = "block";
}

export const validateAnswerButton = document.getElementById('validate-answer');

export const validateSphinxAnswer = () => {
  const input = document.getElementById("answer")
  const answer = input.value.toLowerCase();
  return answer
}

export const openLastEnigma = () => {
  lastModal.style.display = "block";
}

export const validateLastAnswerButton = document.getElementById('validate-last-answer');

export const validateLastAnswer = () => {
  const input = document.getElementById("last-answer")
  const answer = input.value.toLowerCase();
  return answer
}

export const openEnding = () => {
  endingModal.style.display = "block";
}


