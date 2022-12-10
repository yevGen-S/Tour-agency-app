import Router from 'express';

const router = Router();

router.post('/:id');
router.get('/');
router.get('/:id');

router.patch('/:id');
router.delete('/:id');
router.put('/:id');

export { router };
