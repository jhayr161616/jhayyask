const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const salita  = document.querySelector('#salita');
const gif = document.querySelector('#gif');
const kanta = document.querySelector('#kanta');

no.addEventListener('click', () => {
  kanta.play();
  const att = no.getBoundingClientRect();
  
  const x = window.innerWidth - att.width;
  const y = window.innerHeight - att.height;
  
  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);
  
    
  no.style.top = randomY + 'px';
  no.style.left = randomX + 'px';
  
})

yes.addEventListener('click', () => {
    salita.innerHTML = 'YEYYY!';
    gif.src = "/jhayyask/after.gif";
    yes.hidden = true;
    no.hidden = true;
})
