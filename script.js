const backThisButton = document.getElementById ('back-this-project-button');
const backPage = document.querySelector ('.back-this-project');
const closeIcon = document.getElementById('close');
const bookMark = document.getElementById ('bookmark-icon');
const bookmarkButton = document.getElementById ('bookmark-button');
const bookmarkedButton = document.getElementById ('bookmarked-button');
const bookMarked = document.getElementById ('bookmarked-icon');
const body = document.querySelector ('body');
const container = document.querySelector ('.container');
const continueButton = document.getElementById('back-button-two')
const secondButton = document.getElementById ('button-two')
const thankYou = document.querySelector ('.thank-you');
const gotIt = document.getElementById ('got-it');
const bamboPledge = document.getElementById("Bambo-pledge");
const blackEdition = document.getElementById("black-edition-pledge");
const mahoganyPledge = document.getElementById("Mahogany");
const radioButtons = document.querySelectorAll('input[name="type-selection"]');
const blackBox = document.querySelector('.black-box')
const bamboBox = document.querySelector ('.bambo-box')
const backButtons = document.querySelectorAll('button[name="Select-Reward"]');
const buttons = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
const menuBar = document.getElementById ('menu');
const menuClose = document.getElementById ('menu-close')
const menuOption = document.querySelector('nav')


buttons.forEach((button) => {
    button.addEventListener("click", function() {
      if (this.id === "bambo") {
        backPage.classList.add('back-display')
        bamboPledge.style.display = "block";
        bamboBox.classList.add('border')
        blackBox.classList.remove('border')
        overlay.style.display='block'
      } else if (this.id === "black") {
        backPage.classList.add('back-display') 
        blackEdition.style.display = "block";
        blackBox.classList.add('border')
        bamboBox.classList.remove('border')
        overlay.style.display='block'
      }
    });
  });
backThisButton.addEventListener('click', ()=> {
    backPage.classList.toggle('back-display') 
    overlay.style.display='block'
});
closeIcon.addEventListener('click', ()=> {
    backPage.classList.remove('back-display')
    overlay.style.display='none' 
}) ;
bookMark.addEventListener ('click',()=> {
    bookmarkButton.style.display = "none"
    bookmarkedButton.style.display = "flex"
}) ;
bookMarked.addEventListener('click', () => {
    bookmarkedButton.style.display = "none"
    bookmarkButton.style.display = "flex"
});
continueButton.addEventListener ('click', () => {
    thankYou.style.display = "block";
    backPage.classList.remove('back-display') 
    overlay.style.display='block'

});
secondButton.addEventListener ('click', () => {
    thankYou.style.display = "block";
    backPage.classList.remove('back-display') 
    overlay.style.display='block'

})

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function() {
      if (this.value === "No Reward") {
        thankYou.style.display = "block";
        bamboPledge.style.display = "none";
        blackEdition.style.display = "none";
        backPage.classList.remove('back-display') 
        mahoganyPledge.style.display = "none";
        
      } else if (this.value === "Bambo Stand") {
        bamboPledge.style.display = "block";
        blackEdition.style.display = "none";
        mahoganyPledge.style.display = "none";
        bamboBox.classList.add('border')
        blackBox.classList.remove('border')
      } else if (this.value === "black Edition") {
        bamboPledge.style.display = "none";
        blackEdition.style.display = "block";
        mahoganyPledge.style.display = "none";
        blackBox.classList.add('border')
        bamboBox.classList.remove('border')
      } else if (this.value === "Mahogany") {
        bamboPledge.style.display = "none";
        blackEdition.style.display = "none";
        mahoganyPledge.style.display = "grid";
        blackBox.classList.remove('border')
        bamboBox.classList.remove('border')
      } 
    });
  });

gotIt.addEventListener('click',() => {
    thankYou.style.display= 'none'
    overlay.style.display='none'
})
menuBar.addEventListener('click',() => {
  menuBar.style.display = 'none'
  menuClose.style.display = 'block'
  menuOption.style.display = 'grid'
  overlay.style.display='block'
});
menuClose.addEventListener('click',() => {
  menuClose.style.display = 'none'
  menuBar.style.display = 'block'
  menuOption.style.display = 'none'
  overlay.style.display='none'
})
