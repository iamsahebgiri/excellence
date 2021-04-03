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
    })
    .createTable("user", function (table) {
      table.increments("id");
      table.string("email", 254).notNullable().unique();
      table.string("name").notNullable();
      table.string("password", 127).notNullable();
      table.datetime("last_login");
      table.timestamps(true, true);
      table.datetime("deleted_at");
    })
    .createTable("question", function (table) {
      table.increments("id");
      table.text("question_text").notNullable();
      table.enu("question_type", ["mcq", "subjective", "c", "d", "e"]);
      table.text("solution");
      table.string("option_a");
      table.string("option_b");
      table.string("option_c");
      table.string("option_d");
      table.string("option_e");

      table.enu("correct_option", ["a", "b", "c", "d", "e"]);
      table.integer("right_mark").notNullable();
      table.integer("wrong_mark");

      table.enu("difficulty_level", [
        "beginner",
        "easy",
        "normal",
        "hard",
        "very hard",
      ]);

      table
        .integer("subject_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("subject")
        .onDelete("cascade");
      table
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("class")
        .onDelete("cascade");
      table
        .integer("user_created")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("cascade");

      table.table.timestamps(true, true);
    });
};

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("question")
    .dropTable("subject")
    .dropTable("class")
    .dropTable("course")
    .dropTable("user");
};
