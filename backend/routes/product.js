const express = require("express");
const router = express.Router();

const {
	getProducts,
	getSingleProduct,
	newProduct,
	updateProduct,
	deleteProduct,
	createProductReview,
	getProductReviews,
	deleteReview,
	getAdminProducts,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
//Routes
router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);

//Admin Routes
router
	.route("/admin/product/new")
	.post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router
	.route("/admin/product/:id")
	.put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
	.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
router
	.route("/admin/products")
	.get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/review/").put(isAuthenticatedUser, createProductReview);
router.route("/reviews/").get(isAuthenticatedUser, getProductReviews);
router.route("/reviews/").delete(isAuthenticatedUser, deleteReview);

module.exports = router;
