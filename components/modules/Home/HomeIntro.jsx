import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ToBottomCurve from "../common/ToBottomCurve";

export default function HomeIntro() {
	return (
		<Box className="intro-bg" id="home">
			<Box className="intro-wrapper">
				<Container>
					<Box className="intro-content">
						<Typography variant="h2">
							اصلاح نژاد دام سنگین و سبک
						</Typography>

						<Typography variant="h2">
							تولید و تأمین مواد ژنتیکی دام، طیور و آبزیان
						</Typography>

						<Button
							variant="contained"
							color="primary"
							size="large"
							endIcon={<ChevronLeftIcon />}
						>
							<Link href="/">بیشتر بخوانید</Link>
						</Button>

						<Box className="intro-logos-wrapper">
							<Image
								src="/images/interaqua-1.png"
								alt="interaqua"
								width={110}
								height={57}
							/>
							<Image
								src="/images/ocflock.png"
								alt="ocflock"
								width={110}
								height={57}
							/>
							<Image
								src="/images/evolution-1.png"
								alt="evolution"
								width={110}
								height={57}
							/>
							<Image
								src="/images/genex-2.png"
								alt="genex"
								width={110}
								height={57}
							/>
							<Image
								src="/images/hendrix-genetix-1.png"
								alt="hendrix-genetix"
								width={110}
								height={57}
							/>
							<Image
								src="/images/troutlodge-1.png"
								alt="troutlodge"
								width={110}
								height={57}
							/>
							<Image
								src="/images/damgostar-pishgam.png"
								alt="damgostar-pishgam"
								width={110}
								height={57}
							/>
						</Box>
					</Box>
				</Container>
			</Box>

			<ToBottomCurve />
		</Box>
	);
}
