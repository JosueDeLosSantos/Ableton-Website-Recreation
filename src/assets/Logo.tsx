export default function Logo({ navDrawer }: { navDrawer: boolean }) {
	return (
		<svg
			role='img'
			aria-label='Logo Ableton'
			fill='#000000'
			xmlns='http://www.w3.org/2000/svg'
			width={45}
			height={21}
			className={`w-[3.75em] h-[1.75em] ${
				(navDrawer && "max-lg:fill-white") || "max-lg:fill-black"
			}`}
			viewBox={`0 0 45 21`}
		>
			<path d='M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z'></path>
		</svg>
	);
}
