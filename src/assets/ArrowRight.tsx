export default function ArrowRight({
	fillColor = "rgba(0, 0, 0, 1)",
	width = "16",
	height = "18",
	viewBox = "0 0 24 12"
}: {
	fillColor?: string;
	width?: string;
	height?: string;
	viewBox?: string;
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox={viewBox}
			style={{ fill: `${fillColor}`, transform: "", msFilter: "" }}
		>
			<path d='M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z' />
		</svg>
	);
}
