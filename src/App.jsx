import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NotFound from "./pages/NotFound";
function App() {
	const [user] = useAuthState(auth);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				{user && <Route path="/dashboard" element={<Dashboard />} />}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
