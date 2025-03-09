import { contactsColection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await contactsColection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await contactsColection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactsColection.create(payload);
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = await contactsColection.findOneAndDelete({ _id: contactId });
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await contactsColection.findByIdAndUpdate(
    {
      _id: contactId,
    },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) return null;
  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
