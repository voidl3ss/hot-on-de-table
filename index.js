// header menu 
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click' , () => {
    if(menuIcon.classList.contains('bx-menu-alt-right')){
        menuIcon.classList.remove('bx-menu-alt-right');
        menuIcon.classList.add('bx-chevrons-right');
        menu.classList.toggle('active');
    }else{
        menuIcon.classList.remove('bx-chevrons-right');
        menuIcon.classList.add('bx-menu-alt-right');
        menu.classList.toggle('active');
    }
})

function navigateTo(url) {
    window.location.href = url;
}

// order button
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button  => {
    button.addEventListener('click' , () => {
        window.location.href = "yourOrder.html";
    });
})

// mode change  
const modeChangeIcon = document.querySelector('.mode-change-icon');

modeChangeIcon.addEventListener('click' , () => {
    if(modeChangeIcon.classList.contains('bx-moon')){
        modeChangeIcon.classList.remove('bx-moon');
        modeChangeIcon.classList.add('bxs-moon');
        modeChangeIcon.classList.toggle('active');
        document.body.classList.toggle('dark-theme');
    }else{
        modeChangeIcon.classList.remove('bxs-moon');
        modeChangeIcon.classList.add('bx-moon');
        modeChangeIcon.classList.toggle('active');
        document.body.classList.toggle('dark-theme');
    }
})


//scroll reveal animation 
// scroller reveal 
animateElement = (element,origin,delay,distance) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: 1000,
        easing: 'ease',
        origin: origin
    });
  
    // Reveal the element
    sr.reveal(element);
}

animateElement('.hero-content','left','500','500px')
animateElement('.hero-img','bottom','900','500px')
// animateElement('.product-card','bottom','900','500px')

const productCards = document.querySelectorAll('.product-card');

productCards.forEach((item,index) => {
    animateElement(item,'bottom',500 + index * 200,'500px')

});
