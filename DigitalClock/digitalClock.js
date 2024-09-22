// digital clock program

function updateClock(){
    const now = new Date();
    let hour = now.getHours()
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const time = `${hour}: ${minutes}: ${seconds} ${meridiem}`;
    document.getElementById("clock"). textContent = time;
}
updateClock();
setInterval(updateClock, 1000);