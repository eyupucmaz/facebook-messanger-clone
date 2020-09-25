import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./components/Message";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			username: "eyup",
			text: "HEllo everyone",
		},
		{
			username: "everyone",
			text: "hey eyup",
		},
		{
			username: "dummy",
			text: "dummy message",
		},
	]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();
		//! All the logic to send a  message goes here
		setMessages([...messages, { username: username, text: input }]);
		setInput("");
	};

	return (
		<div className="app">
			<h1>Facebook Messenger App 🚀 </h1>
			<h3>Welcome {username}</h3>

			<form className="app__form">
				<FormControl className="app__formInput">
					<InputLabel>Enter a message...</InputLabel>
					<Input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</FormControl>

				<Button
					className="app_formButton"
					variant="contained"
					color="primary"
					type="submit"
					disabled={!input}
					onClick={sendMessage}
				>
					Send
				</Button>
			</form>
			<div className="app_messages">
				{messages?.map((obj, index) => (
					<Message key={index} message={obj.text} username={obj.username} />
				))}
			</div>
		</div>
	);
}

export default App;
