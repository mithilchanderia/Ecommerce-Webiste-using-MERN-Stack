import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	productDetailsReducer,
	ProductsReducer,
} from "./reducers/productReducers";
import {
	authReducer,
	forgotPasswordReducer,
	userReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
	products: ProductsReducer,
	productDetails: productDetailsReducer,
	auth: authReducer,
	user: userReducer,
	forgotPassword: forgotPasswordReducer,
	cart: cartReducer,
});

let initalState = {
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
	},
};

const middleware = [thunk];
const store = createStore(
	reducer,
	initalState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
