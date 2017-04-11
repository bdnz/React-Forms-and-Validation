import React from 'react';
import ReactDOM from 'react-dom';
//import Form from 'react-form';

var AlertBox =  React.createClass({

  render: function(){

    return(

      //{this -> props.children}

      <div className={this.props.type}>
        {this.props.children}

      </div>
    );
  }
});

var Forms = React.createClass({

  getInitialState: function(){

    return {showAlert: false}

  },

  register: function(i){

    i.preventDefault(/*phonenumber,email,name,lastName*/);

    var firstName = this.refs.firstName.value();
    var lastName = this.refs.lastName.value();
    var phonenumber = this.refs.phonenumber.value();
    var email = this.refs.email.value();
  
    
    if ( !firstName || !lastName || !phonenumber || !email) {
      this.setState({showAlert: true});
      return;
    }
    
    alert(firstName + lastName + phonenumber + email + " Validatation works :)");
    
    this.refs.firstName.value = '';
    this.refs.lastName.value = '';
    this.refs.phonenumber.value = '';
    this.refs.email.value = '';
   
    
  },
  
  render: function(){
    return(

      <div>

        <form onSubmit={this.register}>

          {this.state.showAlert ? 

          <AlertBox type="danger">You are missing your name!</AlertBox> : null}

          <div>
            <label htmlFor="firstName">First Name: (Must Be Letters) </label>
            <input type="text" placeholder="Ex: Deniz" ref="firstName" pattern="[A-Za-z]+" required />
          </div>

          <div>
            <label htmlFor="lastName">Last Name(Must Be Letters): </label>
            <input type="text" placeholder="Ex: Burak" ref="lastName" pattern="[A-Za-z]+" required/>
          </div>

          <div>
            <label htmlFor="phonenumber">Phone Number: (Optional) </label>
            <input type="tel" placeholder="Ex: 801-123-1234" pattern="^\d{3}-\d{3}-\d{4}$" />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="Ex: burakdeniz@mail.weber.edu" ref="email" required />
          </div>
          

          <input type="submit" value="Check Validate" />
        </form>
      </div>
      
    );
  }
}
);

ReactDOM.render(<Forms />, document.getElementById("Forms"));
            