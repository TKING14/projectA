const d = document;
var origin;
var target;
var originID;
var targetID;

function show(targetID, originID){
	target = d.getElementById(targetID);
	origin = d.getElementById(originID);
	target.style.display = 'unset';
	origin.setAttribute("onclick", "hide('" + targetID + "', '" + originID + "')");
}

function hide(targetID, originID){
	target = d.getElementById(targetID);
	origin = d.getElementById(originID);
	target.style.display = '';
	console.log('hidden');
	origin.setAttribute('onclick', "show('" + targetID + "', '" + originID + "')");
}