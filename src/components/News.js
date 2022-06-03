import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Wait from './Wait';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      page: 1,
    }
  }
  async update() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2022-06-01&to=2022-06-01&sortBy=popularity&apiKey=1ce723ddf42c40ef8b767aaf5511fce9&page=${this.state.page}&pageSize=${this.props.pagecount}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      loading: false
    })
  }
  async componentDidMount() {
    this.update();
  }
  handleNext = async () => {
    this.setState({
      page: this.state.page + 1
    })
    this.update();

  }
  handlePrevious = async () => {
    this.setState({
      page: this.state.page - 1
    })
    this.update();
  }
  render() {
    return (
      this.state.article &&
      <div className='container my-3'>
        <h2 className="text-center">{`Top headlines for Today`} - News24/7</h2>
        {this.state.loading ? <Wait /> : ""}
        <div className="row my-3">
          {this.state.article.map((element) => {
            return !this.state.loading && <div className="col-md-4 col-sm-12" key={element.url}>
              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button disabled={this.state.page >= 1 ? true : false} class="btn btn-dark" type="submit" onClick={this.handlePrevious}>Previous</button>
          <button class="btn btn-dark" type="submit" onClick={this.handleNext}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
