import Border from '../assets/Border.svg'
import './index.scss';
import Bio from './Intro/Bio';
import Name from './Intro/Name';
import Resume from './Resume/Resume';
import { Container } from '@mui/material';
import './index.scss';


const Layout = () => {
    return (
    <>
    <div >
    <Container>
        <Name />
    </Container>

    </div>
    </>
    )

}

export default Layout