const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2.5s';
        body.style.backgroundImage = "url('https://www.kings.uwo.ca/kings/assets/Image/extranet/branding/zoom/kings-logo-1.png')"
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2.5s';
        body.style.backgroundImage = "url('https://forumcontent.paradoxplaza.com/public/468482/CK2_IronCentury_1920x1080.jpg')"
    }
});


