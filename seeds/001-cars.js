exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, colName: "rowValue1" },
        { id: 2, colName: "rowValue2" },
        { id: 3, colName: "rowValue3" }
      ]);
    });
};
exports.seed = async function(knex) {
  const testData = [
    {
      VIN: 19284502,
      make: "Honda",
      model: "civic",
      mileage: 58000,
      transmission: "automatic",
      status: "salvage"
    },
    {
      VIN: 192845345,
      make: "Toyota",
      model: "corolla",
      mileage: 46000,
      transmission: "automatic",
      status: "clean"
    },
    {
      VIN: 1987684502,
      make: "Hyundai",
      model: "accent",
      mileage: 22000,
      transmission: "automatic",
      status: "clean"
    }
  ];

  // Deletes ALL existing entries
  await knex("cars").truncate();

  // Inserts seed entries
  return knex("cars").insert(testData);
};
