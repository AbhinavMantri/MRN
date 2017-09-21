import React from 'react';

const Header = ({message}) => {
    return (
        <h2 className="text-center">
            {message}
        </h2>
    );
};

Header.propTypes = {
    headerMessage: React.PropTypes.string
};

export default Header;