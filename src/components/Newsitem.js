import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props ;
    return (
      <div>
        <div className="card">
          <img src={imageUrl ? imageUrl : "/"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title ? title.slice(0,35) : ""}...</h5>
              <p className="card-text">{description?description.slice(0,75):""}...</p>
              <a href={newsUrl ? newsUrl :"/"} className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
