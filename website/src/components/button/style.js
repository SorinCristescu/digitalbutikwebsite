import styled from 'styled-components'

export const ButtonContainer = styled.div`
    width:300px;
	cursor: pointer;
	font-family: 'MonumentExtended Regular', sans-serif;
	font-weight: 900;
	user-select: none;
	color: #643DF6;
	font-size: 0;
	transform: translate3d(0, 0, 0);
	filter: blur(0);
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;

    span {
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: inline-block;
        position: relative;
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 250ms;
        padding: 0 0.1em;
    }

    span:nth-child(0n) {
	    transition-delay: 0ms;
    }

    span:nth-child(0n):after {
	    transition-delay: 0ms;
    }
    
    span:nth-child(1n) {
	    transition-delay: 83.3333333333ms;
    }

    span:nth-child(1n):after {
	    transition-delay: 83.3333333333ms;
    }

    span:nth-child(2n) {
	    transition-delay: 166.6666666667ms;
    }

    span:nth-child(2n):after {
	    transition-delay: 166.6666666667ms;
    }

    span:nth-child(3n) {
	    transition-delay: 250ms;
    }

    span:nth-child(3n):after {
	    transition-delay: 250ms;
    }

    span:after {
        content: '';
        position: absolute;
        top: 100%;
        left: -1%;
        width: 102%;
        height: 2em;
        background: #643DF6;
        transform-origin: top center;
        transform: scaley(0.1);
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 250ms;
    }

    &:hover span {
	    transform: translateY(-1em);
    }

    &:hover span:after {
	    transform: scaleY(1);
    }
    &:active span {
        transform: translateY(0);
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 125ms;
        transition-delay: 0 !important;
    }
    &:active span:after {
        transform: scaleY(0.5);
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 125ms;
        transition-delay: 0 !important;
    }

`;
