const product = document.querySelectorAll('.product');

function productCount(product) {
    const productControlDec = product.querySelector('.product__quantity-control_dec');
    const productControlInc = product.querySelector('.product__quantity-control_inc');
    let productValue = product.querySelector('.product__quantity-value');

    productControlDec.onclick = function() {
        if(productValue.innerText <= 1) {
            return false;
        }
        productValue.innerText--;
    }

    productControlInc.onclick = function() {
        productValue.innerText++;
    }

    const add = product.querySelector('.product__add');
    const cartProducts = document.querySelector('.cart__products');

    function pushCart() {
        let cartProductArray = Array.from(document.querySelectorAll('.cart__product'));
        const img = document.createElement('img');
        img.classList.add('cart__product-image');

        const count = document.createElement('div');
        count.classList.add('cart__product-count');

        let productInCard = cartProductArray.find((e) => e.dataset.id === product.dataset.id);
        if(productInCard){
            let countCard = productInCard.querySelector('.cart__product-count');
            countCard.textContent = Number(productInCard.textContent) + Number(productValue.textContent);
        } else {
            const cart = document.createElement('div'); 
            cart.classList.add('cart__product');
            cart.dataset.id = product.dataset.id;

            img.src = product.querySelector('.product__image').src;

            count.innerText= Number(productValue.textContent);

            cartProducts.appendChild(cart).append(img,count);
        }    

        // ШАБЛОННАЯ СТРОКА

        // let cartProductArray = Array.from(document.querySelectorAll('.cart__product'));
        // let productInCard = cartProductArray.find((e) => e.dataset.id === product.dataset.id);

        // if(productInCard){
        //     let countCard = productInCard.querySelector('.cart__product-count');
        //     countCard.innerText = Number(productInCard.textContent) + Number(productValue.textContent)
        //     console.log(cartProductArray);
        // } else {
        //     cartProducts.innerHTML = `
        //         <div class = 'cart__product'>
        //             <img class="cart__product-image">
        //             <div class="cart__product-count"></div>
        //         </div> 
        //     `

        //     const cart = document.querySelector('.cart__product');
        //     const img = document.querySelector('.cart__product-image');
        //     const count = document.querySelector('.cart__product-count');

        //     cart.dataset.id = product.dataset.id;
        //     img.src = product.querySelector('.product__image').src;
        //     count.innerText= Number(productValue.textContent);
        //     console.log(cartProductArray)
        // }
    }
    
    add.addEventListener('click', () => {
        pushCart()
    })
}

product.forEach(productCount);
