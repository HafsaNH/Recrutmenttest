import React from 'react';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        padding: '10px',
    },
    logoText: {
        fontSize: '25px', // Main font size for the logo
        fontWeight: 'bold',
        color: '#000', // Black color
        letterSpacing: '2px',
        marginBottom: '0px',
        lineHeight: '1.2',
    },
    highlight: {
        color: '#66b3ba', // Teal color for the 'E'
    },
    subtitle: {
        fontSize: '10px', // Subtitle font size
        color: '#666', // Dark grey color
        fontWeight: '300',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        position: 'absolute',
        bottom: '-10px',
        right: '0',
        textAlign: 'right',
        whiteSpace: 'nowrap',
        lineHeight: '1', // Minimized line height to reduce space
    }
};

const Logo = () => (
    <a className="home-link" href={process.env.PUBLIC_URL + '/'} title="Recrute" rel="home" style={{ textDecoration: 'none' }}>
        <div style={styles.container}>
            <div style={styles.logoText}>
                LE RECRUT<span style={styles.highlight}>E</span>UR
            </div>
            <div style={styles.subtitle}>
                L’ART DE RECRUTER<br/>BY EHC GROUPE
            </div>
        </div>
    </a>
);

export default Logo;
