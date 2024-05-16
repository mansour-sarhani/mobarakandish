import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import SellIcon from "@mui/icons-material/Sell";

export default function HomeServices() {
	return (
		<Box sx={{ padding: "50px 0" }} id="services">
			<Typography
				variant="h2"
				gutterBottom
				textAlign="center"
				color="primary"
			>
				خدمات ما
			</Typography>

			<Box
				className="service-block block-rtl"
				sx={{ height: "624px", margin: "50px 0 100px" }}
			>
				<Grid container spacing={3}>
					<Grid item xs={12} md={5}>
						<Box
							className="service-content"
							sx={{
								height: "600px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "start",
								paddingRight: "35%",
							}}
						>
							<Typography
								variant="h3"
								gutterBottom
								marginBottom="20px"
							>
								اصلاح نژاد گاوهای شیری
							</Typography>
							<Typography
								variant="subtitle1"
								color="secondary"
								gutterBottom
								marginBottom="20px"
							>
								تولید و تامین مواد ژنتیکی ممتاز، با استفاده از
								دانش روز و نوآوری ...
							</Typography>
							<Typography variant="body1" marginBottom="30px">
								تولید کننده و تأمین کننده اسپرم و جنین نژادهای
								مختلف گاوهای شیری و گوشتی، اسپرم و جنین نژادهای
								مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
								تخم چشم زده و بچه ماهی قزل آلا و سالمون، مخازن و
								تانک های حمل و نگهداری ازت و اکسیژن و نیز
								تجهیزات تلقیح مصنوعی می باشد.
							</Typography>

							<Stack
								direction="row"
								spacing={2}
								justifyContent="space-between"
								width="100%"
							>
								<Button
									variant="contained"
									color="secondary"
									startIcon={<InfoIcon />}
									sx={{ marginLeft: "16px !important" }}
								>
									بیشتر بخوانید
								</Button>

								<Button
									variant="contained"
									color="secondary"
									startIcon={<FormatListNumberedRtlIcon />}
								>
									مشاهده لیست نژادها
								</Button>

								<Button
									variant="contained"
									color="secondary"
									startIcon={<SellIcon />}
									sx={{ marginLeft: "0 !important" }}
								>
									مشاهده قیمت
								</Button>
							</Stack>
						</Box>
					</Grid>

					<Grid item xs={12} md={7}>
						<Box
							className="service-visual"
							sx={{
								height: "600px",
								display: "flex",
								alignItems: "center",
								position: "relative",
							}}
						>
							<div className="service-overlay service-overlay-left"></div>
							<Box
								className="service-main-image"
								sx={{
									position: "absolute",
									left: "0",
									right: "auto",
								}}
							>
								<Image
									src="/images/milk-cow-service.webp"
									width={900}
									height={514}
									alt="مبارک اندیش"
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Box
				className="service-block block-ltr"
				sx={{ height: "624px", margin: "50px 0 100px" }}
			>
				<Grid container spacing={3}>
					<Grid item xs={12} md={7}>
						<Box
							className="service-visual"
							sx={{
								height: "600px",
								display: "flex",
								alignItems: "center",
								position: "relative",
							}}
						>
							<div className="service-overlay service-overlay-right"></div>
							<Box
								className="service-main-image"
								sx={{
									position: "absolute",
									left: "auto",
									right: "0",
								}}
							>
								<Image
									src="/images/sheep-service.webp"
									width={900}
									height={514}
									alt="مبارک اندیش"
								/>
							</Box>
						</Box>
					</Grid>

					<Grid item xs={12} md={5}>
						<Box
							className="service-content"
							sx={{
								height: "600px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "start",
								paddingRight: "0",
								paddingLeft: "35%",
							}}
						>
							<Typography
								variant="h3"
								gutterBottom
								marginBottom="20px"
							>
								اصلاح نژاد گوسفند و بز
							</Typography>
							<Typography
								variant="subtitle1"
								color="primary"
								gutterBottom
								marginBottom="20px"
							>
								تولید و تامین مواد ژنتیکی ممتاز، با استفاده از
								دانش روز و نوآوری ...
							</Typography>
							<Typography variant="body1" marginBottom="30px">
								تولید کننده و تأمین کننده اسپرم و جنین نژادهای
								مختلف گاوهای شیری و گوشتی، اسپرم و جنین نژادهای
								مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
								تخم چشم زده و بچه ماهی قزل آلا و سالمون، مخازن و
								تانک های حمل و نگهداری ازت و اکسیژن و نیز
								تجهیزات تلقیح مصنوعی می باشد.
							</Typography>

							<Stack
								direction="row"
								spacing={2}
								justifyContent="space-between"
								width="100%"
							>
								<Button
									variant="contained"
									color="primary"
									startIcon={<InfoIcon />}
									sx={{ marginLeft: "16px !important" }}
								>
									بیشتر بخوانید
								</Button>

								<Button
									variant="contained"
									color="primary"
									startIcon={<FormatListNumberedRtlIcon />}
								>
									مشاهده لیست نژادها
								</Button>

								<Button
									variant="contained"
									color="primary"
									startIcon={<SellIcon />}
									sx={{ marginLeft: "0 !important" }}
								>
									مشاهده قیمت
								</Button>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Box
				className="service-block block-rtl"
				sx={{ height: "624px", margin: "50px 0 100px" }}
			>
				<Grid container spacing={3}>
					<Grid item xs={12} md={5}>
						<Box
							className="service-content"
							sx={{
								height: "600px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "start",
								paddingRight: "35%",
							}}
						>
							<Typography
								variant="h3"
								gutterBottom
								marginBottom="20px"
							>
								اصلاح نژاد طیور
							</Typography>
							<Typography
								variant="subtitle1"
								color="secondary"
								gutterBottom
								marginBottom="20px"
							>
								تولید و تامین مواد ژنتیکی ممتاز، با استفاده از
								دانش روز و نوآوری ...
							</Typography>
							<Typography variant="body1" marginBottom="30px">
								تولید کننده و تأمین کننده اسپرم و جنین نژادهای
								مختلف گاوهای شیری و گوشتی، اسپرم و جنین نژادهای
								مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
								تخم چشم زده و بچه ماهی قزل آلا و سالمون، مخازن و
								تانک های حمل و نگهداری ازت و اکسیژن و نیز
								تجهیزات تلقیح مصنوعی می باشد.
							</Typography>

							<Stack
								direction="row"
								spacing={2}
								justifyContent="space-between"
								width="100%"
							>
								<Button
									variant="contained"
									color="secondary"
									startIcon={<InfoIcon />}
									sx={{ marginLeft: "16px !important" }}
								>
									بیشتر بخوانید
								</Button>

								<Button
									variant="contained"
									color="secondary"
									startIcon={<FormatListNumberedRtlIcon />}
								>
									مشاهده لیست نژادها
								</Button>

								<Button
									variant="contained"
									color="secondary"
									startIcon={<SellIcon />}
									sx={{ marginLeft: "0 !important" }}
								>
									مشاهده قیمت
								</Button>
							</Stack>
						</Box>
					</Grid>

					<Grid item xs={12} md={7}>
						<Box
							className="service-visual"
							sx={{
								height: "600px",
								display: "flex",
								alignItems: "center",
								position: "relative",
							}}
						>
							<div className="service-overlay service-overlay-left"></div>
							<Box
								className="service-main-image"
								sx={{
									position: "absolute",
									left: "0",
									right: "auto",
								}}
							>
								<Image
									src="/images/chicken-service.webp"
									width={900}
									height={514}
									alt="مبارک اندیش"
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
