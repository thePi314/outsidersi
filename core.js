/* getBoundingClientRect().height */
var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

let degMax = 87.42;
let speed = 0.08;

const images = [];
const pi = 3.1415926;

/* Debug */
function generateImages(amount) {
    const minWidth = isMobile ? 280 : 512;
    const minHeight = 360;
    
    const height = 512;

    let images = [];
    for (let ind = 0; ind < amount; ind++) {
        let image = new Image();
        image.src = 'https://picsum.photos/id/' + Math.round(Math.random() * 100) + '/' + minWidth + '/' + minHeight;

        let imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image');
        imageWrapper.append(image);
        imageWrapper.setAttribute('index', ind);

        if (ind == 0)
            imageWrapper.classList.add('infront');

        image.onload = () => {
            imageWrapper.style.transform = 'rotateZ(' + Math.random() * 360 + 'deg)';
            imageWrapper.style.zIndex    = (amount - ind);
            //imageWrapper.style.left = (((window.innerWidth - image.width - 16) / 2) / window.innerWidth * 100) + '%';
            imageWrapper.style.left      = (32+((window.innerWidth - image.width - 64)/amount)*ind) + 'px';
            imageWrapper.style.top    = (Math.sin(pi/amount*ind)*(height-minHeight)) + 'px';
            //imageWrapper.style.top = Math.sin((Math.random()*(height-minHeight))) + 'px';
        }
        images.push(imageWrapper);
    }

    return images;
}

function initImages() {
    let gallery = document.querySelector('.gallery');
    let images = generateImages(40);

    images.forEach(image => {
        gallery.append(image);
    })
}

function initGalleryAnimation() {
    initImages();

    let gallery = document.querySelector('.gallery');
    let images = document.querySelectorAll('.gallery > .image');
    let amount = images.length;

    images.forEach(image => {
        image.addEventListener('animationend', () => {
            if (image.classList.contains('infront')) {
                image.classList.add('done');
            }
        });
    });

    gallery.addEventListener('click', () => {
        event.preventDefault();
        let image = document.querySelector('.image.infront');

        image.classList.remove('infront');
        image.classList.remove('done');

        let next = (+image.getAttribute('index') == amount - 1) ? images[0] : image.nextElementSibling;
        next.classList.add('infront');

        let startIndex = +next.getAttribute('index');

        for (let ind = startIndex; ind < amount; ind++)
            images.item(ind).style.zIndex = amount - ind + startIndex;
        for (let ind = 0; ind < startIndex; ind++)
            images.item(ind).style.zIndex = startIndex - ind;
    });
}

function initParallexStage() {
    let stage = document.querySelector('.stage');

    document.addEventListener('scroll', () => {
        stage.style.transform = 'rotateX(' + (Math.min(45 + speed * window.scrollY, degMax)) + 'deg)'
    });
}

function initActorCollection() {
    let stage = document.querySelector('.stage');
    let collection = document.querySelector('.actors-collection');

    collection.style.top = ((stage.getBoundingClientRect().y + stage.getBoundingClientRect().height / 2) - collection.getBoundingClientRect().height) + 'px';
    document.addEventListener('scroll', () => {
        collection.style.top = (stage.getBoundingClientRect().y + stage.getBoundingClientRect().height / 2
            - collection.getBoundingClientRect().height + window.scrollY + window.scrollY * 0.08) + 'px';
    });

    window.addEventListener('resize', () => {
        collection.style.top = (stage.getBoundingClientRect().y + stage.getBoundingClientRect().height / 2
            - collection.getBoundingClientRect().height + window.scrollY + window.scrollY * 0.05) + 'px';
    })
}

function initCrowCollection() {
    let crowd = document.getElementById('front-crowd');
    let crowdBack = document.getElementById('back-crowd');
    let crowdSpeed = 0.2

    document.addEventListener('scroll', () => {
        crowd.style.bottom = (Math.min(window.scrollY * crowdSpeed, 80) + 'px');
        crowdBack.style.bottom = (175 - Math.min(window.scrollY * crowdSpeed / 2, 80) + 'px');
    });
}

function setNoteProperties(note){
    const letters = [ 'H' , 'G' , 'S' , 'T' , 'U' , 'y' , 'z' ];
    const numTypes = 4;
    const numDelay = 6;
    const numSpeed = 5;

    note.setAttribute('type',(Math.round(1+Math.random()*(numTypes-1))));
    note.setAttribute('speed',(Math.round(1+Math.random()*(numSpeed-1))));
    note.setAttribute('delay',(Math.round(1+Math.random()*(numDelay-1))));

    note.innerText = letters[Math.round(Math.random()*(letters.length-1))];
    return note;
}

function createNoteNode(){
    let note = document.createElement('span');
    note.classList.add('note');
    return setNoteProperties(note);
}

function initNotesAnimation(amount=20) {
    let leftSpeaker  = document.querySelector('.casset-player > .left-speaker');
    let rightSpeaker = document.querySelector('.casset-player > .right-speaker');
    let notesWrapper = document.querySelector('.notes-animation');

    for(let ind=0;ind<amount;ind++) {
        let x,y;
        let speaker = (Math.random() < 0.5) ? leftSpeaker : rightSpeaker;
        let note    = createNoteNode();

        x = speaker.getBoundingClientRect().left + speaker.getBoundingClientRect().width/2 - 48;
        y = speaker.getBoundingClientRect().top + speaker.getBoundingClientRect().height*4/6 + window.scrollY;

        notesWrapper.append(note);

        note.addEventListener('animationend',()=>{
            setNoteProperties(note);
        });

        note.style.left = x+'px';
        note.style.top = y+'px';

        window.addEventListener('resize',()=>{
            x = speaker.getBoundingClientRect().left + speaker.getBoundingClientRect().width/2 - 48;
            y = speaker.getBoundingClientRect().top + speaker.getBoundingClientRect().height*4/6 + window.scrollY;
            
            note.style.left = x+'px';
            note.style.top = y+'px';
        });
    }
}

function initSound() {
    const minVolumen    = 0.05;
    const maxVolumen    = 1;
    const scaleDistance = 256;

    let cassetPlayer = document.querySelector('.casset-player');

    let sound = new Audio('sve-je-r-and-r.mp3');
    sound.play();
    sound.volume = Math.min(1,Math.max(minVolumen,scaleDistance/(Math.abs(cassetPlayer.getBoundingClientRect().top))*maxVolumen));
    
    window.addEventListener('scroll',()=>{
        sound.volume = Math.min(1,Math.max(minVolumen,scaleDistance/(Math.abs(cassetPlayer.getBoundingClientRect().top))*maxVolumen));
    })
}

window.onload = () => {
    initParallexStage();
    initActorCollection();
    initCrowCollection();
    initGalleryAnimation();
    initNotesAnimation(50);
    initSound();
}