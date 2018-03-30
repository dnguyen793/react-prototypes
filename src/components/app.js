import React, {Component} from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from './data/contacts';


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            contacts: contactData
        };
        this.addContact = this.addContact.bind(this);
    }

    addContact( contact ){
        console.log('contact', contact);
        const copy = this.state.contacts.slice();
        copy.push(contact);

        this.setState({
            contacts: copy
        })
        console.log('new contacts:', this.state.contacts)
    }

    render(){
        return(
            <div className="container">
                <h1 className="text-center my-3">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts = {this.state.contacts}/>
                </div>
            </div>
        );
    }

}

export default App;