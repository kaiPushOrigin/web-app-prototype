function removeStyles() {
    document.getElementById('nav').style.opacity = 1.0;
    document.getElementById('left-row').style.opacity = 1.0;
    document.getElementById('right-row').style.opacity = 1.0;
    document.getElementById('upload').style.opacity = 1.0;
    document.getElementById('panel-table').style.opacity = 1.0;
}

function dimBackground() {
    console.log("1234");
    document.getElementById('dashboard').style.opacity = 0.4;
    document.getElementById('leads').style.opacity = 0.4;
    document.getElementById('lists').style.opacity = 0.4;
    document.getElementById('tasks').style.opacity = 0.4;
    document.getElementById('searchContacts').style.opacity = 0.4;
    document.getElementById('pipelines').style.opacity = 0.4;
    document.getElementById('audManagement').style.opacity = 0.4;
}
