import { readCart, updateCartCount, writeCart } from "./utils/common.js";

const cartList = document.querySelector(".cart-list");
const cartCountText = document.querySelector(".cart-count-text");
const selectAll = document.querySelector(".select-all");
const selectAllText = selectAll.querySelector("span");
const selectDeleteBtn = document.querySelector(".cart-list-header button");
const productAmount = document.querySelector(".order-row strong");
const totalAmount = document.querySelector(".order-total strong");

updateCartCount();
const cart = readCart();
console.log(cart);
let cartHTML = [];
if (cart.length === 0) {
  cartHTML.push(
    `<article>
  장바구니가 비어있습니다.
</article>`,
  );
} else {
  cartHTML = cart.map(
    item =>
      `<article class="cart-item">
        <label class="item-check">
          <input type="checkbox"/>               
        </label>    
  
        <div class="cart-thumb">
          <img
            src="${item.thumb}"
            alt="${item.title}"
          />
        </div>
        <div class="cart-item-info">
          <h2>${item.title}</h2>
          <p>브랜드명 | ${item.brand}</p>
          <strong>$${item.price}</strong>
        </div>
        <div class="quantity-box" aria-label="수량">
          <button type="button" aria-label="수량 줄이기">-</button>
          <span>1</span>
          <button type="button" aria-label="수량 늘리기">+</button>
        </div>
        <button type="button" class="remove-item" aria-label="${item.title} 삭제"></button>
      </article>
    `,
  );
}

cartList.innerHTML += cartHTML.join("");

//상품 개수 반영
function updateCartCountFx() {
  cartCountText.textContent = `총 ${cart.length}개의 상품`;
}
updateCartCountFx();

//상품금액, 결제금액 업데이트
function updateTotalAmount() {
  const sum = cart.reduce((acc, current) => acc + current.qty * current.price, 0);
  productAmount.textContent = `$${sum}`;
  totalAmount.textContent = `$${sum}`;
}
updateTotalAmount();
