const initialState = {
  cart: [] as { count: number; checked: boolean; product: any }[],
  payment: {},
  address: {},
  addressList: [] as any[],
  cardList: [] as any[],
  orderHistory: [] as any[],
};

function shoppingCartReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_ADDRESS_LIST":
      return {
        ...state,
        addressList: action.payload,
      };

    case "ADD_TO_CART": {
      const productToAdd = action.payload;

      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === productToAdd.id,
      );

      if (existingItemIndex > -1) {
        const newCart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        return { ...state, cart: newCart };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          { count: 1, checked: true, product: productToAdd },
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case "UPDATE_CART_ITEM_COUNT": {
      const { productId, change } = action.payload;
      const newCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          const newCount = item.count + change;
          return { ...item, count: newCount < 1 ? 1 : newCount };
        }
        return item;
      });
      return { ...state, cart: newCart };
    }

    case "TOGGLE_CART_ITEM_CHECK": {
      const productId = action.payload;
      const newCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return { ...state, cart: newCart };
    }
    case "SET_ADDRESS_LIST":
      return { ...state, addressList: action.payload };

    case "SET_CARD_LIST":
      return {
        ...state,
        cardList: action.payload,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        payment: {},
        address: {},
      };
    case "SET_ORDER_HISTORY":
      return {
        ...state,
        orderHistory: action.payload,
      };
    default:
      return state;
  }
}

export default shoppingCartReducer;
