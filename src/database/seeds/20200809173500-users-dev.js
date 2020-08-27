const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuidv4(),
    email: 'raph@gmail.com',
    password: 'raph',
    role: 'admin',
    created_at: now,
    updated_at: now
  }
];
