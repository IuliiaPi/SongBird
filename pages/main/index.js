// header link -------------------------------------------------

// const galleryLink = document.querySelector('.header__gallery-link');
// const galleryItemLink = document.querySelector('.header__gallery-item');
// const birdVideo = document.querySelector('#video');
// const birdGallery = document.querySelector('#bird-gallery');

// galleryItemLink.addEventListener('click', () => {
// birdVideo.classList.add('hidden');
// birdGallery.classList.add('show');

// });



// bird gallery  ------------------------------------------------------

import birdGallery from './bird_gallery_list.js';
// console.log(birdGallery);

const galleryListContainer = document.querySelector('.gallery-list');
// const galleryList = galleryListContainer.childNodes;

birdGallery.forEach((item, index) => {   // or  for(let i = 0; i < birdGallery.length; i++) { }
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');
    galleryItem.textContent = item.name;
    galleryListContainer.append(galleryItem);

        galleryItem.addEventListener('click', () => {
            showBirdsList(item.data);
            // galleryItem.forEach (e => e.classList.remove('active'));
            // birdGallery.forEach((i) => {i.classList.remove('active')});
            
            galleryItem.classList.add('active');
       
            
            //     if (galleryItem.classList.contains('active')) {
            //         galleryItem.classList.remove('active');
            //    } else galleryItem.classList.add('active');
        });
    });




// let buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         buttons.forEach(btn => btn.classList.remove('active'));
//         this.classList.add('active');
//     });
// });


// birdsData ---------  birds list  -----------------------------------------

// const name = document.querySelector('#name');
// const species = document.querySelector('#species');
// const audio = document.querySelector('#audio');
// audio.innerHTML = birdsData_1.audio;
// const description = document.querySelector('#description');
// const image = document.querySelector('#image');

const btnPlay = document.querySelector('.play');

let audio = document.querySelector('.player');
// let audio;

function showBirdsList(birds) {
    const birdsListContainer = document.querySelector('.birds-list');
    birdsListContainer.innerHTML = '';

    birds.forEach((item, index) => {   // or  for(let i = 0; i < birds.length; i++) { }

        const birdItem = document.createElement('li');
        birdItem.classList.add('bird-item');
        birdsListContainer.append(birdItem);

        const image = document.createElement('img');
        image.classList.add('bird__img');
        image.src = item.image;
        image.alt = item.name;
        image.width = 200;
        image.height = 150;
        birdItem.append(image);

        const name = document.createElement('h2');
        name.classList.add('bird__title');
        name.textContent = item.name;  // or li.textContent = `${playList[index].title}`;
        birdItem.append(name);

        const species = document.createElement('p');
        species.classList.add('bird__subtitle');
        species.textContent = item.species;
        birdItem.append(species);

        const audioContainer = document.createElement('div');
        birdItem.append(audioContainer);
        // const audio = document.querySelector('.player');
        audio.classList.add('show');
        // audio.classList.add('player');
        // audio.src = item.audio;
        audioContainer.append(audio);

        const description = document.createElement('p');
        description.classList.add('bird__description');
        description.textContent = item.description;
        birdItem.append(description);



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



// let playNum = 0;
// name.textContent = `${birdsData_1[playNum].name}`;
// species.textContent = `${birdsData_1[playNum].species}`;
// audio.textContent = `${birdsData_1[playNum].audio}`;
// description.textContent = `${birdsData_1[playNum].description}`;
// image.src = `${birdsData_1[playNum].image}`;




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
//     audio.textContent = `${birdsData_1[playNum].audio}`;
//     description.textContent = `${birdsData_1[playNum].description}`;
//     image.src = `${birdsData_1[playNum].image}`;
// };
// setBg();


