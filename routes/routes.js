const HomeRoute = require("./HomeRoute");

module.exports = function (server) {
	server.use(HomeRoute.path, HomeRoute.router);
	server.use((req, res) => {
		res.render("error", {
			user:req.user,
		});
	});
};