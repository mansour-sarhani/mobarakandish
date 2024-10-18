import HomeIntro from '@/components/modules/Home/HomeIntro';
import HomeAbout from '@/components/modules/Home/HomeAbout';
import HomeFields from '@/components/modules/Home/HomeFields';
import HomeServices from '@/components/modules/Home/HomeServices';
import ContactSection from '@/components/modules/common/ContactSection';
import HomeBlog from '@/components/modules/Home/HomeBlog';

export default function HomePage() {
    return (
        <div className="home-page-wrapper">
            <HomeIntro />
            <HomeAbout />
            <HomeFields />
            <HomeServices />
            <ContactSection />
            <HomeBlog />
        </div>
    );
}
