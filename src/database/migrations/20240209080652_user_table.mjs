
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    return knex.schema.createTable('users', (table) => {
    table.bigIncrements('id');
    table.string('name');
    table.string('email').unique();
    table.string('phone').nullable();
    table.string('password');
    table.boolean('is_email_verified').nullable().defaultTo(false);
    table.timestamps(true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    return knex.schema.dropTable('users');
};
