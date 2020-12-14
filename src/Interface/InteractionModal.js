// Get the modal
const modal = document.getElementById("myModal");
export const sphinxModal = document.getElementById("sphinxModal");

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
  let correctAnswer = true;
  if (!answer) correctAnswer = false;
  if ((answer !== 'stars') && (answer !== 'star')) correctAnswer = false;
  return correctAnswer
}

export const openEnding = () => {
  endingModal.style.display = "block";
}


