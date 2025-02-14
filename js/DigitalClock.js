function updateClock()
{
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours=hours%12 || 12;
    
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");

    document.getElementById("clock").textContent=`${hours}:${minutes}:${seconds} ${ampm}`;

    let day=String(now.getDate()).padStart(2,"0");
    let month=String(now.getMonth() + 1).padStart(2,"0");
    let year=now.getFullYear();

    document.getElementById("date").textContent=`${day}-${month}-${year}`;
}

setInterval(updateClock, 1000);
updateClock();