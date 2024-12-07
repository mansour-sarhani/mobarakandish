import HomeIntro from '@/components/modules/Home/HomeIntro';
import HomeAbout from '@/components/modules/Home/HomeAbout';
import HomeServices from '@/components/modules/Home/HomeServices';

export default function HomePage() {
    return (
        <div className="home-page-wrapper">
            <HomeIntro />
            <HomeAbout />
            <HomeServices />
        </div>
    );
}
