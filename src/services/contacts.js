import { contactsColection } from "../db/models/contacts";


export const getAllContacts = async () => {
    const contacts = await contactsColection.find()
    return contacts;

}


export const getContactById = async (contactId) => {
    const contact = await contactsColection.findById(contactId)
    return contact;
}
