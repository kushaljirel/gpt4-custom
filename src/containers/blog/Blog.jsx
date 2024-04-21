import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";

const Blog = () => {
  return (
    <div className="gpt4__blog section__padding" id="blog">
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
          <Article
            img={blog01}
            date="Dec 12, 2023"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt4__blog-container_groupB">
          <Article
            img={blog02}
            date="Dec 12, 2023"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog03}
            date="Dec 12, 2023"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog04}
            date="Dec 12, 2023"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog05}
            date="Dec 12, 2023"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
