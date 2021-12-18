const express = require("express");
const server = express();
const PORT = 3000;
const path = require("path");
const routes = require("./routes/routes");

server.listen(PORT, () => {
	console.log(`SERVER READY AT ${PORT}`);
});

// Middlewares
server.use(express.json());
server.use(
	express.urlencoded({
		extended: true,
	})
);


server.use(express.static(path.join(__dirname, "/public")));

// Settings
// set view'set
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));



(async () => {
	try {

	} catch (error) {
		console.log(error);
	} finally {
		routes(server);
	}
})();