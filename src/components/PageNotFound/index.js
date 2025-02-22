import React, { useState } from 'react';
import Video from '../../videos/videonotfound.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward
} from './PageNotFoundElements';


const PageNotFound = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        // conferir se é isso
        <HeroContainer id='contact'> 
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Oops, page not found</HeroH1>
                <HeroP>
                    The Big Squid Monster is coming!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        // se continuar como contato pode apagar o que está embaixo
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Return to Home {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default PageNotFound
