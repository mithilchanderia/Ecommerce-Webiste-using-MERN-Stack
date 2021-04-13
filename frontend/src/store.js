import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	newProductReducer,
	newReviewReducer,
	productDetailsReducer,
	productReducer,
	productReviewsReducer,
	productsReducer,
	reviewReducer,
} from "./reducers/productReducers";
import {
	allUsersReducer,
	authReducer,
	forgotPasswordReducer,
	userDetailsReducer,
	userReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
	allOrdersReducer,
	myOrdersReducer,
	newOrderReducer,
	orderDetailsReducer,
	orderReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
	products: productsReducer,
	productDetails: productDetailsReducer,
	productReviews: productReviewsReducer,
	review: reviewReducer,
	auth: authReducer,
	user: userReducer,
	allUsers: allUsersReducer,
	userDetails: userDetailsReducer,
	forgotPassword: forgotPasswordReducer,
	cart: cartReducer,
	newOrder: newOrderReducer,
	myOrders: myOrdersReducer,
	orderDetails: orderDetailsReducer,
	newReview: newReviewReducer,
	newProduct: newProductReducer,
	product: productReducer,
	order: orderReducer,
	allOrders: allOrdersReducer,
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
