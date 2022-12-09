import Router from 'express';

const router = Router();

router.get('/all');

router.post('/:id');
router.get('/:id');
router.patch('/:id');
router.delete('/:id');
router.put('/:id');

export { router };
