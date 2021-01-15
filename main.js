const nav = document.querySelectorAll('.nav-item');
const grid1 = document.querySelector('.grid-1');
const grid2 = document.querySelector('.grid-2');
const grid3 = document.querySelector('.grid-3');



nav.forEach( item => {
   item.addEventListener('click', () => {
   
       nav.forEach( link => {
           link.classList.remove('active');
       });

       event.target.classList.add('active');
       
       if(event.target.classList[1] == '2') {
          grid2.style.display = 'grid';
         
          grid1.style.display = 'none';  
          grid3.style.display = 'none'     
        } else if(event.target.classList[1] == '3') {
          grid3.style.display = 'grid';
          grid1.style.display = 'none';
          grid2.style.display = 'none' 
       } else  if(event.target.classList[1] == '1') {
          grid1.style.display = 'grid';
          grid2.style.display = 'none';
          grid3.style.display = 'none' 
       }
   });
});