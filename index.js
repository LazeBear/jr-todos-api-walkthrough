app.get('/tasks', (req, res) => {
  const { description } = req.query;
  if (description) {
    const filtered = tasks.filter((i) => i.description.includes(description));
    return res.json(filtered);
  }
  return res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).send('missing description');
  }
  const task = { description, id: id++, done: false };
  tasks.push(task);
  return res.status(201).json(task);
});

app.get('/tasks/:id', parseId, (req, res) => {
  const { id } = req.params;
  const task = tasks.find((i) => i.id === id);
  if (!task) {
    return res.sendStatus(404);
  }
  return res.json(task);
});

app.put('/tasks/:id', parseId, (req, res) => {
  const { id } = req.params;
  const { done, description } = req.body;
  const task = tasks.find((i) => i.id === id);
  if (!task) {
    return res.sendStatus(404);
  }
  if (done !== undefined) {
    task.done = !!done;
  }
  if (description) {
    task.description = description;
  }
  return res.json(task);
});

app.delete('/tasks/:id', parseId, (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((i) => i.id === id);
  if (taskIndex === -1) {
    return res.sendStatus(404);
  }
  tasks.splice(taskIndex, 1);
  return res.sendStatus(204);
});
