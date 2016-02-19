$(window).load(function() {
	$('#myModal').modal('show');
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function getListName () {
	console.log("List name");
}

function getList() {
	var listName = document.getElementById('list-name').value;
	console.log(listName);
	document.getElementById('contact-list-name').innerHTML = listName;
	var contactMenu = document.getElementById("contacts");
	contactMenu.classList.add("contacts-green");


		// Check browser support
	if (typeof(Storage) !== "undefined") {
	    // Store
	    // localStorage.listID = "1";
		// localStorage.listName = listName;
		// localStorage.listContacts = "-";
		var listInfo = {
			listName: listName,
			listID: 1,
			listContacts: "..."
		};
		localStorage.setItem("list", JSON.stringify(listInfo));

		// console.log(localStorage.getItem(JSON.parse("list.listName")));
		// localStorage.setItem("listName", listName);
		// localStorage.setItem("listName", listName);
	    // Retrieve
	//     document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	// } else {
	//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	// }
	}

}
