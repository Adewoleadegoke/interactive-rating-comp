var ratingChosen = document.querySelectorAll('.button-row button');
var firstCard = document.getElementById('first-display');
var secondCard = document.getElementById('second-display');
var ratingText = document.getElementById('select-rating')
var submitBtn = document.getElementById('submit')
var ratingPicked = null;
/*
for (var i=0; i < ratingChosen.length; i++) {
ratingChosen[i].addEventListener('click', function() {
   for (var j = 0; j < ratingChosen.length; j++) {
     ratingChosen[j].classList.remove('clicked');
     };
    ratingPicked = this.textContent;
    this.classList.add('clicked');
    
})
}
*/

ratingChosen.forEach(function (ratingChoose) {
    ratingChoose.addEventListener('click', function () {
        ratingChosen.forEach(function (btn) {
           btn.classList.remove('clicked');
        })  
        ratingPicked = this.textContent;
             this.classList.add('clicked');
    })
})




submitBtn.addEventListener('click', function () {
    if (ratingPicked) {
    ratingText.textContent = "You selected " + ratingPicked + " out of 5";
    firstCard.classList.add('hidden');
    secondCard.classList.remove('hidden');
    } else {
        alert("Pick a rating first");
    }
});



