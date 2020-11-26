const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost:3306/delilah_resto");

// Async/Await Query Tester
(async () => {
	const fetch = await sequelize.query("SELECT * FROM users", {
		type: sequelize.QueryTypes.SELECT,
	});
	console.log("---- SELECT * FROM users -----");
	console.log(fetch);
})();
