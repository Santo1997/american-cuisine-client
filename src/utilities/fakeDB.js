const addToCart = (id) => {
  let applyCart = {};
  const strCart = localStorage.getItem("chefs-cart");
  if (strCart) {
    applyCart = JSON.parse(strCart);
  }
  const quantity = applyCart[JSON.stringify(id)];
  if (quantity) {
    return false;
  } else {
    applyCart[id] = 1;
  }
  localStorage.setItem("chefs-cart", JSON.stringify(applyCart));
  return true;
};

const getStrdCart = () => {
  let strCart = {};
  const storedCart = localStorage.getItem("chefs-cart");
  if (storedCart) {
    strCart = JSON.parse(storedCart);
  }
  return strCart;
};

const loadStrData = (params) => {
  const saveCard = getStrdCart();
  let cartArr = [];
  for (const id in saveCard) {
    const foundData = params.find((param) => param.id === parseInt(id));
    if (foundData) {
      cartArr.push(foundData);
    }
  }
  return cartArr;
};

export { addToCart, getStrdCart, loadStrData };
