/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema
    .createTable("course", function (table) {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("class", function (table) {
      table.increments("id");
      table.string("name").notNullable();

      table
        .integer("course_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("course")
        .onDelete("cascade");
    })
    .createTable("subject", function (table) {
      table.increments("id");
      table.string("name").notNullable();

      table
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("class")
        .onDelete("cascade");
    });

  await knex.schema.createTable("user", function (table) {
    table.increments("id");
    table.string("email", 254).notNullable().unique();
    table.string("name").notNullable();
    table.string("password", 127).notNullable();
    table.datetime("last_login");
    table.timestamps(true, true);
    table.datetime("deleted_at");
  });
};

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("subject")
    .dropTable("class")
    .dropTable("course")
    .dropTable("user");
};
