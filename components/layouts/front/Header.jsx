"use client";

import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "@/components/modules/Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MainMenu from "@/components/modules/MainMenu";

export default function Header() {
	const [isSticky, setSticky] = useState(false);

	const checkScroll = () => {
		if (window.pageYOffset > 0) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, []);

	return (
		<Box id="home">
			<Box
				className={`header ${isSticky ? "sticky-header" : ""}`}
				sx={{
					width: "100%",
					height: "100px",
					display: "flex",
					alignItems: "center",
					backgroundColor: "#13263c",
				}}
			>
				<Container sx={{}}>
					<Grid
						container
						spacing={3}
						justifyContent="center"
						alignItems="center"
						sx={{ paddingTop: "10px", paddingBottom: "10px" }}
					>
						<Grid
							item
							xs={3}
							sx={{
								display: "flex",
								justifyContent: "flex-start",
							}}
						>
							<Logo />
						</Grid>

						<Grid
							item
							xs={6}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<MainMenu />
						</Grid>

						<Grid
							item
							xs={3}
							sx={{
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Button
								variant="contained"
								color="primary"
								startIcon={<AccountCircleIcon />}
							>
								پنل کاربری
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box
				className="header-curve"
				sx={{
					backgroundColor: "#ffffff",
					height: "70px",
				}}
			>
				<svg
					viewBox="15 12 1470 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
						fill="#13263c"
					></path>
				</svg>
			</Box>
		</Box>
	);
}
