 let btn = document.querySelector('#load');
    let gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

  fetch('https://api.nobelprize.org/2.1/nobelPrizes')
    .then(response => response.json())
    .then(nobel => {
      console.log('nobel.nobelPrizes', nobel.nobelPrizes.length)
     let i = 0; 
      while(i < nobel.length){
        console.log(i);
        ++i
      }
    });

});