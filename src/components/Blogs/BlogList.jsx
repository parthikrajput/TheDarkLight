"use client";
import React, { useState } from "react";
import Link from "next/link";
import blogs from "@/data/blogs2.json";

const BlogList = () => {
  const blogsPerPage = 5; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle pagination click
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {currentBlogs.map((blogItem) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={blogItem.id}
                  data-wow-delay=".3s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src={blogItem.image} alt={blogItem.title} />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <Link
                              href={`/blogs/${blogItem.id}`}
                              className="date"
                            >
                              <span>
                                <i>{blogItem.date.day}</i> {blogItem.date.month}
                              </span>
                            </Link>
                            <span>/</span>
                            {blogItem.tags.map((tag, index) => (
                              <Link key={index} href="#" className="tag">
                                <span>{tag}</span>
                              </Link>
                            ))}
                          </div>
                          <h5>
                            <Link href={`/blogs/${blogItem.id}`}>
                              {blogItem.title}
                            </Link>
                          </h5>
                          <p className="mt-10">
                            {blogItem.content.substring(0, 146)}...
                          </p>
                          <div className="btn-more mt-30">
                            <Link
                              href={`/blogs/${blogItem.id}`}
                              className="simple-btn"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="pagination">
                <span
                  className={`pagination-btn ${
                    currentPage === 1 ? "disabled" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="fas fa-angle-left"></i>
                </span>

                {[...Array(totalPages)].map((_, index) => (
                  <span
                    key={index}
                    className={`pagination-btn ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </span>
                ))}

                {/* Next Page Button */}
                <span
                  className={`pagination-btn ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <i className="fas fa-angle-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
