import React, {Component} from 'react';
import ContactCard from './contact_card';

class ContactList extends Component{
    // constructor ( props ){
    //     super (props);
    //     this.state = {
    //         contacts: contactData
    //     }
    // }

    render(){
        const list = this.props.contacts.map(( item, index ) => {
            // console.log('item:', item, 'index:', index);
            return <ContactCard key={index} contact = {item} />
        });
        // console.log('data: ', this.props.contacts);
       return(
            <div className="col-8">
                <div className="row">{ list }</div>
            </div>
       )
    }
}

export default ContactList;