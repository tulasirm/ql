import React from "react";
//= Components
//import Image from './Details/Image';
import Content from './Details/Content';
//import Pagination from './Details/Pagination';
//import CommentsArea from './Details/CommentsArea';
import ApplyForJob from './Details/jobapplication';

const JobDetails = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post pt-5">
              {/* <Image /> */}
              <Content />
              {/* <Pagination />
              <CommentsArea /> */}
              <ApplyForJob theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
