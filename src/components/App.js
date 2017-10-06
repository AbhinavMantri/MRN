import React from 'react';
import Header from './Header';
import Contest from './Contest';
import ContestList from './ContestList';
import * as api from '../api';
import axios from 'axios';


const color = Math.random() > 0.5 ? 'red' : 'blue';

const pushState = (obj, url) =>
    window.history.pushState(obj,'',url);

// const contests = (data) =>{
//    let contestsObj = data.contests.reduce((obj, contest)=>{
//                     obj[contest.id] = contest;
//                     return obj;
//                  },{});

//     return contestsObj;             
// };

const onPopState = handler => {
    window.onpopstate = handler;
};

class App extends React.Component {
    state = {
        contests: []
    };

    componentWillMount() {
        onPopState((event)=>{
            this.setState({
                currentContestId: (event.state || {}).currentContestId
            });
        });
    };

    componentDidMount() {
        axios.get('/api/contests')
        .then(resp => {
             this.setState({
                contests: resp.data
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
        api.fetchContest(contestId)
        .then(contest => {
            this.setState({
                currentContestId: contestId,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest 
                }
            });
        });
        
    };

    fetchContestList = () => {
        pushState(
            {currentContestId: null},
            `/`
        );

        //Content
        api.fetchContestList()
        .then(contests => {
            this.setState({
                currentContestId: null,
                contests: contests
            });
        });
        
    };

    fetchNames =(nameIds) => {
        api.fetchNames(nameIds).then(names => {
            this.setState({
                names
            });
        });
    };
    lookupName = (nameId) => {
        if(!this.state.names || !this.state.names[nameId]) {
            return {
                name: '...'
            };
        }

        return this.state.names[nameId];
    };
    
    currentContest = () => {
        return this.state.contests[this.state.currentContestId];
    };

    pageHeader =() => {
        if(this.state.currentContestId)
            return this.currentContest().contestName;

        return 'Naming Contests';    
    }; 

    currentContent= () => {
        if(this.state.currentContestId) {
            return (<Contest fetchNames={this.fetchNames} 
                             lookupName={this.lookupName}
                             onContestLinkClick={this.fetchContestList} {...this.currentContest()} />);
        }

        return (<ContestList 
            contests={this.state.contests} 
            onContestClick={this.fetchContest} />);
    }

    render() {
        return (<div>
                <Header message={this.pageHeader()} />
                {this.currentContent()}
            </div>);
    };
};

export default App;