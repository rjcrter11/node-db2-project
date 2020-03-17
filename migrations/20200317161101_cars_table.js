exports.up = function(knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();

    tbl
      .integer("VIN")
      .notNullable()
      .unique();

    tbl.string("make", 225).notNullable();

    tbl.string("model", 225).notNullable();

    tbl.integer("mileage").notNullable();

    tbl.string("transmission", 225);
    tbl.string("status", 225);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
