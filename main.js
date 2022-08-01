const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/* mobile menu */
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/* product-detail */

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('#shoppingCartContainer');


//const productImg = document.querySelector('');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

/* Product Card */




/* desktop menu */

navbarEmail.addEventListener('click',toggleDeskTopMenu);
navbarShoppingCart.addEventListener('click',toggleNavbarShoppingCart);
menuHamburger.addEventListener('click',toggleMenuHamburger);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside); 

function toggleDeskTopMenu(){
    /*
    const isProductDetailClose = productDetail.classList.contains('inactive');

    if(!isProductDetailClose){
        productDetail.classList.add('inactive');    
    }*/
    productDetail.classList.add('inactive');    
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuHamburger(){
    /*const isProductDetailClose = productDetail.classList.contains('inactive');  
    
    if(!isProductDetailClose){
        productDetail.classList.add('inactive');    
    }*/
    productDetail.classList.add('inactive');    
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

/* product-detail */

function toggleNavbarShoppingCart(){
    /*
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }     
      */
     
        productDetail.classList.toggle('inactive');
        productDetailContainer.classList.add('inactive');  
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');    
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive'); 
    mobileMenu.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');    
}


function dataList(){
        const productList = [];

        productList.push({
            name:'Bike',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Car',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Bike',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Plane',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Bike',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Bike',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Bike',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Bike',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        productList.push({
            name:'Bike',
            price:120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
            }
        );
        return productList;
}

function renderProducts(arr){
    const productCardContainer  = document.querySelector('.cards-container');

    for(const [i,product] of arr.entries()){
    
        const productCard = document.createElement('div');
        productCard.id = i;
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);
        
    
        
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
        const productPrice   = document.createElement('p');
        const productName    = document.createElement('p');
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        
        productPrice.innerText = '$ ' + product.price;
        productName.innerText = product.name;
        productInfoFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productInfoFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure); 
    
    
        productCardContainer.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);        
    }
}

renderProducts(dataList());


