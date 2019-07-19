var p;
var butt;

function Delete()
{ 
  p.parentNode.removeChild(p);
  butt.parentNode.removeChild(butt);

}
function CreateElement()
{   p = document.createElement('p');
    butt = document.createElement('button');
    p.innerHTML = document.getElementById('kk').value;
	document.body.appendChild(p);
	p.setAttribute("id", 'id1');
	p.setAttribute('align', 'center');
    butt.innerHTML = 'x';
	butt.setAttribute('onclick', 'Delete()');
	butt.setAttribute('align', 'center');
	document.body.appendChild(butt);
	
}

document.getElementById('kk').onkeypress = function Enterpush()
{
	if (event.keyCode == 13) CreateElement()
}