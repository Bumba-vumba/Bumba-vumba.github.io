
var arr =[];


function CreateNewElement()
{	
	var butt = document.createElement('button');
	var text = document.createElement('p');
	text.innerHTML = document.getElementById('inp').value;
	butt.setAttribute('onclick', 'Delete()');
	butt.innerHTML = "x";
	arr.push(text);
	arr.push(butt);
    Draw();
}
function Delete()
{ 
 

}

function Draw(){
	var list = document.getElementById('container');
	list.innerHTML = "";
 	for (var i = 0; i<arr.length; i++){
    list.appendChild(arr[i]);
 }

}



document.getElementById('inp').onkeypress = function ()
{
	if (event.keyCode === 13) CreateNewElement();
   
}