import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <p className="lead">{message}</p>
            <p className="address">
               {city}, {state}<br />
               <span>{phone}</span><br />
               <a href="mailto:ishan423@gmail.com"><span>{email}</span></a>
            </p>
         </div>
   </section>
    );
  }
}

export default Contact;