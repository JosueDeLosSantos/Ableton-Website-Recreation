import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
	return (
		<div className='max-w-[100rem] mx-auto bg-white'>
			<Navbar />
			<main className='min-h-screen max-lg:mt-12'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
