class AddressBook {

    constructor(contacts = []){
        this.contacts = contacts;
        this.initialComplete = false;
    };

    getContact(position) {
        return this.contacts[position];
    };

    addContact(contact){
        this.contacts.push(contact);
    };

    deleteContact(position){
        this.contacts.splice(position, 1);
    }

    getInitialContacts(cb) {
        let self = this;

        setTimeout(function(){
            self.initialComplete = true;
            if(cb) {
                return cb();
            }
        }, 3)
    }

}