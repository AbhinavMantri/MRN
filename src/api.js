import axios from 'axios';

export const fetchContest = contestId => {
   return axios.get(`/api/contest/${contestId}`)
            .then(resp => resp.data );
};

export const fetchContestList = () => {
    return axios.get(`/api/contests`)
             .then(resp => resp.data );
};

export const fetchNames = nameIds => {
    if(nameIds.length == 0) {
        return;
    }
    
    return axios.get(`/api/names/${nameIds.join(',')}`)
             .then(resp => resp.data.names );
};

export const addName = (newName, contestId) => {
    return axios.post(`/api/names`, { newName, contestId })
                .then(res => res.data );
};