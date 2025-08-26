

console.log('Alhamdulillah for everything.')


function getId (id){
   const element = document.getElementById(id)
   
   return element

}
// console.log(getId("card-parent"))

// delegation 



getId("cart-box").addEventListener("click",function(e){
    // alert("clicked")

    if(e.target.className.includes("cart-btn")){
        const cartBtn = e.target
        // image dore ani
        const cartImg = cartBtn.parentNode.parentNode.parentNode.children[0].children[0].src;
        // cart title dore ani
        const cartTitle = cartBtn.parentNode.parentNode.children[1].innerText;
        // cart price dore ani
        const productPrice = cartBtn.parentNode.parentNode.children[2].children[0].innerText
        // money add in totalPrice 
        
        const totalPrice = getId("total-price").innerText
        const currentTotalPrice = Number(totalPrice) + Number(productPrice)
        getId("total-price").innerText = currentTotalPrice
        // count total product quantity
        const productQuantity = getId("product-quantity").innerText
        const totalProductQuantity = Number(productQuantity) + 1 
        getId("product-quantity").innerText = totalProductQuantity

        // create div 

        // jekhane rakhbo seta dori 

        const cartContainer =  getId("card-container")
        const newDiv = document.createElement("div")
        newDiv.innerHTML = ` 

        <div class="flex justify-between p-2.5 bg-gray-300 m-5 rounded-[10px]">
                <div><img class="w-12  ml-5 " src="${cartImg}" alt=""></div>
                <div class="mr-1">
                  <p class="font-bold text-[20px]"> ${cartTitle}</p>
                  <p class="font-semibold text-[16px]"><span>${productPrice}</span>Tk</p>
              </div>
            </div> 
            
            `

        cartContainer.append(newDiv)
        // console.log(cartContainer)


    }
})

// clear button dori
const clear = getId("clear-btn")

clear.addEventListener("click", function(){
const cartContainer =  getId("card-container")
cartContainer.innerHTML = " "
const productQuantity = getId("product-quantity")
productQuantity.innerText = 0
const totalPrice = getId("total-price")
totalPrice.innerText = 0
})


//delegation 

// getElement("product-box").addEventListener("click", function (e) {
//   if (e.target.className.includes("cart-btn")) {
//     // alert("card clicked");
//     const cartButton = e.target;
//     const productImg =
//       cartButton.parentNode.parentNode.children[0].children[0].src;

//     const productTitle =
//       cartButton.parentNode.parentNode.children[1].children[0].innerText;

//     // console.log(productTitle);
//     const productPrice =
//       cartButton.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = getElement("total-price").innerText;

//     const currentTotal = Number(productPrice) + Number(totalPrice);
//     getElement("total-price").innerText = currentTotal;

//     const cartContainer = getElement("cart-container");

//     const newCart = document.createElement("div");

//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="${productImg}" alt="" class="w-10" />
//                   <div class="">
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <h2 class="">${productPrice} Tk</h2>
//                   </div>
//             </div>
//     `;

//     cartContainer.append(newCart);



//     const quantity = getElement("total-quantity").innerText;
//     console.log(quantity);

//     const currentQuantity = Number(quantity) + 1;
//     getElement("total-quantity").innerText = currentQuantity;
//   }
// });
