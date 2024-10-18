import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function HomeIntro() {
    return (
        <div className="intro-bg" id="home">
            <div className="intro-wrapper">
                <Container>
                    <div className="intro-content">
                        <Typography variant="h2">
                            اصلاح نژاد دام سنگین و سبک
                        </Typography>

                        <Typography variant="h2">
                            تولید و تأمین مواد ژنتیکی دام، طیور و آبزیان
                        </Typography>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            endIcon={<ChevronLeftIcon />}
                        >
                            <Link href="/">بیشتر بخوانید</Link>
                        </Button>

                        <div className="intro-logos-wrapper">
                            <Image
                                src="/images/ocflock.png"
                                alt="ocflock"
                                width={125}
                                height={65}
                            />
                            <Image
                                src="/images/evolution-1.png"
                                alt="evolution"
                                width={125}
                                height={65}
                            />
                            <Image
                                src="/images/genex-2.png"
                                alt="genex"
                                width={125}
                                height={65}
                            />
                            <Image
                                src="/images/hendrix-genetix-1.png"
                                alt="hendrix-genetix"
                                width={125}
                                height={65}
                            />
                            <Image
                                src="/images/troutlodge-1.png"
                                alt="troutlodge"
                                width={125}
                                height={65}
                            />
                            <Image
                                src="/images/damgostar-pishgam.png"
                                alt="damgostar-pishgam"
                                width={125}
                                height={65}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
