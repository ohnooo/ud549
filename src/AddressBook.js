

function AddressBook(){
	this.contacts = [];

	// this.addContact = function(contact){
	// 	this.contacts.push(contact);
	// };

	// this.getContact = function(index){
	// 	return this.contacts[index];
	// }
};

AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(index){
	return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index){
	this.contacts.splice(index, 1);
}