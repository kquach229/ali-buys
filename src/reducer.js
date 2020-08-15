export const initialState = {
  basket: [
    {
      id: "123123450",
      title: "Call of Duty, Modern Warfare",
      price: 56.99,
      rating: 5,
      image:
        "https://cdn.cdkeys.com/500x706/media/catalog/product/c/o/cod-modern-warfare-std-xbox-one-cd-keys.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant find the product with id of ${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
