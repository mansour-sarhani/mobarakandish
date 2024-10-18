import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '@/components/modules/common/Logo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';
import FrontMenu from '@/components/layouts/header/_frontMenu';
import DarkAndLightBtn from '@/components/modules/common/DarkAndLightBtn';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LanguageBtn from '@/components/modules/common/LanguageBtn';

function WebHeader({ isSticky }) {
    return (
        <AppBar className="web-appbar" id="web_header">
            <Container>
                <Toolbar className="web-toolbar">
                    <div className="web-header-wrapper">
                        <div className="web-header-logo">
                            <Link href={'/'}>
                                <Logo />
                            </Link>
                        </div>

                        <div className="web-header-menu">
                            <FrontMenu />
                        </div>

                        <div className="web-header-btns">
                            <Button
                                variant={isSticky ? 'contained' : 'outlined'}
                                color="primary"
                                endIcon={<LocalPhoneIcon />}
                            >
                                <a href="tel:00982166436841">66436841 – 021</a>
                            </Button>

                            <DarkAndLightBtn />

                            {/* <LanguageBtn /> */}
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default WebHeader;
