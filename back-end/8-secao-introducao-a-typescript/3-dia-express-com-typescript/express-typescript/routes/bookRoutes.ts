import { Router } from 'express';

import BooksController from '../controllers/bookController';

const router = Router();

const booksSlashId = '/books/:id';

const booksController = new BooksController();

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books', booksController.create);
router.put(booksSlashId, booksController.update);
router.delete(booksSlashId, booksController.remove);
router.patch(booksSlashId, booksController.patch);

export default router;