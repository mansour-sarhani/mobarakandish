import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";

const fields = [
	{
		id: 1,
		slug: "milk-cow",
		title: "گاو شیری",
		image: "/images/milk-cow.webp",
	},
	{
		id: 2,
		slug: "beef-cow",
		title: "گاو گوشتی",
		image: "/images/beef-cow.webp",
	},
	{
		id: 3,
		slug: "sheep-goat",
		title: "گوسفند و بز",
		image: "/images/sheep.webp",
	},
	{
		id: 4,
		slug: "fish",
		title: "آبزیان",
		image: "/images/fish.webp",
	},
	{
		id: 5,
		slug: "chicken",
		title: "طیور",
		image: "/images/chicken.webp",
	},
	{
		id: 6,
		slug: "bee",
		title: "زنبور عسل",
		image: "/images/bee.webp",
	},
];

export default function HomeFields() {
	return (
		<Box id="fields">
			<Container>
				<SectionHeader variant="h2">حوزه های فعالیت ما</SectionHeader>
				<Box className="home-fields-wrapper">
					{fields.map((field) => (
						<Link href={`/${field.slug}`} key={field.id}>
							<Box className="home-field-item">
								<Image
									src={field.image}
									alt={field.title}
									width={200}
									height={200}
								/>
								<Typography variant="h4" gutterBottom>
									{field.title}
								</Typography>
							</Box>
						</Link>
					))}
				</Box>
			</Container>
		</Box>
	);
}
