import React from 'react'
import "./article.css"

const Article = ({ img, date, title }) => {
  return (
    <div className="gpt4__blog-container_article">

      <div className="gpt4__blog-container_article-image">
        <img src={img} alt="blog" />

      </div>
      <div className="gpt4__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read more</p>
      </div>
    </div>
  )
}

export default Article