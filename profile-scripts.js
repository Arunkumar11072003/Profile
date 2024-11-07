
window.onload = function() {
    alert("Welcome to Arunkumar's Personal Profile!");
};


document.querySelector('.profile-pic').addEventListener('click', function() {
    this.style.border = '2px solid #333';
    alert("You clicked the profile picture!");
});
