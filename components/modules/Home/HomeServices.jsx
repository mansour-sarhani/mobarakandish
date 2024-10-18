import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';

export default function HomeServices() {
    return (
        <div className="home-services" id="services">
            <SectionHeader variant="h2">خدمات تخصصی ما</SectionHeader>

            <div className="service-block block-rtl">
                <div className="service-content">
                    <Typography variant="h3" gutterBottom marginBottom="20px">
                        اصلاح نژاد دام سنگین
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="primary"
                        gutterBottom
                    >
                        تولید و تامین مواد ژنتیکی ممتاز، با استفاده از دانش روز
                        و نوآوری ...
                    </Typography>
                    <Typography variant="body1">
                        تولید کننده و تأمین کننده اسپرم و جنین نژادهای مختلف
                        گاوهای شیری و گوشتی، اسپرم و جنین نژادهای مختلف گوسفند و
                        بز، جوجه یکروزه مادر و پدر گوشتی، تخم چشم زده و بچه ماهی
                        قزل آلا و سالمون، مخازن و تانک های حمل و نگهداری ازت و
                        اکسیژن و نیز تجهیزات تلقیح مصنوعی می باشد.
                    </Typography>

                    <div className="service-buttons-wrapper">
                        <Button variant="contained" color="primary">
                            <Link href={'/'}>بیشتر بخوانید</Link>
                        </Button>

                        <Button variant="contained" color="primary">
                            <Link href={'/milk-cow/sperms-list'}>
                                لیست اسپرم گاو گوشتی
                            </Link>
                        </Button>

                        <Button variant="contained" color="primary">
                            <Link href={'/milk-cow/sperms-list'}>
                                لیست اسپرم گاو شیری
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="service-visual">
                    <div className="service-overlay service-overlay-left"></div>
                    <div className="service-main-image">
                        <Image
                            src="/images/milk-cow-service.webp"
                            width={900}
                            height={514}
                            alt="مبارک اندیش"
                        />
                    </div>
                </div>
            </div>

            <div className="service-block block-ltr">
                <div className="service-visual">
                    <div className="service-overlay service-overlay-right"></div>
                    <div className="service-main-image">
                        <Image
                            src="/images/sheep-service.webp"
                            width={900}
                            height={514}
                            alt="مبارک اندیش"
                        />
                    </div>
                </div>

                <div className="service-content">
                    <Typography variant="h3" gutterBottom marginBottom="20px">
                        اصلاح نژاد دام سبک
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="primary"
                        gutterBottom
                    >
                        تولید و تامین مواد ژنتیکی ممتاز، با استفاده از دانش روز
                        و نوآوری ...
                    </Typography>
                    <Typography variant="body1">
                        تولید کننده و تأمین کننده اسپرم و جنین نژادهای مختلف
                        گاوهای شیری و گوشتی، اسپرم و جنین نژادهای مختلف گوسفند و
                        بز، جوجه یکروزه مادر و پدر گوشتی، تخم چشم زده و بچه ماهی
                        قزل آلا و سالمون، مخازن و تانک های حمل و نگهداری ازت و
                        اکسیژن و نیز تجهیزات تلقیح مصنوعی می باشد.
                    </Typography>

                    <div className="service-buttons-wrapper">
                        <Button variant="contained" color="primary">
                            بیشتر بخوانید
                        </Button>

                        <Button variant="contained" color="primary">
                            لیست اسپرم ها
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
