import React from 'react';
import axios from 'axios';

import Article from '../components/Article';
import CustomForm from '../components/Form';


class ArticleList extends React.Component {
    // here we're specifying the state
    state = {
        // this'll be what we expect to come in from our api
        articles: []
    }

    componentDidMount() {
        // simple get request with axios
        // returns a promise
        axios.get('http://127.0.0.1:8000/diary/api/articles/')
            // in our promise we want to change the state
            .then(response => {
                this.setState({
                    articles: response.data
                });
            })
    }

    render() {
        return (
            <div>
                <Article data={this.state.articles} />
                <h1>Add an Article</h1>
                <CustomForm
                    requestType='post'
                    articleID={null}
                ></CustomForm>
            </div>
        )
    }
}

export default ArticleList;