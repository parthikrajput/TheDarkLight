import React from "react";
import Link from "next/link";

function Pagination() {
  return (
    <div className="pagination">
      <span>
        <a href="Javascript:viod(0);">Prev Post</a>
      </span>
      {/* <span className="icon">
        <Link href="/blog/blog-dark">
          <i className="fas fa-th-large"></i>
        </Link>
      </span> */}
      <span className="text-right">
        <a href="Javascript:viod(0);">Next Post</a>
      </span>
    </div>
  );
}

export default Pagination;
