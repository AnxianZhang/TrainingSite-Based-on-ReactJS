import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* <img> take src in the public repositori and not in src one !!! 
            so no need to do ../ !!!!*/}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;