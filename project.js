var inp = document.getElementById('inp');
var butt = document.getElementById('but');
var list = document.getElementById('container');

function CreateNewElement(inf)
{	
	var listItem = document.createElement('li');
	var del = document.createElement('button');
	var text = document.createElement('label');
	text.innerText = inf;
	del.setAttribute('onclick', 'Delete()');
	del.innerHTML = "x";
	listItem.appendChild(text);
	listItem.appendChild(del);
	list.appendChild(listItem);
     
}
function Delete(listItem)
{ 
 
}

function addNewElement(){
	if (inp.value)
		CreateNewElement(inp.value);

}



document.getElementById('inp').onkeypress = function ()
{
	if (event.keyCode === 13) addNewElement ()
   
}
