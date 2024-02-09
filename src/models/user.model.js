import BaseModel from './base.model.js';

class UserModel extends BaseModel {
  constructor(knex) {
    super(knex,'users', ['name', 'email', 'password']);
  }

}

export default UserModel;

