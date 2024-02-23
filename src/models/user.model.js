import BaseModel from './base.model.js';

class UserModel extends BaseModel {
  constructor(knex) {
    super(knex,'users', ['name', 'email', 'password', 'image']);

    this.filePath = 'public/uploads/users'
  }

}

export default UserModel;

