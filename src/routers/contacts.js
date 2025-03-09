import { Router } from 'express';

import {
  getContactByIdController,
  getContactsController,
  createContactsControoler,
  deleteContactController,
  upsterContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactsControoler));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.put('/contacts/:contactId', ctrlWrapper(upsterContactController));

router.patch('contacts/:contactId', ctrlWrapper(patchContactController));

export default router;
