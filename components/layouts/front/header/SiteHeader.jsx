"use client";

import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "@/components/modules/common/Logo";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import HomeMenu from "./HomeMenu";
import FrontMenu from "./FrontMenu";
import DarkAndLightMode from "@/components/modules/common/DarkAndLightMode";

export default function SiteHeader({ url }) {
	const [isSticky, setSticky] = useState(false);
	const [isHome, setIsHome] = useState(true);

	const checkScroll = () => {
		if (window.scrollY > 0) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		if (url !== "/") {
			setIsHome(false);
		} else {
			setIsHome(true);
		}
	}, [url]);

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, []);

	return (
		<header id="header">
			<Box
				className={`site-header ${
					isHome ? "home-header" : "front-header"
				} ${isSticky ? "sticky-header" : ""}`}
			>
				<Container>
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
							<Link href={"/"}>
								<Logo />
							</Link>
						</Grid>

						<Grid
							item
							xs={6}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							{isHome ? (
								<HomeMenu />
							) : (
								<FrontMenu currentUrl={url} />
							)}
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
								variant={isSticky ? "contained" : "outlined"}
								color="primary"
								endIcon={<LocalPhoneIcon />}
							>
								<a href="tel:00982166436841">66436841 – 021</a>
							</Button>

							<DarkAndLightMode />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</header>
	);
}
