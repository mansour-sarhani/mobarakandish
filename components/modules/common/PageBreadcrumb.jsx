import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function PageBreadcrumb({ title, type }) {
	return (
		<Box className="breadcrumb-wrapper">
			<Image
				src={"/images/breadcrumb-1.webp"}
				alt="mobarak-andish"
				fill="cover"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
				style={{ objectFit: "cover" }}
			/>
			<Box className="breadcrumb-container">
				<Container sx={{ height: "100%" }}>
					<Box className="breadcrumb-content">
						<Typography variant="h1" fontSize="2rem">
							{title}
						</Typography>

						<Breadcrumbs
							separator="›"
							aria-label="breadcrumb"
							color="#fff"
						>
							<Typography color="#fff" fontSize="0.9rem">
								{type === "fields"
									? "حوزه های فعالیت"
									: "خدمات تخصصی"}
							</Typography>
							<Typography
								color="secondary"
								fontSize="0.9rem"
								className="current-page"
							>
								{title}
							</Typography>
						</Breadcrumbs>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}
