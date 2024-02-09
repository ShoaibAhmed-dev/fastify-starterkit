
class BaseModel {
  constructor(knex,tableName, fillable = []) {
    this.tableName = tableName;
    this.fillable = fillable;
    this.knex = knex;
  }

  async getAll() {
    return await this.knex(this.tableName).select('*');
  }

  async getById(id) {
    return await this.knex(this.tableName).where({ id }).first();
  }

  async create(data) {
    const insertData = this.pickFillable(data);
    return await this.knex(this.tableName).insert(insertData).returning('*');
  }

  async update(id, data) {
    const updateData = this.pickFillable(data);
    return await this.knex(this.tableName).where({ id }).update(updateData).returning('*');
  }

  async delete(id) {
    return await this.knex(this.tableName).where({ id }).del().returning('*');
  }

  pickFillable(data) {
    const insertData = {};
    for (const key of this.fillable) {
      if (data[key] !== undefined) {
        insertData[key] = data[key];
      }
    }
    return insertData;
  }
}

export default BaseModel;
