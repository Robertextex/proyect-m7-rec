import { SET_PRODUCTS } from './productTypes';

const initialState = {
    PRODUCTS: [ 
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS : {
            return {
                ...state,
                PRODUCTS: action.payload,
            }
        }
        default:
            return state;
    }
};

export default productReducer;