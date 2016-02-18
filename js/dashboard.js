$(window).load(function() {
	$('#myModal').modal('show');
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function getList() {
	var listName = document.getElementById('list-name').value;
	console.log(listName);
	document.getElementById('contact-list-name').innerHTML = listName;
	var contactMenu = document.getElementById("contacts");
	contactMenu.classList.add("contacts-green");
}
