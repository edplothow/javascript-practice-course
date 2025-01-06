const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function buttonChange(toggle){
  const gamingButtonClass = document.querySelector('.js-gaming-button');
  const musicButtonClass = document.querySelector('.js-music-button');

  console.log(toggle);
  
  if (toggle === 'gaming' && gamingButtonClass.classList.contains('style-gaming-black') ) {

      gamingButtonClass.classList.add('style-gaming-white');
      gamingButtonClass.classList.remove('style-gaming-black');
    } else if (toggle === 'gaming' && gamingButtonClass.classList.contains('style-gaming-white')) {
      gamingButtonClass.classList.remove('style-gaming-white');
      gamingButtonClass.classList.add('style-gaming-black');
      
  } 


  if (toggle === 'music' && musicButtonClass.classList.contains('style-music-black') ) {
    console.log('dragon');
    musicButtonClass.classList.add('style-music-white');
    musicButtonClass.classList.remove('style-music-black');
    } else if (toggle === 'music' && musicButtonClass.classList.contains('style-music-white')) {
    console.log('dungeons');
    musicButtonClass.classList.remove('style-music-white');
    musicButtonClass.classList.add('style-music-black');
    
    } 

  }
//   }
//     gamingButtonClass.classList.add('style-gaming-white');
//     gamingButtonClass.classList.remove('style-gaming-black');
//   } else {
//     gamingButtonClass.classList.remove('style-gaming-white');
//     gamingButtonClass.classList.add('style-gaming-black');
//     console.log('black'); 
//   } 
// }
