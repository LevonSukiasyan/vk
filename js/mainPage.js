let exit = document.querySelector('.exit');
let account = document.querySelector('.account-part');
let accountMenu = document.querySelector('.account-menu');
let statusElem = document.querySelector('.status');
let statusInp = document.querySelector('.status-inp');
let statusSecondPart = document.querySelector('.status-second-part');
let statusThirdPart = document.querySelector('.status-third-part');
let createPost = document.querySelector('.create-post-btn');
let posts = document.querySelector('.posts');
let storiesPart = document.querySelector('.stories-part')
let createStory = document.querySelector('.create-story')
let modalContainer = document.querySelector('.modal-container')
let modalContent = document.querySelector('.modal-content');
let colorBorders = document.querySelectorAll('.color-border');
let modalColors = document.querySelectorAll('.modal-color');
let settingsPart = document.querySelectorAll('.settings-part');
let settingPartColor = document.querySelectorAll('.svg-icon path');
let textFamily = document.querySelectorAll('.text-family');
let modalText = document.querySelector('.modal-text');
let settingsFirstPart = document.querySelector('.settings-first-part');
let settingsSecondPart = document.querySelector('.settings-second-part');  
let settingsContentPart1 = document.querySelector('.settings-content-part1');
let settingsContentPart2 = document.querySelector('.settings-content-part2');
let radios = document.querySelectorAll('.radios');
let addStory = document.querySelector('.add-modal');
let closeModal = document.querySelector('.close-modal');
let storyModalContainer = document.querySelector('.story-modal-container');
let storyModalContent = document.querySelector('.story-modal-content');
let closeStoryModal = document.querySelector('.close-story-modal');
let modalStoryText = document.querySelector('.modal-story-text');
let colors = [
                '#fff','#000','#ff3301','#ff8c49','#f9d827','#2eba48',
                '#4189e8','#9f4bed','#69e4b3','#ff84a0','#f7a978','#f8786c',
                '#8b3232','#93b658','#556e35','#5b4490','#1b1b1b','#333333',
                '#4d4d4d','#666','#808080','#999','#b3b3b3','#ccc',
                '#05a872','#0ad692','#22f1ac','#55f1bd','#86f3cf','#b6f6e1',
            ];
let divColors = document.querySelectorAll('.div-color')
let fonts = [
    '"Roboto", sans-serif',
    '"Pacifico", cursive',
    '"Amatic SC", sans-serif',
    '"Open Sans", sans-serif',
    '"Oswald", sans-serif',
    '"Lobster", sans-serif',
    '"Playwrite DK Uloopet", cursive',
    '"Playwrite CL", cursive',
    '"Sigmar One", sans-serif'
];

account.addEventListener('click', function () {
    accountMenu.classList.toggle('open-close');
});

exit.addEventListener('click', function () {
    window.location.href = '/html/login.html';
});

function createPostPlatform() {
    statusElem.classList.toggle('status-column');
    statusInp.classList.toggle('inp-toggle');
    statusSecondPart.classList.toggle('status-none');
    statusThirdPart.classList.toggle('open-close');
}

function setPost(PostValue, insertAtBeginning = true) {
    let postHTML = `
        <div class="post">
            <div class="post-header">
                <div class="post-title">
                    <img class="account-icon" src="/images/account-icon.png">
                    <div class="post-title-part">
                        <a class="post-name" href="">Levon Sukisayann</a>
                        <a class="post-date" href="">date</a>
                    </div>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="more_horizontal_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="more_horizontal_24__more_horizontal_24">
                                <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path>
                                <path d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z" id="more_horizontal_24__Mask" fill="currentColor"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="post-content">
                <p>${PostValue}</p>
            </div>
            <div class="post-footer">
                <div class="post-footer-part">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z" fill="currentColor" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                </div>
                <div class="post-footer-part">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z" fill="currentColor" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                </div>
                <div class="post-footer-part">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 0 0-7.83 10.72.9.9 0 0 0 1.61.46l.19-.24a9.08 9.08 0 0 1 5.84-3.26l.2-.03.01 2.5a2.15 2.15 0 0 0 3.48 1.69l7.82-6.14a2.15 2.15 0 0 0 0-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 0 1 0 .55l-7.82 6.13a.35.35 0 0 1-.57-.28V14.7a.9.9 0 0 0-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 0 1 6.97-6.53.9.9 0 0 0 .79-.9V5.87c0-.2.16-.35.35-.35z" fill="currentColor" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    `;

    if (insertAtBeginning) {
        posts.insertAdjacentHTML('afterbegin', postHTML);
    } else {
        posts.insertAdjacentHTML('beforeend', postHTML);
    }

    let storage = localStorage.getItem('statusValues');
    let statusArray = storage ? JSON.parse(storage) : [];

    statusArray.push(PostValue);
    localStorage.setItem('statusValues', JSON.stringify(statusArray));
}

statusInp.addEventListener('click', function () {
    createPostPlatform();   
});

createPost.addEventListener('click', function () {
    if (statusInp.value.length > 10) {
        setPost(statusInp.value);
        createPostPlatform();
        statusInp.value = '';
    } else {
        alert('Нужно ввести текст длиной больше чем 10 символов');
    }
});

