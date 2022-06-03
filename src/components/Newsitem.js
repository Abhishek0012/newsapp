import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, time,source } = this.props;
    return (
      <div>
        <div className="card my-3">
          <img src={imageUrl ? imageUrl : "/"} className="card-img-top" alt="..." />
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex : 1 }}>
            {this.props.source}
          </span>
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 35) : ""}...</h5>
            <p className="card-text">{description ? description.slice(0, 75) : ""}...</p>
            <a href={newsUrl ? newsUrl : "/"} className="btn btn-sm btn-dark">Read more</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">By {this.props.author ? this.props.author : "Unknown"}</small>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
