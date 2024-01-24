const express = require('express')
const router = express.Router();
const Users = require('../model/user')


router.get('/', (req, res) => {
    Users.find({}, (err, data) => {
        if (err) return res.send({error: 'Error captured while trying to get users.'});
        return res.send(data);
    });
});


router.post('/create', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.send({ error: 'Cannot create user: Invalid Data Entered' });
    }
  
    try {
      const existingUser = await Users.findOne({ email });
  
      if (existingUser) {
        return res.send({ error: 'User already registered' });
      }
  
      const newUser = await Users.create(req.body);
      newUser.password = undefined;
      return res.send(newUser);

    } catch (error) {
      return res.send({ error: 'Error trying to create user.' });
    }
  });


module.exports = router;