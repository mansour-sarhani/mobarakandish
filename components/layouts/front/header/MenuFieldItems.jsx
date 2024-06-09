"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

export default function MenuFieldItems({ toggleDrawer, anchor, currentUrl }) {
	return (
		<Box
			className="menu-field-items-wrapper"
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Container>
				<Typography
					variant="h4"
					gutterBottom
					textAlign="center"
					color="primary"
					sx={{ marginBottom: "25px" }}
				>
					حوزه های فعالیت مبارک اندیش
				</Typography>
				<div className="menu-field-items-grid">
					<Link
						href={"/milk-cow"}
						className={`menu-field-item ${
							currentUrl === "/milk-cow" ? "active-item" : ""
						}`}
					>
						<Image
							src={"/images/milk-cow.webp"}
							alt={"گاو شیری"}
							width={60}
							height={60}
						/>
						گاو شیری
					</Link>
					<Link
						href={"/beef-cow"}
						className={`menu-field-item ${
							currentUrl === "/beef-cow" ? "active-item" : ""
						}`}
					>
						<Image
							src={"/images/beef-cow.webp"}
							alt={"گاو گوشتی"}
							width={60}
							height={60}
						/>
						گاو گوشتی
					</Link>
					<Link
						href={"sheep-goat"}
						className={`menu-field-item ${
							currentUrl === "sheep-goat" ? "active-item" : ""
						}`}
					>
						<Image
							src={"/images/sheep.webp"}
							alt={"گوسفند و بز"}
							width={60}
							height={60}
						/>
						گوسفند و بز
					</Link>
					<Link
						href={"/fish"}
						className={`menu-field-item ${
							currentUrl === "/fish" ? "active-item" : ""
						}`}
					>
						<Image
							src={"/images/fish.webp"}
							alt={"آبزیان"}
							width={60}
							height={60}
						/>
						آبزیان
					</Link>
					<Link
						href={"/chicken"}
						className={`menu-field-item ${
							currentUrl === "/chicken" ? "active-item" : ""
						}`}
					>
						<Image
							src={"/images/chicken.webp"}
							alt={"طیور"}
							width={60}
							height={60}
						/>
						طیور
					</Link>
					<Link
						href={"/bee"}
						className={`menu-field-item ${
							currentUrl === "/bee" ? "active-item" : ""
						}`}
					>
						<Image
							src={"/images/bee.webp"}
							alt={"زنبور عسل"}
							width={60}
							height={60}
						/>
						زنبور عسل
					</Link>
				</div>
			</Container>
		</Box>
	);
}
