import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state = {
          form: {
              firstName: '',
              lastName: '',
              phone: '',
              email: ''
          }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('handleSubmit called', this.state.form)
        this.props.add(this.state.form);
        this.reset();
    }

    handleInputChange(event){
        // console.log('old state:', this.state.form.firstName, this.state.form.lastName)

        const { name, value } = event.target;
        const { form } = this.state;
        form[name] = value;

        // console.log('current state:', this.state.form.firstName, this.state.form.lastName)

        this.setState({
            form: {
                firstName: this.state.form.firstName,
                lastName: this.state.form.lastName,
                phone: this.state.form.phone,
                email: this.state.form.email
            }
        });

        // console.log('new state:', this.state.form.firstName, this.state.form.lastName);
    }

    reset(){
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }

    render(){
        const { firstName, lastName, phone, email } = this.state.form;

        return(
            <form onSubmit={this.handleSubmit}>
                {/*<div className="form-group">*/}
                    {/*<label>First Name:</label>*/}
                    {/*<input type="text" name="firstName" className="form-control" value={firstName} onChange={event => {this.handleInputChange(event)}}/>*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                    {/*<label>Last Name:</label>*/}
                    {/*<input type="text" name="lastName" className="form-control" value={lastName} onChange={event => {this.handleInputChange(event)}} />*/}
                {/*</div>*/}
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>

                <button>Add Contact</button>
                <button type="button" onClick={this.reset}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;