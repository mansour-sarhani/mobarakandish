import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import SectionHeader from '@/components/modules/common/SectionHeader';

export default function HomeAbout() {
    return (
        <div className="home-about" id="about">
            <div className="right-overlay-pattern"></div>
            <Container>
                <div className="home-about-content">
                    <SectionHeader variant="h2">
                        درباره مبارک اندیش
                    </SectionHeader>

                    <Typography variant="body1" gutterBottom>
                        گروه مبارک اندیش فعالیت خود را از سال ۱۳۷۷ آغاز نموده
                        است و با اتکا به خداوند متعال و نیز تلاش شبانه روزی
                        همکاران خود که از برجسته ترین متخصصین ژنتیک و اصلاح نژاد
                        و سایر گرایش های مختلف علوم دامی، دامپزشکی و شیلات کشور
                        با تجربیات داخلی و بین المللی می باشند، توفیق داشته است
                        فعالیت های خود را گسترش داده و اولین هلدینگ خصوصی و دانش
                        بنیان تولید و تأمین مواد ژنتیکی دام، طیور و آبزیان را در
                        کشور عزیزمان ایران ایجاد نماید.
                    </Typography>

                    <Typography variant="body1" marginBottom={2}>
                        در حال حاضر این گروه، تولید کننده و تأمین کننده اسپرم و
                        جنین نژادهای مختلف گاوهای شیری و گوشتی، اسپرم و جنین
                        نژادهای مختلف گوسفند و بز، جوجه یکروزه مادر و پدر گوشتی،
                        تخم چشم زده و بچه ماهی قزل آلا و سالمون، مخازن و تانک
                        های حمل و نگهداری ازت و اکسیژن و نیز تجهیزات تلقیح
                        مصنوعی می باشد.
                    </Typography>

                    <SectionHeader variant="h4">
                        منشور گروه مبارک اندیش
                    </SectionHeader>

                    <Typography variant="body1" marginBottom={2}>
                        تولید و تامین مواد ژنتیکی ممتاز، با استفاده از دانش روز
                        و نوآوری جهت ارتقای کیفیت فرآورده های پروتئینی تولیدی و
                        نیز حداکثر نمودن سودآوری مشتریان و بهبود پایداری تولید
                        در مزارع دام، طیور و آبزیان.
                    </Typography>
                </div>

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
            </Container>
        </div>
    );
}
