let cart = document.querySelector('#basket')
let closecart = document.querySelector('.titlecart .fa-times')
let modalcart = document.querySelector('.modalcart')
let cart2 = document.querySelector('#myCartButton')

cart.addEventListener('click', opencart)
cart2.addEventListener('click', opencart)

closecart.addEventListener('click', opencart)


function opencart(e) {

    modalcart.classList.toggle('show')
    blackc.classList.toggle('show')
}
let cartbutton = document.querySelector('.add-to-cart');
let products = {

    1: {
        name: "The Turtle",
        price: 700,
        inCart: 0,
        tag: "1-SC"
    },
    2: {
        name: "Lightbender",
        price: 700,
        inCart: 0,
        tag: "2-SC"
    },
    3: {
        name: "Los Dos",
        price: 700,
        inCart: 0,
        tag: "3-SC"
    },
    4: {
        name: "Old School Twin",
        price: 700,
        inCart: 0,
        tag: "4-SC"
    },
    5: {
        name: "Astro",
        price: 700,
        inCart: 0,
        tag: "5-SC"
    },
    6: {
        name: "Happy Twin",
        price: 700,
        inCart: 0,
        tag: "6-SC"
    }

}

if (cartbutton) {
    cartbutton.addEventListener('click', () => {
        cartNumbers(products[cartbutton.dataset.productid])
        totalCost(products[cartbutton.dataset.productid])
    })

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.inmodal').textContent = productNumbers
    }
}

function cartNumbers(product) {
    let qnt = Number(document.querySelector('.Pcount').value);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + qnt)
        document.querySelector('.inmodal').textContent = productNumbers + qnt
    } else {
        localStorage.setItem('cartNumbers', qnt)
        document.querySelector('.inmodal').textContent = qnt
    }

    setItem(product)

}

