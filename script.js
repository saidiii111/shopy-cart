/* Setup Variables */

let productBtn = document.getElementById("product-btn");
let productContainer = document.getElementById("product-container");
let data = [
  { id: 1, name: "product1", desc: "high quality" },
  { id: 2, name: "product2", desc: "good quality" },
  { id: 3, name: "product3", desc: "normal quality" },
  { id: 4, name: "product4", desc: "standard quality" },
];

function drawUi(items) {
  items.forEach(function (ele) {
    productContainer.appendChild = "<div>" + ele.name + "</div>";
  });
}

// Load data
window.onload = function () {
  drawUi(data);
};

// Add Item
productBtn.addEventListener("click", addItem),
  function addItem() {
    let productInput = document.getElementById("product-input");
    // simple validation
    if (productInput.value == "") alert("You Should Enter one Product at least");

    let lastId = data.length ? data[data.length - 1].id : 1;
    // Add to array
    data.push({ name: productInput.value });
    console.log(data);
  };
