import Box from "@mui/material/Box";
import HomeIntro from "@/components/modules/Home/HomeIntro";
import HomeAbout from "@/components/modules/Home/HomeAbout";
import HomeFields from "@/components/modules/Home/HomeFields";
import HomeServices from "@/components/modules/Home/HomeServices";
import ContactSection from "@/components/modules/common/ContactSection";

export default function HomePage() {
	return (
		<Box className="home-page-wrapper">
			<HomeIntro />
			<HomeAbout />
			<HomeFields />
			<HomeServices />
			<ContactSection />
		</Box>
	);
}
