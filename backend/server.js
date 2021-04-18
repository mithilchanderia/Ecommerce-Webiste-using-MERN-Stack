const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

const dotenv = require("dotenv");

//handle the Uncaught exceptions
process.on("uncaughtException", err => {
	console.log(`ERROR: ${err.message}`);
	console.log("Shutting down server due to uncaught exception");
	process.exit(1);
});

//setting up config file
dotenv.config({ path: "backend/config/config.env" });

//Setting up cloudinary configuration
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
	console.log(
		`Server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} mode.`
	);
});

//handle Unhandled Promise rejections
process.on("unhandledRejection", err => {
	console.log(`ERROR: ${err.message}`);
	console.log("Shuttig down the server due to Unhandled Promise Rejection");
	server.close(() => {
		process.exit(1);
	});
});
