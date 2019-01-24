class AddressBook {
    constructor(contacts = []){
        this.contacts = contacts;
    }

getContact(position) {
    return this.contacts[position];
}

addContact(contact){
    this.contacts.push(contact);
}
}