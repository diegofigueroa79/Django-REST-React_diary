import React from 'react';
import axios from 'axios';

import Article from '../components/Article';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


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