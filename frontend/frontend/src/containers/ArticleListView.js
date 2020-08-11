import React from 'react';
import axios from 'axios';

import Article from '../components/Article';


class ArticleList extends React.Component {
    // here we're specifying the state
    state = {
        // this'll be what we expect to come in from our api
        articles: []
    }

    componentDidMount() {
        // simple get request with axios
        // returns a promise
        axios.get('http://127.0.0.1:8000/diary/api/')
            // in our promise we want to change the state
            .then(response => {
                this.setState({
                    articles: response.data
                });
            })
    }

    render() {
        return (
            <Article data={this.state.articles} />
        )
    }
}

export default ArticleList;