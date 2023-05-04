const addToCart = (id) => {
  let applyCart = {};
  const strCart = localStorage.getItem("recipies-cart");
  if (strCart) {
    applyCart = JSON.parse(strCart);
  }
  const quantity = applyCart[JSON.stringify(id)];
  if (quantity) {
    return false;
  } else {
    applyCart[id] = 1;
  }
  localStorage.setItem("recipies-cart", JSON.stringify(applyCart));
  return true;
};

const removeToCart = (key) => {
  let newCart = getStrdCart();
  delete newCart[key];
  localStorage.setItem("recipies-cart", JSON.stringify(newCart));
}

const getStrdCart = () => {
  let strCart = {};
  const storedCart = localStorage.getItem("recipies-cart");
  if (storedCart) {
    strCart = JSON.parse(storedCart);
  }
  return strCart;
};

const loadStrData = (params) => {
  const saveCard = getStrdCart();
  let cartArr = [];
  for (const id in saveCard) {
    const foundData = params.find((param) => param.recipe_id === id);
    if (foundData) {
      cartArr.push(foundData);
    }
  }
  
  return cartArr;
};

export { addToCart,removeToCart, getStrdCart, loadStrData };
