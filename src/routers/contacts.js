import { Router } from 'express';

import {
  getContactByIdController,
  getContactsController,
  createContactsController,
  deleteContactController,
  upsterContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactsController),
);

router.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

router.put(
  '/contacts/:contactId',
  isValidId,
  validateBody(createContactSchema),
  ctrlWrapper(upsterContactController),
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default router;
