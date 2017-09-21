import React from 'react';

class ContestPreview extends React.Component {
    render() {
        return (
            <div className="ContestPreview">
                <div className="category-name">
                    {this.props.contest.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contest.contestName}
                </div>
            </div>    
        );
    }
};

export default ContestPreview;