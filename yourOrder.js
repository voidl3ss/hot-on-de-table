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

// minus/plus button
const items = {
    item1: { quantity: 0, pricePer: 6 },
    item2: { quantity: 0, pricePer: 15 },
    item3: { quantity: 0, pricePer: 35 },
    item4: { quantity: 0, pricePer: 40 }
};

let totalQuantity = 0;
let totalCost = 0;

const itemElements = document.querySelectorAll('.list > div');
itemElements.forEach((itemElement) => {
    const quantityElement = itemElement.querySelector(".quantity-display");
    const pricePerElement = itemElement.querySelector(".pricePer");
    const plusButton = itemElement.querySelector(".plus");
    const minusButton = itemElement.querySelector(".minus");
    const itemKey = itemElement.dataset.item;

    plusButton.addEventListener('click', () => {
        items[itemKey].quantity++;
        updateQuantityAndPrice(itemKey);
    });

    minusButton.addEventListener('click', () => {
        if (items[itemKey].quantity > 0) {
            items[itemKey].quantity--;
            updateQuantityAndPrice(itemKey);
        }
    });

    function updateQuantityAndPrice(itemKey) {
        quantityElement.textContent = items[itemKey].quantity;
        const pricePer = items[itemKey].quantity * items[itemKey].pricePer;
        pricePerElement.textContent = `$${pricePer.toFixed(2)}`;
        
        calculateTotal();
    }

    function calculateTotal() {
        totalQuantity = 0;
        totalCost = 0;
        itemElements.forEach((itemElement) => {
            const itemKey = itemElement.dataset.item;
            totalQuantity += items[itemKey].quantity;
            totalCost += items[itemKey].quantity * items[itemKey].pricePer;
        });

        document.querySelector('.totalQuantity').textContent = totalQuantity;
        document.querySelector('.totalCost').textContent = `$${totalCost.toFixed(2)}`;
    }
    
});


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
animateElement('.card-1','bottom','500','500px')
animateElement('.yourMenu','left','500','500px')
animateElement('.item-1','left','500','500px')
animateElement('.item-2','left','500','700px')
animateElement('.item-3','left','500','900px')
animateElement('.item-4','left','500','1100px')
animateElement('.right','bottom','500','500px')
animateElement('.form','bottom','500','500px')
