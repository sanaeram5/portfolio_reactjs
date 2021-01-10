import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'https://www.google.com/search?q=projects&client=ms-android-oppo-rvo3&prmd=niv&sxsrf=ALeKk01OhgbrT8xuCDmVGaoZ49MctVx05Q:1610258841542&source=lnms&sa=X&ved=0ahUKEwiAg_zR2ZDuAhWezTgGHRCtB4cQ_AUIFCgA&biw=360&bih=664&dpr=3#imgrc=5MBac2hPlAZD-M';
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
