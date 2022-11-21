// bird gallery  -----------------------------------------------------------

import birdGallery from './bird_gallery_list.js';

const galleryListContainer = document.querySelector('.category-birds-list');

birdGallery.forEach((item, index) => {   // or  for(let i = 0; i < birdGallery.length; i++) { }
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');
    // galleryItem.classList.remove('gallery-item_checked');
    galleryItem.textContent = item.name;
    galleryListContainer.append(galleryItem);

    galleryItem.addEventListener('click', () => {

        if (galleryItem.classList.contains('gallery-item_checked') )
        {
            galleryItem.classList.remove('gallery-item_checked') 
        } else {
            galleryItem.classList.add('gallery-item_checked') 
           }
        // galleryItem.classList.remove('gallery-item');
        // galleryItem.classList.add('gallery-item_checked');
        showRadioList(item.data);
        // galleryItem.classList.remove('gallery-item_checked');
    });
    // galleryItem.classList.remove('gallery-item_checked');
    // galleryItem.classList.add('gallery-item');
});


// mystery-bird  --------------------------------------------------------

const btnPlayMystery = document.querySelector('.mystery-play');


// const audioM = new Audio(item.audio);

// // console.log(item.audio);
// // console.log(audio);

// let isPlay = false;

// function playAudioM() {
//     if (!isPlay) {
//         audioM.src = item.audio;

//         console.log(item.audio);

//         audioM.currentTime = 0;
//         audioM.play();
//         isPlay = true;
//     } else {
//         audioM.pause();
//         isPlay = false;
//     }
// }
// btnPlayMystery.addEventListener('click', playAudioM);


btnPlayMystery.addEventListener('click', toggleBtnM);

function toggleBtnM() {
    btnPlayMystery.classList.toggle('pause');
    // playAudioM();
}




// bird ratio  ------------------------------------------------------------

const btnPlay = document.querySelector('.checked-play');

let audio;

function showRadioList(radio) {
    const radioListContainer = document.querySelector('.radio-birds-list');
    radioListContainer.innerHTML = '';
    // const galleryList = galleryListContainer.childNodes;

    radio.forEach((item, index) => {
        const radioItem = document.createElement('div');
        radioItem.classList.add('radio-item');
        radioListContainer.append(radioItem);

        const inputItem = document.createElement('input');
        inputItem.classList.add('input-item');
        inputItem.setAttribute('type', 'radio');
        inputItem.setAttribute('id', item.name);
        inputItem.setAttribute('name', 'choose');
        inputItem.setAttribute('value', item.name);
        radioItem.append(inputItem);

        const labelItem = document.createElement('label');
        labelItem.classList.add('label-item');
        labelItem.textContent = item.name;
        labelItem.setAttribute('for', item.name);
        radioItem.append(labelItem);

        radioItem.addEventListener('click', () => {
            const image = document.querySelector('#image');
            const name = document.querySelector('#name');
            const species = document.querySelector('#species');
            // const audio = document.querySelector('#audio');

            const description = document.querySelector('#description');

            image.src = item.image;
            image.alt = item.name;
            image.width = 200;
            image.height = 150;

            name.textContent = item.name;
            species.textContent = item.species;
            description.textContent = item.description;





            // player  -----------------------------------------------------------------------


            const currentTime = document.querySelector('.current-time');
            const trackDuration = document.querySelector('.track-duration');

            audio = new Audio(item.audio);

            // console.log(item.audio);
            // console.log(audio);

            let isPlay = false;
            let playNum = 0;

            function playAudio() {
                if (!isPlay) {
                    // audio.src = "https://github.com/IuliiaPi/stage1-tasks/blob/momentum/assets/sounds/Aqua%20Caelestis.mp3?raw=true";
                    // audio.src = "../assets/sounds/River Flows In You.mp3"

                    audio.src = item.audio;

                    console.log(item.audio);

                    audio.currentTime = 0;
                    audio.play();
                    isPlay = true;

                    // trackDuration.textContent = `${playList[playNum].duration}`;
                } else {
                    audio.pause();
                    isPlay = false;
                }
            }
            btnPlay.addEventListener('click', playAudio);

        });

    });
}

btnPlay.addEventListener('click', toggleBtn);

function toggleBtn() {
    btnPlay.classList.toggle('pause');
    playAudio();
}


