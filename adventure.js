var button1		= 	document.getElementById('button1')
var button2 	= 	document.getElementById('button2')
var button3		= 	document.getElementById('button3')
var item 		= 	document.getElementById('inventoryItem')
var title 		= 	document.getElementById('title')
var description	= 	document.getElementById('description')

start();

function start(){ 

var kies = prompt("kies door 'man' of 'vrouw' te typen");	
if (kies == 'man') {
description.innerHTML = "je bent een man en wordt opeens ben ontvoerd";			
}else {
description.innerHTML = "je bent een vrouw en opeens ben ontvoerd";		
}

item.style.display="none"

}
