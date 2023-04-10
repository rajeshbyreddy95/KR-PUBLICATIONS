let dark = document.getElementById('dark')
let isDark = false


function day(){
 isDark= true
 dark.classList.replace('fa-sun','fa-moon')
 document.body.style.backgroundColor='black'
 document.body.style.color='white'
 document.getElementById('nav').style.color='white'
 document.getElementById('nav1').style.color='white'
 document.getElementById('nav2').style.color='white'
 document.getElementById('nav3').style.color='white'
 
 }

function night(){
 isDark = false
dark.classList.replace('fa-moon','fa-sun')
document.body.style.backgroundColor='white'
document.body.style.color='black'
document.getElementById('nav').style.color='black'
document.getElementById('nav1').style.color='black'
document.getElementById('nav2').style.color='black'
document.getElementById('nav3').style.color='black'
}


 function theme(){
  if(isDark){
   night()
  }else{
   day()
  }
 }

// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};