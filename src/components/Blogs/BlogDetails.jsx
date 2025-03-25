import React from "react";
//= Components
import Content from "./Details/Content";
import Pagination from "./Details/Pagination";
import CommentsArea from "./Details/CommentsArea";
import CommentsForm from "./Details/CommentsForm";

const BlogDetails = ({ theme, blog, img, title }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <img src={img} alt={title} />
              <Content
                title={blog.title}
                contents={blog.contents}
                author={blog.author}
                tags={blog.tags}
              />
              {/* <Pagination /> */}
              {/* <CommentsArea /> */}
              {/* <CommentsForm theme={theme} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
