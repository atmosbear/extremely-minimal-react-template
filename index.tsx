import { createRoot } from "react-dom/client"
import Component from "./components/Component"
import React from "react"

export default function StartPage() {
	return (
		<Component />
	)
}

createRoot(document.getElementById("root")!).render(<StartPage />)


