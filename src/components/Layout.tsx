import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
	return (
		<div className='max-w-[1536px] box-border mx-auto bg-white'>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
