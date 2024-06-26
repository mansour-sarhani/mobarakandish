import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import TableViewIcon from "@mui/icons-material/TableView";
import Link from "next/link";
import PageBreadcrumb from "@/components/modules/common/PageBreadcrumb";

export default function MilkCowPage() {
	return (
		<Box className="inner-page-wrapper">
			<PageBreadcrumb title={"گاو شیری"} parent={"حوزه های فعالیت"} />

			<Box className="service-block block-rtl">
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Box className="service-content">
							<Typography
								variant="h3"
								gutterBottom
								marginBottom="20px"
							>
								اصلاح نژاد دام سنگین
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

							<div className="service-buttons-wrapper">
								<Button
									variant="contained"
									color="primary"
									startIcon={<TableViewIcon />}
								>
									<Link href={"/milk-cow/sperms-list"}>
										لیست اسپرم گاو شیری
									</Link>
								</Button>

								{/* <Button
									variant="contained"
									color="primary"
									startIcon={<FormatListNumberedRtlIcon />}
								>
									<Link href={"/"}>اسپرم گاو شیری</Link>
								</Button> */}
							</div>
						</Box>
					</Grid>

					<Grid item xs={12} md={6}>
						<Box className="service-visual">
							<div className="service-overlay service-overlay-left"></div>
							<Box className="service-main-image">
								<Image
									src="/images/sheep-service.webp"
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
