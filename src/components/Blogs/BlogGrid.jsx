import React from "react";
import Link from "next/link";
import Image from "next/image";
//= Static Data
import blogs from "@/data/blogs3.json";


const BlogGrid = ({ page = 1 }) => {
  const blogsPerPage = 3;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const currentPage = parseInt(page) || 1;
  const startIdx = (currentPage - 1) * blogsPerPage;
  const endIdx = startIdx + blogsPerPage;
  const paginatedBlogs = blogs.slice(startIdx, endIdx);

  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {paginatedBlogs.map((blogItem) => (
              <div className="col-lg-4" key={blogItem.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                    <Image src={blogItem.image} alt={blogItem.title} width={600} height={400} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
                  </div>
                  <div className="cont">
                    <div>
                      <div className="info">
                        <Link href={`/blog/${blogItem.id}`} className="date">
                          <span>
                            <i>{blogItem.date.day}</i>
                            {blogItem.date.month}
                          </span>
                        </Link>
                        <span>/</span>
                        {blogItem.tags.map((tag, index) => (
                          <Link key={index} href={`/blog/${blogItem.id}`} className="tag">
                            <span>{tag}</span>
                          </Link>
                        ))}
                      </div>
                      <h5>
                        <Link href={`/blog/${blogItem.id}`}>
                          {blogItem.title.substr(0, 55) + "..."}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link href={`/blog/${blogItem.id}`} className="simple-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <span key={i} className={currentPage === i + 1 ? 'active' : ''}>
                  <Link href={i === 0 ? `/insights` : `/insights/${i + 1}`}>{i + 1}</Link>
                </span>
              ))}
              {currentPage < totalPages && (
                <span>
                  <Link href={`/insights/${currentPage + 1}`}>
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
