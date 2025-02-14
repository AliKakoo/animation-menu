const $ = document

const menus = $.querySelectorAll('a')
const animElem = $.querySelector(".anim");


// first way //


// menus.forEach(menu => {
//     menu.addEventListener('mouseenter', (event) =>{
//         console.log(event.target.offsetWidth)
//         animElem.style.width = event.target.offsetWidth + 'px';
//         animElem.style.left = event.target.offsetLeft + 'px';
//     });
// })

// second way //

menus.forEach(menu => menu.onmouseenter = event =>{
 
    
    animElem.style.width = event.target.offsetWidth + "px";
    animElem.style.left = event.target.offsetLeft + "px";
  
});