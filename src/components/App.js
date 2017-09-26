import React from 'react';
import Header from './Header';
import Contest from './Contest';
import ContestList from './ContestList';
import axios from 'axios';


const color = Math.random() > 0.5 ? 'red' : 'blue';

const pushState = (obj, url) =>
    window.history.pushState(obj,'',url);

const contests = (data) =>{
   let contestsObj = data.contests.reduce((obj, contest)=>{
                    obj[contest.id] = contest;
                    return obj;
                 },{});

    return contestsObj;             
}    

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: []
    };

    componentDidMount() {
        axios.get('/api/contests')
        .then(resp => {
             this.setState({
                contests: contests(resp.data)
            });
        })
        .catch(console.error);
        
    };

    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        );

        //Content
        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId: contestId
        })
    };

    currentContent= () => {
        if(this.state.currentContestId) {
            return (<Contest {...this.state.contests[this.state.currentContestId]} />);
        }

        return (<ContestList 
            contests={this.state.contests} 
            onContestClick={this.fetchContest} />);
    }

    render() {
        return (<div>
                <Header message={this.state.pageHeader} />
                {this.currentContent()}
            </div>);
    };
};

export default App;