function setItem(product) {
    let qnt = Number(document.querySelector('.Pcount').value);
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += qnt
    } else {
        product.inCart = qnt;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
    let qnt = Number(document.querySelector('.inmodal').innerHTML);

    let cartCost = localStorage.getItem('totalCost')

    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", qnt * product.price)
        document.querySelector(".totalprice").innerHTML = ''
        displayCart()
    } else {
        localStorage.setItem("totalCost", qnt * product.price)
        displayCart()
    }
}


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".content-cart")
    let Payments = document.querySelector(".totalprice")
    let cartCost = localStorage.getItem('totalCost')

    if (cartItems && productContainer) {
        productContainer.innerHTML = ''
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class ="product-item">
        <div class = "image">
        <img src="Products/${item.tag}.png" width="100" height="100" alt="">
        </div>
        <div class="description">
        <div class="title">${item.name}</div>
        <div class="Price">Price: $${item.price}</div>
        <div class="Quantity">Amount: ${item.inCart}</div>
        </div>
        </div>
        `
        })
        Payments.innerHTML += `
      <div class ="BasketTotalContainer">
      <h4 class="basketTotalTitel">
      Total Price 
      </h4>
      <h4 class="BasketTotal">
      $${cartCost}.00
      </h4>

      </div>
      `
        document.querySelector('.inmodal').style.display = "block"
        document.querySelector('.clearall').style.display = "block"
    }
}

items = localStorage.getItem("productsInCart")

if (items) {
    displayCart()
}
onLoadCartNumbers()


let deleteitms = document.querySelector('.clearall')

deleteitms.addEventListener('click', removeitems)

function removeitems() {
    localStorage.clear()
    document.querySelector(".content-cart").innerHTML = ''
    document.querySelector(".totalprice").innerHTML = ''
    document.querySelector(".inmodal").innerHTML = '0'
    document.querySelector('.inmodal').style.display = "none"
    document.querySelector('.clearall').style.display = "none"
}

if (document.querySelector('.inmodal').innerHTML == "0") {
    document.querySelector('.inmodal').style.display = "none"
    document.querySelector('.clearall').style.display = "none"

}




let counterInput = document.querySelector('.counter input')
let counterButton = document.querySelectorAll('.counter button')

for (let i = 0; i < counterButton.length; i++) {
    counterButton[i].addEventListener('click', plusminus)
}

function plusminus(event) {
    let value = event.target.value
    if (value == '+' && counterInput.value < 20) {

        counterInput.value++

    }
    if (value == '-' && counterInput.value > 0) {
        counterInput.value--
    }

}






let headerContent = document.querySelector('.header-content')


window.addEventListener(
    'scroll',
    scrolling
)

function scrolling(event)
{
    headerContent.classList.add('afterScrolling')

    if (scrollY == 0)
    {
        headerContent.classList.remove('afterScrolling')
    }

}


let theContent = document.querySelector('.content')




let burger = document.querySelector('.burger')
let navBarClass = document.querySelector('.nav-bar')
let allNavLinksLi = document.querySelectorAll('.nav-bar ul li')
burger.addEventListener(
    'click',
    ClickingBurger
)


function ClickingBurger(event)
{
    console.log(allNavLinksLi)
    navBarClass.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    allNavLinksLi.forEach((link, index) => 
    {
        if (link.style.animation)
        {
            link.style.animation = ''
        }

        else
        {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }

    }


)
}


/* START of Reviews */

let nameuser = document.querySelector('#inputOfFullName')
let commentssend = document.querySelector('#inputOfReview')
let sendcommbutton = document.querySelector('#ButtonOfSend')
let allComments = document.querySelector('.AllCommentsOfUser')
let d = new Date();

if(sendcommbutton)
{
    sendcommbutton.addEventListener('click', sendcomm)
}

function sendcomm() {
    let commtamplate = `
<div class="containerOfReviews">
<div class="FullBoxOfComment">
<div class="headerOfComment" dir="ltr">
    <div class="iconInReviews">
    <img src="Images/userIcon.png" width="34px" height="34px" alt="">
    </div>
    <div class="nameAndDate">
        <p class="nameOfUser">${nameuser.value}</p>
        <p class="dateOfExactReview">${d.toDateString()}</p>
    </div>
</div>
<div class="footerOfComment" dir="ltr">
    <p class="theDescriptionOfReviewByUser">
       "${commentssend.value}"
    </p>
</div>
</div>
</div>

`;

    allComments.innerHTML += commtamplate
}


/* END of Reviews */

/* START of Filter Buttons In Collection */

let filterbutton = document.querySelectorAll('.bcategory')
let itemsArray = document.querySelectorAll('.item')
let AllItems = document.querySelector('.bcategoryAll')

if(AllItems)
{
    AllItems.addEventListener('click' , Allitems)

}

for (let i = 0; i < filterbutton.length; i++) {
    
    filterbutton[i].addEventListener('click' , funcfilter)
}

function funcfilter(e)
{
    let databutton = e.target.dataset.buttonc;

    for (let i = 0; i < itemsArray.length; i++) {
     

        if(itemsArray[i].dataset.category == databutton)
        {
            console.log('HHH')
            itemsArray[i].style.display = 'block'
        }
        else
        {
            itemsArray[i].style.display = 'none'

        }
      
    }



}
function Allitems()
{
    for (let i = 0; i < itemsArray.length; i++) {
        
        itemsArray[i].style.display = 'block'
        
    }
}

/* END of Filter Buttons In Collection */




/* START of Button Add to cart */


// gsap.registerPlugin(MorphSVGPlugin)

document.querySelectorAll('.add-to-cart').forEach(button => {
    let morph = button.querySelector('.morph path'),
        shirt = button.querySelectorAll('.shirt svg > path')
    button.addEventListener('pointerdown', e => {
        if(button.classList.contains('active')) {
            return
        }
        gsap.to(button, {
            '--background-scale': .97,
            duration: .15
        })
    })
    button.addEventListener('click', e => {
        e.preventDefault()
        if(button.classList.contains('active')) {
            return
        }
        button.classList.add('active')
        gsap.to(button, {
            keyframes: [{
                '--background-scale': .97,
                duration: .15
            }, {
                '--background-scale': 1,
                delay: .125,
                duration: 1.2,
                ease: 'elastic.out(1, .6)'
            }]
        })
        gsap.to(button, {
            keyframes: [{
                '--shirt-scale': 1,
                '--shirt-y': '-42px',
                '--cart-x': '0px',
                '--cart-scale': 1,
                duration: .4,
                ease: 'power1.in'
            }, {
                '--shirt-y': '-40px',
                duration: .3
            }, {
                '--shirt-y': '16px',
                '--shirt-scale': .9,
                duration: .25,
                ease: 'none'
            }, {
                '--shirt-scale': 0,
                duration: .3,
                ease: 'none'
            }]
        })
        gsap.to(button, {
            '--shirt-second-y': '0px',
            delay: .835,
            duration: .12
        })
        gsap.to(button, {
            keyframes: [{
                '--cart-clip': '12px',
                '--cart-clip-x': '3px',
                delay: .9,
                duration: .06
            }, {
                '--cart-y': '2px',
                duration: .1
            }, {
                '--cart-tick-offset': '0px',
                '--cart-y': '0px',
                duration: .2,
                onComplete() {
                    button.style.overflow = 'hidden'
                }
            }, {
                '--cart-x': '52px',
                '--cart-rotate': '-15deg',
                duration: .2
            }, {
                '--cart-x': '104px',
                '--cart-rotate': '0deg',
                duration: .2,
                clearProps: true,
                onComplete() {
                    button.style.overflow = 'hidden'
                    button.style.setProperty('--text-o', 0)
                    button.style.setProperty('--text-x', '0px')
                    button.style.setProperty('--cart-x', '-104px')
                }
            }, {
                '--text-o': 1,
                '--text-x': '12px',
                '--cart-x': '-48px',
                '--cart-scale': .75,
                duration: .25,
                clearProps: true,
                onComplete() {
                    button.classList.remove('active')
                }
            }]
        })
        gsap.to(button, {
            keyframes: [{
                '--text-o': 0,
                duration: .3
            }]
        })
        gsap.to(morph, {
            keyframes: [{
                morphSVG: 'M0 12C6 12 20 10 32 0C43.9024 9.99999 58 12 64 12V13H0V12Z',
                duration: .25,
                ease: 'power1.out'
            }, {
                morphSVG: 'M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z',
                duration: .15,
                ease: 'none'
            }]
        })
        gsap.to(shirt, {
            keyframes: [{
                morphSVG: 'M4.99997 3L8.99997 1.5C8.99997 1.5 10.6901 3 12 3C13.3098 3 15 1.5 15 1.5L19 3L23.5 8L20.5 11L19 9.5L18 22.5C18 22.5 14 21.5 12 21.5C10 21.5 5.99997 22.5 5.99997 22.5L4.99997 9.5L3.5 11L0.5 8L4.99997 3Z',
                duration: .25,
                delay: .25
            }, {
                morphSVG: 'M4.99997 3L8.99997 1.5C8.99997 1.5 10.6901 3 12 3C13.3098 3 15 1.5 15 1.5L19 3L23.5 8L20.5 11L19 9.5L18.5 22.5C18.5 22.5 13.5 22.5 12 22.5C10.5 22.5 5.5 22.5 5.5 22.5L4.99997 9.5L3.5 11L0.5 8L4.99997 3Z',
                duration: .85,
                ease: 'elastic.out(1, .5)'
            }, {
                morphSVG: 'M4.99997 3L8.99997 1.5C8.99997 1.5 10.6901 3 12 3C13.3098 3 15 1.5 15 1.5L19 3L22.5 8L19.5 10.5L19 9.5L17.1781 18.6093C17.062 19.1901 16.778 19.7249 16.3351 20.1181C15.4265 20.925 13.7133 22.3147 12 23C10.2868 22.3147 8.57355 20.925 7.66487 20.1181C7.22198 19.7249 6.93798 19.1901 6.82183 18.6093L4.99997 9.5L4.5 10.5L1.5 8L4.99997 3Z',
                duration: 0,
                delay: 1.25
            }]
        })
    })
})
/* END of Button Add to cart */