import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Wait from './Wait';

export class News extends Component {
  article = [
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": null,
      "title": "Four people killed in mass shooting at Tulsa hospital; gunman also dead - CBS News",
      "description": "The shooter died of an apparent self-inflicted gunshot wound, police said. One witness said, \"I just really couldn't believe it was happening in my own neck of the woods.\"",
      "url": "https://www.cbsnews.com/news/tulsa-shooting-saint-francis-hospital/",
      "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2022/06/02/611cb932-c840-43b0-869c-af56fd30fc23/thumbnail/1200x630/c4295185f1aa2813584fdfc273a96fa6/tulsa-shooting-2022-06-02t002310z.jpg",
      "publishedAt": "2022-06-02T06:32:00Z",
      "content": "Four people were killed in a shooting Wednesday evening in a medical building on a hospital campus in Tulsa, Oklahoma, police said. The gunman is also dead, of an apparent self-inflicted gunshot woun… [+3467 chars]"
    },
    {
      "source": {
        "id": "independent",
        "name": "Independent"
      },
      "author": "Gustaf Kilander",
      "title": "Johnny Depp’s star lawyer Camille Vasquez celebrates verdict: ‘What we have said from the beginning’ - The Independent",
      "description": "Depp legal team celebrated win with a group hug and emerged to cheers",
      "url": "https://www.independent.co.uk/news/world/americas/johnny-depp-verdict-lawyer-camille-vasquez-b2092451.html",
      "urlToImage": "https://static.independent.co.uk/2022/06/01/23/AFP_32BQ2AG.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2022-06-02T05:08:47Z",
      "content": "Johnny Depps star lawyer Camille Vasquez is celebrating victory in a case that has catapulted her to fame. \r\nMs Vasquez, who quickly became a source of internet fascination in the trial, hugged her c… [+3174 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "TooFab"
      },
      "author": "Toofab Staff",
      "title": "Kim Kardashian Admits She Was 'DTF,' Reached Out to Pete Davidson Because of 'BDE' Rumors - TooFab",
      "description": "Kim finally reveals the whole story of how she ended up with the \"Saturday Night Live\" alum after the pair shared an on-screen kiss during her hosting stint.",
      "url": "https://toofab.com/2022/06/01/kim-kardashian-dtf-admits-bde-pete-davidson-rumors-why-she-reached-out/",
      "urlToImage": "https://images.toofab.com/image/8a/16by9/2022/06/02/8a8488c2724a4675a260617d7f481ebd_xl.jpg",
      "publishedAt": "2022-06-02T05:01:00Z",
      "content": "At first, Kim Kardashian was keeping her relationship with Pete Davidson on the downlow even while she was filming the first season of Hulu's new \"The Kardashians\" series. That all changed with this … [+4074 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      loading : false ,
      article: this.article , 
      page : 1 ,
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2022-06-01&to=2022-06-01&sortBy=popularity&apiKey=1ce723ddf42c40ef8b767aaf5511fce9&page=1&pageSize=${this.props.pagecount}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article : parsedData.articles ,
      loading : false 
    })
  }
  handleNext = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1ce723ddf42c40ef8b767aaf5511fce9&page=${this.state.page+1}&pageSize=${this.props.pagecount}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article : parsedData.articles ,
      page : this.state.page + 1 ,
      loading : false 
    })

  }
  handlePrevious = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1ce723ddf42c40ef8b767aaf5511fce9&page=${this.state.page-1}&pageSize=${this.props.pagecount}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article : parsedData.articles ,
      page : this.state.page - 1 ,
      loading : false 
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-center">{`Top headlines for Today`} - News24/7</h2>
        {this.state.loading ? <Wait/> : ""}
        <div className="row my-3">
          {this.state.article.map((element) => {
            return !this.state.loading && <div className="col-md-4 col-sm-12" key={element.url}>
              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button disabled={this.state.page>=1 ? true : false} class="btn btn-dark" type="submit" onClick={this.handlePrevious}>Previous</button>
          <button class="btn btn-dark" type="submit" onClick={this.handleNext}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
