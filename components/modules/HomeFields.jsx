import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const fields = [
	{ id: 1, title: "گاو شیری", image: "/images/milk-cow.webp" },
	{ id: 2, title: "گاو گوشتی", image: "/images/beef-cow.webp" },
	{ id: 3, title: "گوسفند و بز", image: "/images/sheep.webp" },
	{ id: 4, title: "آبزیان", image: "/images/fish.webp" },
	{ id: 5, title: "طیور", image: "/images/hen.webp" },
	{ id: 6, title: "زنبور عسل", image: "/images/bee.webp" },
];

export default function HomeFields() {
	return (
		<Box sx={{ padding: "50px 0" }} id="fields">
			<Container>
				<Typography
					variant="h2"
					gutterBottom
					textAlign="center"
					color="primary"
					sx={{ marginBottom: "40px" }}
				>
					حوزه های تخصصی ما
				</Typography>
				<Grid container spacing={5}>
					{fields.map((field) => (
						<Grid item xs={12} sm={6} md={4} key={field.id}>
							<Link href={`/fields/${field.id}`}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										padding: "20px",
										borderRadius: "10px",
										boxShadow:
											"0 0 10px rgba(0, 0, 0, 0.2)",
										transition:
											"box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
										":hover": {
											boxShadow:
												"0 0 20px rgba(0, 0, 0, 0.4)",
											transform: "scale(1.02)",
											"& .hoverColor": {
												color: "primary.main",
											},
										},
									}}
								>
									<Image
										src={field.image}
										alt={field.title}
										width={250}
										height={250}
									/>
									<Typography
										variant="h4"
										gutterBottom
										className="hoverColor"
										sx={{
											transition:
												"color 0.3s ease-in-out",
										}}
									>
										{field.title}
									</Typography>
								</Box>
							</Link>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