// volume 
const volume = document.querySelectorAll('.volume');
const volumeRange = document.querySelectorAll('.volume-range');

// for (let i = 0; i < volume.length; i++) {
//     volume[i].addEventListener('click', toggleBtnVolume);
//   }

volume.forEach((e) => {

    function toggleBtnVolume() {
        if (e.classList.toggle('mute')) {
            audio.volume = 0;
        } else {
            audio.volume = 0.5;
        }
    }

    e.addEventListener('click', toggleBtnVolume);
});

volumeRange.forEach((e) => {

    function changeVolume() {
        audio.volume = e.value / 1;
    }

    e.addEventListener('change', changeVolume);
});


// birdsData --------------------------------------------------

// function showCheckedBird() {
//     console.log("hi0000");
//     // const birdCheckedContainer = document.querySelector('.block__checked-bird');
//     // birdCheckedContainer.innerHTML = '';

//     const name = document.querySelector('#name');
//     const species = document.querySelector('#species');
//     const audio = document.querySelector('#audio');
//     // audio.innerHTML = birdsData_1.audio;
//     const description = document.querySelector('#description');
//     const image = document.querySelector('#image');

//     bird.forEach((item, index) => {   // or  for(let i = 0; i < playList.length; i++) { }


//         name.textContent = item.name;
//         console.log("hi1111");
//         species.textContent = item.species;

//     });
// }



// function showCheckedBird(bird) {
//     const birdCheckedContainer = document.querySelector('.block__checked-bird');
//     // birdCheckedContainer.innerHTML = '';

//     bird.forEach((item, index) => {

//         const birdItem = document.createElement('div');
//         birdItem.classList.add('bird-item');
//         birdCheckedContainer.append(birdItem);

//         const image = document.createElement('img');
//         image.classList.add('checked-bird__img');
//         image.src = item.image;
//         image.alt = item.name;
//         image.width = 200;
//         image.height = 150;
//         birdItem.append(image);

//         const name = document.createElement('h2');
//         name.classList.add('checked-bird__title');
//         name.textContent = item.name;  // or li.textContent = `${playList[index].title}`;
//         birdItem.append(name);

//         const species = document.createElement('p');
//         species.classList.add('checked-bird__subtitle');
//         species.textContent = item.species;
//         birdItem.append(species);

//         const audio = document.createElement('div');
//         audio.classList.add('player');
//         // audio.src = item.audio;
//         birdItem.append(audio);

//         const description = document.createElement('p');
//         description.classList.add('checked-bird__description');
//         description.textContent = item.description;
//         birdItem.append(description);
//     });
// }



// btn__next ---------------------------------------------------------------

const btnSlideNext = document.querySelector('.btn__next');


// let playNum = 0;
// name.textContent = `${birdsData_1[playNum].name}`;
// species.textContent = `${birdsData_1[playNum].species}`;
// // audio.textContent = `${birdsData_1[playNum].audio}`;
// description.textContent = `${birdsData_1[playNum].description}`;
// image.src = `${birdsData_1[playNum].image}`;


// let randomNum;
// function getRandomNum() {
//     randomNum = Math.floor(Math.random() * 6) + 1;  // Returns a random integer from 1 to 20
// }
// getRandomNum();

// function setBg() {
//     let bgNum = String(randomNum).padStart(2, "0");
//     const img = new Image();
//     const imageSrc = `./assets/img/mystery_bird.jpeg`;
//     // const imageSrc = `https://github.com/IuliiaPi/stage1-tasks/blob/assets/images/${timeOfDay}/${bgNum}.jpg?raw=true`;
//     img.src = imageSrc;
//     img.addEventListener('load', () => {  //  or  img.onload = () => {
//         // document.body.style.backgroundImage = `url(${imageSrc})`;
//     });
// };
// setBg();

// function setBg() {
//     let playNum = 0;
//     name.textContent = `${birdsData_1[playNum].name}`;
//     species.textContent = `${birdsData_1[playNum].species}`;
//     // audio.textContent = `${birdsData_1[playNum].audio}`;
//     description.textContent = `${birdsData_1[playNum].description}`;
//     image.src = `${birdsData_1[playNum].image}`;
// };
// setBg();

// function getSlideNext() {
//     if (randomNum === 6) {
//         randomNum = 1;
//     } else {
//         randomNum++;
//     }
//     setBg();
// }
// btnSlideNext.addEventListener("click", getSlideNext);



