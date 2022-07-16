// Selector
const time = document.getElementById("time");
const Welcome = document.getElementById("Welcome");
const name = document.getElementById("name");
const date = document.getElementById("date");
// shift+alt+Down Arrow to duplicate code

//Event Listener

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Functions
function showtime() {
  let today = new Date();
  let hour = today.getHours(); // 8
  let min = today.getMinutes(); // 32
  let sec = today.getSeconds(); // 23
  let todaydate = today.toDateString(); // fri nov 6 2020

  //am Pm Format
  const amPm = hour > 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12; // hour=12%12=0

  // output time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${amPm}`;

  date.innerHTML = `${todaydate}`;

  //   hh:mm:ss AM (Required Time Format)
  setTimeout(showtime, 1000);
}
// adding zero to a Number lessthan 10
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setWelcome() {
  let today = new Date();
  let hour = today.getHours(); //17

  if (hour < 12) {
    document.body.style.backgroundImage =
      'url("./Images/morning.jpg")';
    Welcome.innerHTML = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      'url("./Images/afternoon.jpg")';
    Welcome.innerHTML = "Good Afternoon";
  } else {
    document.body.style.backgroundImage =
      'url("./Images/night.jpg")';
    Welcome.innerHTML = "Good Evening";
    document.body.style.color = "white";
  }
}

function getName() {
    const MyName = prompt("Enter your name:-");
  if (localStorage.getItem("myData") === null) {
    if(MyName===''){
      name.innerHTML = "[Enter Name]";
    }
    else{
      name.innerHTML = MyName;
    }
      
  } else {
    // name.innerHTML = localStorage.getItem("myData");
    if(MyName===''){
      name.innerHTML = "[Enter Name]";
    }
    else{
      name.innerHTML = MyName;
    }
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName();
showtime();
setWelcome();