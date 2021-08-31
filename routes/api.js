const express = require("express");
const APIRouter = express.Router();

// /GET get all plugins
APIRouter.get("/plugins", (_, res) => {
	return res.send({
		"chess.zuri.chat": {
			name: "Chess Board Room",
		},
		"whiteboard.zuri.chat": {
			name: "Whiteboard Room",
		},
		"calendar.zuri.chat": {
			name: "Company Holiday Calendar",
		},
		"noticeboard.zuri.chat": {
			name: "Notice Board Plugin",
		},
		"channels.zuri.chat": {
			name: "Channels Plugin",
		},
		"todo.zuri.chat": {
			name: "Zuri Todo App",
		},
		"goals.zuri.chat": {
			name: "Goals Zuri App", 
		} 
	});
});

APIRouter.get("/plugins/:name", (req, res) => {
	const { name } = req.params;

	if (name in defaultData === false) {
		return res.status(404).send({
			messages: "not found!",
		});
	} else {
		return res.status(200).send({
			messages: "success",
			[name]: defaultData[name],
		});
	}
});

const defaultData = {
	channels: [
		{
			id: 1,
			name: "announcements",
			description: "",
		},
		{
			id: 2,
			name: "games",
			description: "",
		},
		{
			id: 3,
			name: "designers",
			description: "",
		},
		{
			id: 4,
			name: "developers",
			description: "",
		},
	],
	messages: [
		{
			id: 1,
			name: "John Doe",
			display_name: "johndoe",
			avatar: "/avatar1.svg",
			description: "",
		},
		{
			id: 2,
			name: "Ige Damilola",
			display_name: "idmcalculus",
			avatar: "/avatar2.svg",
			description: "",
		},
		{
			id: 3,
			name: "Mark Essien",
			display_name: "markessien",
			avatar: "/avatar1.svg",
			description: "",
		},
		{
			id: 4,
			name: "Seyi Onifade",
			display_name: "xyluz",
			avatar: "/avatar2.svg",
			description: "",
		},
	],
};

//User registration endpoint
APIRouter.post("/register", async (req, res) => {
	const { firstName, lastName, phoneNumber, password, email } = req.body;
	const options = {
		"Content-Type": "applicaton/json",
		body: {
			firstName,
			lastName,
			phoneNumber,
			email,
			password,
		},
	};
	const response = await axios.post(
		"https://api.zuri.chat/auth/login",
		options
	);
	res.json(response);
});

//User login endpoint
APIRouter.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const options = {
		"Content-Type": "applicaton/json",
		body: {
			email,
			password,
		},
	};
	const response = await axios.post(
		"https://api.zuri.chat/auth/login",
		options
	);
	res.json(response);
});

module.exports = APIRouter;
