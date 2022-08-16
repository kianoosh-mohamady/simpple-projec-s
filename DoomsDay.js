
/*function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}*/

function displayTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("h").innerText = hours;
    document.getElementById("m").innerText = minutes;
    document.getElementById("s").innerText = seconds

};


displayTime();


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2.5s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2.5s';
    }
});

const arr =[
    {
        name:"earth",
        job:"destroying the world",
        id:0,
    },
    {
        name:"sun",
        job:"give life killer's",
        id:1,
    
    },
];

function find(item, value){
let res = " "
 return resutl = res + item
}


console.log(find(arr[0].name))

