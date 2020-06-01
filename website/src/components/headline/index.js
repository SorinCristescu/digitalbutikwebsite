import React, { useEffect } from 'react'
import PropTypes from "prop-types"
import { gsap } from 'gsap'
import { SplitText } from "gsap/SplitText";

// Components


// Styles
import { HeadlineContainer } from './style'
gsap.registerPlugin(SplitText)
const Headline = ({headline}) => {
    const headlineElement = React.createRef()
    
    useEffect(() => {
         
        // Add animations to be played once page has load

        const mySplitText = new SplitText('headlineElement,current', { type: "words, chars"})
        const splitText = mySplitText.chars
        console.log('text', splitText)
        gsap.from([splitText], 0.5, {
            opacity: 0,
            rotation: -180,
            y: -100,
            stagger: 0.02, 
            ease: "power2.easeOut"
        })
    }, [headlineElement])

    return (
        <HeadlineContainer>
           <h4 ref={headlineElement}>{headline}</h4> 
        </HeadlineContainer>
    )
}

Headline.propTypes = {
    headline: PropTypes.string.isRequired,
  }

export default Headline