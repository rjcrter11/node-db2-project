exports.up = function(knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("VIN");

    tbl.string("make", 200).notNullable();

    tbl.string("model", 200).notNullable();

    tbl.integer("mileage").notNullable();

    tbl.string("transmission", 200);

    tbl.string("status", 200);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
