export default function Logo({ width, height }: { width: number; height: number }) {
	return (
		<svg
			role='img'
			aria-label='Logo Ableton'
			fill='#000000'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			className='w-[3.75em] h-[1.75em]'
			viewBox={`0 0 ${width} ${height}`}
		>
			<path d='M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z'></path>
		</svg>
	);
}
