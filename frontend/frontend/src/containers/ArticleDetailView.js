import React from 'react';
import axios from 'axios';
import CustomForm from '../components/Form'; 
import { Card } from 'antd';

class ArticleDetail extends  React.Component {

    state = {
        article: ''
    }

    componentDidMount() {
        // grabbing url paramter
        // querying a match of url parameters
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/diary/api/articles/${articleID}`)
            .then( response => {
                this.setState({
                    article: response.data
                });
            })
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm
                    requestType= 'put'
                    articleID= {this.props.match.params.articleID}
                ></CustomForm>
            </div>
        )
    }

}

export default ArticleDetail;