const navMenu = document.querySelector('.nav--menu__icon');
const navMenuList = document.querySelector('.nav--menu__list');

navMenu.addEventListener('click', function (){
    if( navMenuList.style.display === 'none' || navMenuList.style.display === ''){
        navMenuList.style.display = 'block'; 
    }else{
        navMenuList.style.display = 'none';
    }
});

document.addEventListener('click',()=>{
    const subMenuTrigger = document.querySelectorAll('.submenu-trigger');
(
    subMenuTrigger.forEach((trigger)=>{
        trigger.addEventListener('click',()=>{
            const allSubMenu = document.querySelectorAll('.submenu');
            allSubMenu.forEach((subMenu)=>{
                if(subMenu !== trigger.querySelector('.submenu')){
                    subMenu.style.display = 'none';
                }

            });
            const subMenuList = trigger.querySelector('.submenu');
            if(subMenuList.style.display === 'none' || subMenuList.style.display === ''){
                subMenuList.style.display = 'block';
            }else {
                subMenuList.style.display = 'none';
            }
        })
    }))
});

// marquee content 
const marqueeText = document.querySelector('.header--marquee__content-text');

marqueeText.textContent = newText;
