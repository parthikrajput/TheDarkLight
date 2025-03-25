import React from "react";

function Content({ title, contents, author, tags }) {
  return (
    <div className="content pt-60">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="cont">
            <h4 className="extra-title">{title}</h4>

            {contents.map((section, index) => (
              <div key={index}>
                {section.paragraph && (
                  <div className="spacial">
                    <p>{section.paragraph}</p>
                  </div>
                )}

                {section.subheading && <h6>{section.subheading}</h6>}

                {section.list && (
                  <ul>
                    {section.list.map((item, idx) => (
                      <li key={idx}>
                        <span>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <div className="quotes text-center">
                    <p>{section.quote}</p>
                  </div>
                )}

                {section.images && (
                  <div className="row">
                    {section.images.map((imgSrc, imgIdx) => (
                      <div className="col-md-6" key={imgIdx}>
                        <div className="mb-10">
                          <img src={imgSrc} alt="Blog image" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="share-info">
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
              <div className="tags">
                <a href="javascript:viod(0)">{tags}</a>
              </div>
            </div>
          </div>

          {/* Author Section */}
          {author && (
            <div className="author">
              <div className="author-img">
                <img src={author.image} alt={author.name} />
              </div>
              <div className="info">
                <h6>
                  <span>Author:</span> {author.name}
                </h6>
                <p>{author.bio}</p>
                <div className="social">
                  {author.social.map((platform, index) => (
                    <a key={index} href="#0">
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
