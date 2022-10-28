import React from "react"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultPage from "./DefaultPage"
import PageTwo from "./PageTwo"

export default function RoutesAndNavBar() {
	return (
		<div>
			<BrowserRouter>
				<div id="navbar">
					<Link to="./page-two" >Go to page two</Link>
					<Link to="./*" >Go to page one</Link>
				</div>
				<Routes>
					<Route path="*" element={<DefaultPage />} />
					<Route path="/page-two" element={<PageTwo />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
