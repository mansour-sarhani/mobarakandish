import Typography from "@mui/material/Typography";

export default function SectionHeader({ children, variant }) {
	return (
		<div className="section-header">
			<Typography
				className="section-header-title"
				variant={variant}
				gutterBottom
				textAlign="center"
			>
				{children}
			</Typography>
		</div>
	);
}
