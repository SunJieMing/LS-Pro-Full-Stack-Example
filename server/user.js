const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: 'string',
    required: true,
  },
  firstName: 'string',
  lastName: 'string',
});

module.exports = mongoose.model('User', UserSchema);