function loadPostsFromLocalStorage() {
    let storage = localStorage.getItem('statusValues');
    
    if (storage) {
        let statusArray = JSON.parse(storage);
        statusArray.reverse().forEach(postValue => {
            setPost(postValue, false); 
        });
    }
}

createStory.addEventListener('click', function () {
    modalContainer.style.display = 'flex'    
})

modalColors.forEach((modalColor,index) => {
    modalColor.style.backgroundColor = colors[index];

    modalColor.addEventListener('click', function () {
        modalText.style.backgroundColor = modalColor.style.backgroundColor
        modalContent.style.backgroundColor = modalColor.style.backgroundColor        
    })
});

divColors.forEach((textColor,index) => {
    textColor.style.backgroundColor = colors[index];

    textColor.addEventListener('click', function () {

        modalText.style.color = textColor.style.backgroundColor  
        
        divColors.forEach(elem => {
            elem.innerHTML = ''
        });

        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'
    })
});

colorBorders.forEach(colorBorder => {
    colorBorder.addEventListener('click',function () {

        colorBorders.forEach(elem => {
            elem.classList.remove('colored-border')
        });

        this.classList.toggle('colored-border');
    })
});

settingsPart.forEach((elem,index) => {
    elem.addEventListener('click',  function () {
        settingPartColor[0].style.fill = '#a7a7a7'
        settingPartColor[1].style.fill = '#a7a7a7'
        settingPartColor[index].style.fill = '#447bba';

        settingsPart[0].style.borderBottom = '2px solid #f0f2f5'
        settingsPart[1].style.borderBottom = '2px solid #f0f2f5'
        this.style.borderBottom = '2px solid #447bba'
    })
});

textFamily.forEach((elem,index) => {
    elem.style.fontFamily = fonts[index]
});

settingsFirstPart.addEventListener('click', function () {
    settingsContentPart1.style.display = "flex"
    settingsContentPart2.style.display = "none"
})

settingsSecondPart.addEventListener('click', function () {
    settingsContentPart1.style.display = "none"
    settingsContentPart2.style.display = "flex"
})

radios.forEach((radio,index) => {
    radio.addEventListener('click', function () {
        modalText.style.fontFamily = fonts[index]
    })
});

modalText.addEventListener('input', function () {
    this.style.height = 'auto'; 
    this.style.height = (this.scrollHeight + 10) + 'px'; 
});

closeModal.addEventListener('click', function () {
    modalContainer.style.display = 'none'
})

addStory.addEventListener('click', function () {
    if (modalText.value.length) {
        setStory(modalText.style.backgroundColor, modalText.value, modalText.style.fontFamily);
        modalText.value = ''; 
        modalText.style.backgroundColor = '';
        modalContent.style.backgroundColor = '#fff';
        modalText.style.color = ''; 
        modalText.style.fontFamily = '';
        modalContainer.style.display = 'none'; 
    }    
})

function setStory(backgroundColor, text, fontFamily) {
    let storyHTML = `
        <div class="story added-story" style="background-color: ${backgroundColor};">
            <div class="icon-part" style="display: flex; align-items: center; justify-content: center; height: 100%;">
                <div class="story-text" style="color: ${modalText.style.color}; font-family: ${fontFamily}; text-align: center;">${text}</div>
            </div>                                
        </div>`;
    
    storiesPart.insertAdjacentHTML('beforeend', storyHTML);
    
    let storage = localStorage.getItem('stories');
    let storiesArray = storage ? JSON.parse(storage) : [];
    
    storiesArray.push({ backgroundColor, text, color: modalText.style.color, fontFamily });
    localStorage.setItem('stories', JSON.stringify(storiesArray));
    addClickEventToStories();

}

function loadStoriesFromLocalStorage() {
    let storage = localStorage.getItem('stories');
    
    if (storage) {
        let storiesArray = JSON.parse(storage);
        storiesArray.forEach(story => {
            let storyHTML = `
                <div class="story added-story" style="background-color: ${story.backgroundColor};">
                    <div class="icon-part" style="display: flex; align-items: center; justify-content: center; height: 100%;">
                        <div class="story-text" style="color: ${story.color}; font-family: ${story.fontFamily}; text-align: center;">${story.text}</div>
                    </div>                                
                </div>`;
            
            storiesPart.insertAdjacentHTML('beforeend', storyHTML);
        });

        addClickEventToStories();
    }
}

function addClickEventToStories() {
    let addedStories = document.querySelectorAll('.added-story');
    addedStories.forEach(story => {
        story.addEventListener('click', function () {
            let storyText = story.querySelector('.story-text');
            storyModalContent.style.backgroundColor = story.style.backgroundColor;
            modalStoryText.style.color = storyText.style.color;
            modalStoryText.style.fontFamily = storyText.style.fontFamily;
            modalStoryText.style.textAlign = 'center';
            modalStoryText.innerHTML = storyText.innerHTML;
            storyModalContainer.style.display = 'flex';
        });
    });
}

closeStoryModal.addEventListener('click', function () {
    storyModalContainer.style.display = 'none';
});

window.addEventListener('DOMContentLoaded', function () {
    loadPostsFromLocalStorage();
    loadStoriesFromLocalStorage();
});
