import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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
];

export default function HomeIntro() {
    return (
        <div className="intro-bg" id="home">
            <div className="intro-wrapper">
                <Container>
                    <div className="intro-content">
                        <Typography variant="h2">گروه مبارک اندیش</Typography>

                        <Typography variant="h2">
                            اصلاح نژاد دام سنگین و سبک
                        </Typography>

                        <div className="intro-btns-wrapper">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<ChevronLeftIcon />}
                            >
                                <Link href="/milk-cow/sperms-list">
                                    لیست اسپرم گاو شیری
                                </Link>
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<ChevronLeftIcon />}
                            >
                                <Link href="/">لیست اسپرم گاو گوشتی</Link>
                            </Button>
                        </div>

                        <div className="home-fields-wrapper">
                            {fields.map((field) => (
                                <Link href={`/${field.slug}`} key={field.id}>
                                    <div className="home-field-item">
                                        <Image
                                            src={field.image}
                                            alt={field.title}
                                            width={180}
                                            height={180}
                                        />
                                        <Typography variant="h4" gutterBottom>
                                            {field.title}
                                        </Typography>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
