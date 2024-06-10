import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function FrontFooter() {
	return (
		<div id="footer">
			<Box className="footer-bg">
				<Box className="footer-wrapper">
					<Container>
						<Grid container spacing={5}>
							<Grid item xs={12} md={4}>
								<Box className="footer-widget">
									<Typography variant="h6" color="primary">
										درباره مبارک اندیش
									</Typography>
									<Typography
										variant="body2"
										color="#fff"
										textAlign="justify"
										sx={{ opacity: "0.7" }}
									>
										گروه مبارک اندیش فعالیت خود را از سال
										۱۳۷۷ آغاز نموده است و با اتکا به خداوند
										متعال و نیز تلاش شبانه روزی همکاران خود
										که از برجسته ترین متخصصین ژنتیک و اصلاح
										نژاد و سایر گرایش های مختلف علوم دامی،
										دامپزشکی و شیلات کشور با تجربیات داخلی و
										بین المللی می باشند، توفیق داشته است
										فعالیت های خود را گسترش داده و اولین
										هلدینگ خصوصی و دانش بنیان تولید و تأمین
										مواد ژنتیکی دام، طیور و آبزیان را در
										کشور ایجاد نماید.
									</Typography>
								</Box>
							</Grid>

							<Grid item xs={12} md={4}>
								<Box className="footer-widget">
									<Typography variant="h6" color="primary">
										دسترسی سریع
									</Typography>
									<ul className="footer-menu">
										<li>
											<Typography variant="body2">
												<Link href="/">
													تعیین آموزش
												</Link>
											</Typography>
										</li>
										<li>
											<Typography variant="body2">
												<Link href="/">
													آزمون ژنومیک
												</Link>
											</Typography>
										</li>
										<li>
											<Typography variant="body2">
												<Link href="/">
													خدمات تلقیح مصنوعی و اصلاح
													نژاد گله های گوسفند و بز
												</Link>
											</Typography>
										</li>
										<li>
											<Typography variant="body2">
												<Link href="/">
													ارزیابی ژنتیکی گله های گاو
													شیری
												</Link>
											</Typography>
										</li>
									</ul>
								</Box>
							</Grid>

							<Grid item xs={12} md={4}>
								<Box className="footer-widget">
									<Typography variant="h6" color="primary">
										لینک های مفید
									</Typography>
									<ul className="footer-menu">
										<li>
											<Typography variant="body2">
												<Link href="/">
													تعیین آموزش
												</Link>
											</Typography>
										</li>
										<li>
											<Typography variant="body2">
												<Link href="/">
													آزمون ژنومیک
												</Link>
											</Typography>
										</li>
										<li>
											<Typography variant="body2">
												<Link href="/">
													خدمات تلقیح مصنوعی و اصلاح
													نژاد گله های گوسفند و بز
												</Link>
											</Typography>
										</li>
										<li>
											<Typography variant="body2">
												<Link href="/">
													ارزیابی ژنتیکی گله های گاو
													شیری
												</Link>
											</Typography>
										</li>
									</ul>
								</Box>
							</Grid>
						</Grid>
						<Box className="footer-copyright">
							<Typography
								variant="body2"
								color="#fff"
								fontSize="12px"
								sx={{ opacity: "0.7" }}
							>
								تمامی حقوق مادی و معنوی این وبسایت برای گروه
								مبارک اندیش محفوط می باشد.
							</Typography>
						</Box>
					</Container>
				</Box>
			</Box>
		</div>
	);
}
