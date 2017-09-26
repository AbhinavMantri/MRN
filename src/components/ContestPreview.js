import React from 'react';

class ContestPreview extends React.Component {
    handleClick = () => {
       this.props.onClick(this.props.id);
    };
    
    render() {
        return (
            <div className="link ContestPreview" onClick={this.handleClick}>
                <div className="category-name">
                    {this.props.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contestName}
                </div>
            </div>    
        );
    };
};

export default ContestPreview;