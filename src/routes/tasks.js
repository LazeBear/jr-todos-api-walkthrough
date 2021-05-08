const express = require('express');
const {
  getAllTask,
  getTaskById,
  updateTaskById,
  addTask,
  deleteTaskById
} = require('../controllers/task');
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId');

const router = express.Router();

router.get('', getAllTask);

router.get('/:id', parseId, checkTaskExist, getTaskById);

router.post('', addTask);

router.put('/:id', parseId, checkTaskExist, updateTaskById);

router.delete('/:id', parseId, checkTaskExist, deleteTaskById);

module.exports = router;
