//calling objective page
function goBack() {
    // Show book buttons again
    document.getElementById('books').style.display = 'block';

    // Hide content section
    document.getElementById('content').style.display = 'none';
}


function showContent(contentId) {
    document.getElementById('books').style.display = 'none';

    document.getElementById('content').style.display = 'block';
    document.querySelectorAll('#content > div').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(contentId).style.display = 'block';
    setTimeout(goback, 5000);
}


