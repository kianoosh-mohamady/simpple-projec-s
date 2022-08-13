
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


displayTime()




