const nav = document.createElement('div'); 
nav.textContent = "Welcome to my page"; 
document.body.appendChild(nav); 
nav.style.backgroundColor = "black"; 
nav.style.height = "100px"; 
nav.style.width = "100%"; 
nav.style.textAlign = "center"; 
nav.style.fontSize = "30px"; 
nav.style.color = "white"; 
nav.style.padding = "20px"; 
nav.style.boxSizing = "border-box"; 
 
 
 
 
const left = document.createElement('div'); 
left.textContent = "This is right div"; 
document.body.appendChild(left); 
left.style.backgroundColor = "red"; 
left.style.height = "100%"; 
left.style.display = "inline-block" 
// left.style.float = "left"; 
left.style.width = "50%"; 
; 
// left.style.margin = "10px"; 
 
 
const right = document.createElement('div'); 
 
right.textContent = "This is left div"; 
document.body.appendChild(right); 
right.style.backgroundColor = "green"; 
right.style.height = "100%"; 
right.style.display = "inline-block"; 
right.style.float = "left"; 
right.style.width = "50%";