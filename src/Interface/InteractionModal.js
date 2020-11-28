// Get the modal
const modal = document.getElementById("myModal");

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

