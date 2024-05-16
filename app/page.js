import Box from "@mui/material/Box";
import HomeAbout from "@/components/modules/HomeAbout";
import HomeFields from "@/components/modules/HomeFields";
import HomeSlider from "@/components/modules/HomeSlider";
import HomeServices from "@/components/modules/HomeServices";
import HomeContact from "@/components/modules/HomeContact";

export default function Home() {
	return (
		<Box className="home-wrapper">
			<HomeSlider />
			<HomeAbout />
			<HomeFields />
			<HomeServices />
			<HomeContact />
		</Box>
	);
}
