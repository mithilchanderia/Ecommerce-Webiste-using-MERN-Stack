import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	newProductReducer,
	newReviewReducer,
	productDetailsReducer,
	productReducer,
	productsReducer,
} from "./reducers/productReducers";
import {
	authReducer,
	forgotPasswordReducer,
	userReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
	myOrdersReducer,
	newOrderReducer,
	orderDetailsReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
	products: productsReducer,
	productDetails: productDetailsReducer,
	auth: authReducer,
	user: userReducer,
	forgotPassword: forgotPasswordReducer,
	cart: cartReducer,
	newOrder: newOrderReducer,
	myOrders: myOrdersReducer,
	orderDetails: orderDetailsReducer,
	newReview: newReviewReducer,
	newProduct: newProductReducer,
	product: productReducer,
});

let initalState = {
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
		shippingInfo: localStorage.getItem("shippingInfo")
			? JSON.parse(localStorage.getItem("shippingInfo"))
			: {},
	},
};

const middleware = [thunk];
const store = createStore(
	reducer,
	initalState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
