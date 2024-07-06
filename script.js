
const myGlitchContainer = document.querySelector('.myGlitchContainer');
const myGlitchFrequency = 200; 
const myGlitchDuration = 300; 
const myColors = [
  'rgba(0, 255, 0, 0.5)', // Green
  'rgba(128, 0, 128, 0.5)', // Purple
  'rgba(255, 0, 0, 0.5)' // Red
];

function myCreateGlitchElement() {
  const myGlitchElement = document.createElement('div');
  myGlitchElement.classList.add('myGlitchElement');
  
  myGlitchElement.style.top = `${Math.random() * 100}vh`;
  myGlitchElement.style.left = `${Math.random() * 100}vw`;

  const isHorizontal = Math.random() > 0.5;

  if (isHorizontal) {
    myGlitchElement.style.width = `${Math.random() * 20 + 80}vw`;
    myGlitchElement.style.height = '5px';
  } else {
    myGlitchElement.style.width = '5px';
    myGlitchElement.style.height = `${Math.random() * 20 + 80}vh`;
  }

  const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
  myGlitchElement.style.backgroundColor = myRandomColor;

  myGlitchElement.style.animation = `myGlitchAnimation ${myGlitchDuration}ms infinite`;

  return myGlitchElement;
}

function myAddGlitch() {
  const myGlitchElement = myCreateGlitchElement();
  myGlitchContainer.appendChild(myGlitchElement);

  setTimeout(() => {
    myGlitchElement.remove();
  }, myGlitchDuration);
}

setInterval(myAddGlitch, myGlitchFrequency);
