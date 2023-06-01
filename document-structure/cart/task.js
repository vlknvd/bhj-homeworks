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
    const cartProduct = document.querySelector('.cart__products');

    function pushCart() {
        let cartProductArray = Array.from(document.querySelectorAll('.cart__product'));
        
        const img = document.createElement('img');
        img.classList.add('cart__product-image');

        const count = document.createElement('div');
        count.classList.add('cart__product-count');

         // console.log(cartProductArray);

        let productInCard = cartProductArray.find((e) => e.dataset.id === product.dataset.id);

        if(productInCard){
            count.innerText = Number(productInCard.textContent) + Number(productValue.textContent);
            
        } else {
            const cart = document.createElement('div'); 
            cart.classList.add('cart__product');
            cart.dataset.id = product.dataset.id;

            img.src = product.querySelector('.product__image').src;

            count.innerText= Number(productValue.textContent);

            cartProduct.appendChild(cart).append(img,count);
        }
    }
    
    add.addEventListener('click', () => {
        pushCart()
    })
}

product.forEach(productCount);
