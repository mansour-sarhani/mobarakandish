import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

export default function HomeAbout() {
	return (
		<Box sx={{ padding: "50px 0", position: "relative" }} id="about">
			<div className="mask-overlay"></div>
			<Container>
				<Box>
					<Typography
						variant="h2"
						gutterBottom
						textAlign="center"
						color="primary"
					>
						درباره مبارک اندیش
					</Typography>

					<Typography
						variant="body1"
						gutterBottom
						textAlign="justify"
					>
						گروه مبارک اندیش فعالیت خود را از سال ۱۳۷۷ آغاز نموده
						است و با اتکا به خداوند متعال و نیز تلاش شبانه روزی
						همکاران خود که از برجسته ترین متخصصین ژنتیک و اصلاح نژاد
						و سایر گرایش های مختلف علوم دامی، دامپزشکی و شیلات کشور
						با تجربیات داخلی و بین المللی می باشند، توفیق داشته است
						فعالیت های خود را گسترش داده و اولین هلدینگ خصوصی و دانش
						بنیان تولید و تأمین مواد ژنتیکی دام، طیور و آبزیان را در
						کشور عزیزمان ایران ایجاد نماید.
					</Typography>

					<Typography
						variant="body1"
						gutterBottom
						textAlign="justify"
					>
						در حال حاضر این گروه، تولید کننده و تأمین کننده اسپرم و
						جنین نژادهای مختلف گاوهای شیری و گوشتی، اسپرم و جنین
						نژادهای مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
						تخم چشم زده و بچه ماهی قزل آلا و سالمون، مخازن و تانک
						های حمل و نگهداری ازت و اکسیژن و نیز تجهیزات تلقیح
						مصنوعی می باشد.
					</Typography>

					<Typography
						variant="h4"
						gutterBottom
						textAlign="center"
						sx={{ marginTop: "20px" }}
						color="primary"
					>
						منشور گروه مبارک اندیش
					</Typography>

					<Typography
						variant="body1"
						gutterBottom
						textAlign="justify"
						sx={{ marginBottom: "20px" }}
					>
						تولید و تامین مواد ژنتیکی ممتاز، با استفاده از دانش روز
						و نوآوری جهت ارتقای کیفیت فرآورده های پروتئینی تولیدی و
						نیز حداکثر نمودن سودآوری مشتریان و بهبود پایداری تولید
						در مزارع دام، طیور و آبزیان.
					</Typography>

					<Box sx={{ textAlign: "center" }}>
						<Image
							src="/images/about-infographic.webp"
							alt="درباره مبارک اندیش"
							width={1024}
							height={493}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
