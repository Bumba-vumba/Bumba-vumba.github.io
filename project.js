var p;
var butt;
var item=[];
var item2=[];
var list = new Array(item, item2);

function Draw()
{	
	var div = document.getElementById('items');
	div.innerHTML = '';   
	p = document.createElement('p');
    butt = document.createElement('button');
    butt.innerHTML = 'x';
    butt.setAttribute('onclick', 'Delete()');                          
	p.innerHTML = document.getElementById('kk').value;
	item2.push(p.innerHTML); 
 	item.push(butt.innerHTML);
 	document.body.appendChild(butt);
 	document.body.appendChild(p);                               
	
}
function Delete()
{ 
  
}

document.getElementById('kk').onkeypress = function ()
{
	if (event.keyCode === 13) CreateElement()
   
}
