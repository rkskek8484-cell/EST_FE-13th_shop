// import { addToCart, updateCartCount } from "./utils/common.js";

// const params = new URLSearchParams(window.location.search);
// const productId = Number(params.get("id")) || 1;

// const detail = document.querySelector(".product-detail");
// const mainImage = document.querySelector(".main-image");
// const thumbnailList = document.querySelector(".thumbnail-list");
// const currentCategory = document.querySelector(".current-category");
// const brand = document.querySelector(".product-brand");
// const title = document.querySelector(".product-title");
// const rating = document.querySelector(".product-rating");
// const reviewCount = document.querySelector(".review-count");
// const description = document.querySelector(".product-description");
// const discountRate = document.querySelector(".discount-rate");
// const price = document.querySelector(".product-price");
// const shipping = document.querySelector(".shipping-info");
// const stock = document.querySelector(".stock-info");
// const warranty = document.querySelector(".warranty-info");
// const qtyMinus = document.querySelector(".qty-minus");
// const qtyPlus = document.querySelector(".qty-plus");
// const qtyValue = document.querySelector(".qty-value");
// const totalPrice = document.querySelector(".total-price");
// const cartButton = document.querySelector(".detail-cart-button");
// const cartMessage = document.querySelector(".cart-message");
// const specList = document.querySelector(".spec-list");
// const reviewList = document.querySelector(".review-list");
// const returnPolicy = document.querySelector(".return-policy");

// let product = null;
// let quantity = 1;

// function formatPrice(value) {
//   return `$${Number(value).toLocaleString("en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   })}`;
// }

// function updateTotal() {
//   qtyValue.textContent = quantity;
//   totalPrice.textContent = formatPrice(product.price * quantity);
// }

// function renderGallery(images) {
//   const galleryImages = images.length ? images : [product.thumbnail];
//   mainImage.src = galleryImages[0];
//   mainImage.alt = product.title;

//   thumbnailList.innerHTML = galleryImages
//     .map(
//       (image, index) => `
//         <button type="button" class="thumbnail-button ${index === 0 ? "active" : ""}" aria-label="상품 이미지 ${index + 1}">
//           <img src="${image}" alt="" />
//         </button>
//       `,
//     )
//     .join("");

//   thumbnailList.addEventListener("click", event => {
//     const button = event.target.closest(".thumbnail-button");
//     if (!button) return;

//     const buttons = [...thumbnailList.querySelectorAll(".thumbnail-button")];
//     const index = buttons.indexOf(button);
//     mainImage.src = galleryImages[index];
//     buttons.forEach(item => item.classList.remove("active"));
//     button.classList.add("active");
//   });
// }

// function renderSpecs() {
//   const dimensions = product.dimensions;
//   const specs = [
//     ["카테고리", product.category],
//     ["SKU", product.sku],
//     ["무게", `${product.weight} kg`],
//     ["최소 주문 수량", `${product.minimumOrderQuantity}개`],
//     ["크기", `${dimensions.width} x ${dimensions.height} x ${dimensions.depth}`],
//     ["태그", product.tags.join(", ")],
//   ];

//   specList.innerHTML = specs
//     .map(
//       ([name, value]) => `
//         <div>
//           <dt>${name}</dt>
//           <dd>${value}</dd>
//         </div>
//       `,
//     )
//     .join("");
// }

// function renderReviews() {
//   reviewList.innerHTML = product.reviews
//     .map(
//       review => `
//         <article class="review-item">
//           <div class="review-meta">
//             <strong>${review.reviewerName}</strong>
//             <span>★ ${review.rating}</span>
//           </div>
//           <p>${review.comment}</p>
//         </article>
//       `,
//     )
//     .join("");
// }

// function renderProduct() {
//   document.title = `${product.title} | ShopMall`;
//   currentCategory.textContent = product.category;
//   brand.textContent = product.brand || "ShopMall";
//   title.textContent = product.title;
//   rating.textContent = product.rating.toFixed(1);
//   reviewCount.textContent = `리뷰 ${product.reviews.length}개`;
//   description.textContent = product.description;
//   discountRate.textContent = `${Math.round(product.discountPercentage)}%`;
//   price.textContent = formatPrice(product.price);
//   shipping.textContent = product.shippingInformation;
//   stock.textContent = `${product.availabilityStatus} · ${product.stock}개`;
//   warranty.textContent = product.warrantyInformation;
//   returnPolicy.textContent = product.returnPolicy;

//   renderGallery(product.images);
//   renderSpecs();
//   renderReviews();
//   updateTotal();
// }

// function showError() {
//   detail.innerHTML = `
//     <div class="detail-error">
//       <h1>상품을 찾을 수 없습니다.</h1>
//       <p>주소를 다시 확인하거나 목록에서 상품을 선택해주세요.</p>
//       <a class="btn btn-primary" href="./index.html">상품 목록으로</a>
//     </div>
//   `;
// }

// async function fetchProduct() {
//   try {
//     const res = await fetch("./data/products.json");
//     const data = await res.json();
//     product = data.products.find(item => item.id === productId);

//     if (!product) {
//       showError();
//       return;
//     }

//     renderProduct();
//   } catch (error) {
//     console.error("상품 정보를 불러오는 중 오류가 발생했습니다.", error);
//     showError();
//   }
// }

// qtyMinus.addEventListener("click", () => {
//   if (!product) return;
//   quantity = Math.max(1, quantity - 1);
//   updateTotal();
// });

// qtyPlus.addEventListener("click", () => {
//   if (!product) return;
//   quantity = Math.min(product.stock, quantity + 1);
//   updateTotal();
// });

// cartButton.addEventListener("click", () => {
//   if (!product) return;

//   for (let i = 0; i < quantity; i++) {
//     addToCart(product);
//   }
//   cartMessage.textContent = `${quantity}개 상품을 장바구니에 담았습니다.`;
// });

// updateCartCount();
// fetchProduct();
