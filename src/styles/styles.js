import { black } from "ansi-colors";

const soupStyles = {
    color: {
        default: 'black',
        primary: '#F2AF9A',
        secondary: '#CF2C51',
        accent: '#3D075E',
        success: '#2F6C67',
        danger: '#EB4E47;',
        neutral: '#f6f6f6',
    },
    padding: {
        default: '3%',
        largeContainer: '5% 2.5%',
        mediumContainer: '2% 1% 1.5% 1%',
        smallContainer: '1% 0.5% 1% 0.5%',
        navs: '4% 0 3% 0',
        input: '0 1.5%',
    },
    width: {
        appLevel: '1200px',
        subComponentLevel: '40%',
        input: '250px',
    },
    margin: {
        appLevel: 'auto', 
        largePlus: '12%',
        large: '10%',
        mediumPlus: '7%',
        medium: '5%', 
    },
    display: {
        default: 'flex',
        wrapDefault: 'wrap',
        alignDefault: 'center',
        directionSecondary: 'column',
        justifyDefault: 'space-around',
        hide: 'none',
    },
    height: {
        componentLevel: '750px',
        subComponentLevel: '55%',
        input: '40px',
    },
    fontSize: {
        heading: '2.2rem',
        large: '1.7rem',
        medium: '1.4rem',
        small: '1.2rem',
    },
    font: {
        alternate: 'Patrick Hand, cursive',
    },
    text: {
        decorationStandard: 'none',
        transformSecondary: 'lowercase',
    },
    border: {
        radiusStandard: '4px',
        radiusMedium: '3px',
        radiusSmall: '2px',
    },
    cursor: {
        default: 'pointer',
    }
}

export default soupStyles;