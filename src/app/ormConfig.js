module.exports = {
  "type": "postgres",
  "url": "postgres://postgres:dev@postgres:5432/postgres",
  "synchronize": false,
  "logging": false,
  "entities": ["src/app/**/*.model.ts"],
  "migrations": ["src/app/migration/*.ts"],
  "cli": {
    "migrationsDir": "migration"
  }
};
