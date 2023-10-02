import './index.scss';
import Name from './Intro/Name';
import Resume from './Resume/Resume';
import Border from '../assets/Border.svg'
import { Container } from '@mui/material';
import './index.scss';


const Layout = () => {
    return (
    <>
    <div id="top">
        <div id="top1"><img src={Border} alt='border'/></div>

    </div>
    <div >
    <Container>
        <Name />
        <Resume/>
    </Container>
    </div>
    </>
    )

}

export default Layout