import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;

      var education = (this.props.data.education && Array.isArray(this.props.data.education)) ? this.props.data.education.map(function(education){
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">{education.degree} <span>&bull;</span><em className="info">{education.graduated}</em></p>
            <p>{education.description}</p>
          </div>
        );
      }) : null;

      var work = (this.props.data.work && Array.isArray(this.props.data.work)) ? this.props.data.work.map(function(work){
        // Normalize description to array, filter out empty strings and guard against undefined/null
        const descriptions = work.description
          ? (Array.isArray(work.description)
              ? work.description.filter(item => item && item.toString().trim())
              : (typeof work.description === 'string' && work.description.trim() ? [work.description.trim()] : []))
          : [];
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="info">{work.years}</em></p>
            {descriptions.length > 0 && (
              <ul className="work-description">
                {descriptions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      }) : null;

      var skills = (this.props.data.skills && Array.isArray(this.props.data.skills)) ? this.props.data.skills.map(function(skills){
        return <div key={skills.name}>
            <p className="info"><b>{skills.name}</b></p>
            <p>{skills.description}</p>
        </div>
      }) : null;
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>EXPERIENCE</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
