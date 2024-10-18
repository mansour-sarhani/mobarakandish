import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/modules/common/SectionHeader';

const fields = [
    {
        id: 1,
        slug: 'milk-cow',
        title: 'گاو شیری',
        image: '/images/milk-cow.webp',
    },
    {
        id: 2,
        slug: 'beef-cow',
        title: 'گاو گوشتی',
        image: '/images/beef-cow.webp',
    },
    {
        id: 3,
        slug: 'sheep-goat',
        title: 'گوسفند و بز',
        image: '/images/sheep.webp',
    },
    {
        id: 4,
        slug: 'fish',
        title: 'آبزیان',
        image: '/images/fish.webp',
    },
    {
        id: 5,
        slug: 'chicken',
        title: 'طیور',
        image: '/images/chicken.webp',
    },
    {
        id: 6,
        slug: 'bee',
        title: 'زنبور عسل',
        image: '/images/bee.webp',
    },
];

export default function HomeFields() {
    return (
        <div className="home-fields" id="fields">
            <Container>
                <SectionHeader variant="h2">حوزه های فعالیت ما</SectionHeader>
                <div className="home-fields-wrapper">
                    {fields.map((field) => (
                        <Link href={`/${field.slug}`} key={field.id}>
                            <Paper elevation={5}>
                                <div className="home-field-item">
                                    <Image
                                        src={field.image}
                                        alt={field.title}
                                        width={200}
                                        height={200}
                                    />
                                    <Typography variant="h4" gutterBottom>
                                        {field.title}
                                    </Typography>
                                </div>
                            </Paper>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
