/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema
    .createTable("courses", function (table) {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("classes", function (table) {
      table.increments("id");
      table.string("name").notNullable();
      table.integer("course_id").unsigned().notNullable();

      table
        .foreign("course_id")
        .references("id")
        .inTable("courses")
        .onDelete("cascade");
    })
    .createTable("subjects", function (table) {
      table.increments("id");
      table.string("name").notNullable();
      table.integer("class_id").unsigned().notNullable();

      table
        .foreign("class_id")
        .references("id")
        .inTable("classes")
        .onDelete("cascade");
    });
};

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("subjects")
    .dropTable("classes")
    .dropTable("courses");
};
