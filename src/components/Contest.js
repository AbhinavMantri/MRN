import React from 'react';

class Contest extends React.Component {
    render() {
       return(
        <div className="Contest">
            {this.props.id}
        </div>
       );      
    };
};

export default Contest;