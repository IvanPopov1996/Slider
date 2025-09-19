const entities = [
  { img: 'IMG/1.png', text1: 'Rostov-on-Don', text2: '81 m2', text3: '3.5 months', text4: 'LCD admiral' },
  { img: 'IMG/2.png', text1: 'Sochi', text2: '105 m2', text3: '4 months', text4: 'Thieves' },
  { img: 'IMG/3.png', text1: 'Rostov-on-Don', text2: '93 m2', text3: '3 months', text4: 'Patriotic' }
];

const img = document.querySelector('.image');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dot = document.querySelectorAll('.dots');
const zagolovok = document.querySelectorAll('.section2__li_a')
let currentIndex = 0;

const updateIndicators = (index) => {
 dot.forEach(dot => {
    dot.classList.remove('active');
  });
 dot[index].classList.add('active');
};
const updateName = (index) => {
zagolovok.forEach(zagolovok => {
    zagolovok.classList.remove('active');
  });
zagolovok[index].classList.add('active');
};

const setEntity = (index) => {
  img.style.backgroundImage = `url(${entities[index].img})`;
  text1.innerText = entities[index].text1;
  text2.innerText = entities[index].text2;
  text3.innerText = entities[index].text3;
  text4.innerText = entities[index].text4;
    updateIndicators(index);
    updateName(index)
  currentIndex = index; 
};

setEntity(currentIndex);

nextBtn.addEventListener('click', () => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= entities.length) {
    nextIndex = 0;
  }
  setEntity(nextIndex);
});

prevBtn.addEventListener('click', () => {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = entities.length - 1;
  }
  setEntity(prevIndex);
});