import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    function handleClick(link){
      window.open(link);
    }
    
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project) {
        return (
          <div>
             <h2>{project.title}</h2>
             <a href={project.link} target="_blank">Link</a>
             <p>{project.info}</p>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div c
          lassName="twelve columns collapsed">

            <h1>Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{marginLeft:20, marginRight:20}}>
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
