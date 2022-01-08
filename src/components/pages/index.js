import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../InfoSection/Data';
import Navbar from '../Navbar'; 
import Services from '../Services';
import Sidebar from '../Sidebar';

const Home = () => {
const[isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <HeroSection />
                <InfoSection {...homeObjOne}/>
                <InfoSection {...homeObjTwo}/>
                <Services />
                <InfoSection {...homeObjThree}/>
                <InfoSection {...homeObjFour}/>
        </>
    );
};

export default Home
