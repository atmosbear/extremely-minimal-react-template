import { createRoot } from "react-dom/client"
import React from "react"
import RoutesAndNavBar from "./components/RoutesAndNavbar"

export default function StartPage() {
	return (
		<div>
			<RoutesAndNavBar />
		</div>
	)
}

createRoot(document.getElementById("root")!).render(<StartPage />)


