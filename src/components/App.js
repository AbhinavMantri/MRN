import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';


const color = Math.random() > 0.5 ? 'red' : 'blue';

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: []
    };

    componentDidMount() {
        axios.get('/api/contests')
        .then(resp => {
             this.setState({
                contests: resp.data.contests
            });
        })
        .catch(console.error);
        
    };

    render() {
        return (<div>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest => 
                        <ContestPreview key={contest.id} contest={contest} />
                    )}
                    
                </div>
            </div>);
    };
};

export default App;