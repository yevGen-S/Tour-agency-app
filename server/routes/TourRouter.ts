import Router from 'express';

const router = Router();

router.post('/:id');
router.get('/');
router.get('/:id');
router.patch('/:id');
router.delete('/:id');
router.put('/:id');

router.get('/best_rated');
router.get('/most_commented');

export { router };
