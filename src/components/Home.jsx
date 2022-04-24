import React from "react";

const Home = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav-lg">
          <div className="row">
            {/* style in this below div means we will only use 10 column out of 12 and show it in middle using mx-auto  */}
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Grow your business with <strong className="brand-name">Saran Pariyar</strong>
                </h1>
                <h2 className="my-3">
                  We can make best website for you with our talented developer
                  team.
                </h2>
                <div className="mt-3">
                  <h1  className="btn btn-primary">Get Started</h1>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  );
};

export default Home;
