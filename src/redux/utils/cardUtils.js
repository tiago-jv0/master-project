export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            if (cartItemToAdd.id === cartItem.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
