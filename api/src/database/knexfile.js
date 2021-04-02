// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "excellence-db",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "excellence_migrations",
    },
  },
};
