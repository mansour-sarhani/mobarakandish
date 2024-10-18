import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import SectionHeader from '../common/SectionHeader';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from 'next/link';

function HomeBlog() {
    return (
        <div className="blog-section" id="blog">
            <Container>
                <SectionHeader variant="h2">مطالب مرتبط</SectionHeader>

                <div className="home-blog-wrapper">
                    <Paper className="home-blog-item" elevation={5}>
                        <div className="home-blog-item-image">
                            <Link href="/">
                                <Image
                                    src="/images/blog-1.webp"
                                    alt="blog-1"
                                    fill
                                    sizes="100vw"
                                />
                            </Link>
                        </div>
                        <div className="home-blog-item-content">
                            <Link href="/" className="home-blog-item-title">
                                <Typography variant="h6">
                                    آزمون ژنومیک
                                </Typography>
                            </Link>

                            <Typography variant="body2">
                                تولید کننده و تأمین کننده اسپرم و جنین نژادهای
                                مختلف گاوهای شیری و گوشتی، اسپرم و جنین نژادهای
                                مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
                                تخم چشم زده و بچه ماهی قزل آلا و سالمون ...
                            </Typography>

                            <div className="home-blog-item-btn">
                                <Button variant="outlined" href="/">
                                    ادامه مطلب
                                </Button>
                            </div>
                        </div>
                    </Paper>

                    <Paper className="home-blog-item" elevation={5}>
                        <div className="home-blog-item-image">
                            <Link href="/">
                                <Image
                                    src="/images/blog-2.webp"
                                    alt="blog-1"
                                    fill
                                    sizes="100vw"
                                />
                            </Link>
                        </div>
                        <div className="home-blog-item-content">
                            <Link href="/" className="home-blog-item-title">
                                <Typography variant="h6">
                                    ارزیابی ژنتیکی گله های گاو شیری
                                </Typography>
                            </Link>

                            <Typography variant="body2">
                                تولید کننده و تأمین کننده اسپرم و جنین نژادهای
                                مختلف گاوهای شیری و گوشتی، اسپرم و جنین نژادهای
                                مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
                                تخم چشم زده و بچه ماهی قزل آلا و سالمون ...
                            </Typography>

                            <div className="home-blog-item-btn">
                                <Button variant="outlined" href="/">
                                    ادامه مطلب
                                </Button>
                            </div>
                        </div>
                    </Paper>

                    <Paper className="home-blog-item" elevation={5}>
                        <div className="home-blog-item-image">
                            <Link href="/">
                                <Image
                                    src="/images/blog-3.webp"
                                    alt="blog-1"
                                    fill
                                    sizes="100vw"
                                />
                            </Link>
                        </div>
                        <div className="home-blog-item-content">
                            <Link href="/" className="home-blog-item-title">
                                <Typography variant="h6">
                                    خدمات تلقیح مصنوعی و اصلاح نژاد گله های
                                    گوسفند و بز
                                </Typography>
                            </Link>

                            <Typography variant="body2">
                                تولید کننده و تأمین کننده اسپرم و جنین نژادهای
                                مختلف گاوهای شیری و گوشتی، اسپرم و جنین نژادهای
                                مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
                                تخم چشم زده و بچه ماهی قزل آلا و سالمون ...
                            </Typography>

                            <div className="home-blog-item-btn">
                                <Button variant="outlined" href="/">
                                    ادامه مطلب
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Container>
        </div>
    );
}

export default HomeBlog;
