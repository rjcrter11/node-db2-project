exports.seed = async function(knex) {
  const testData = [
    {
      make: "Honda",
      model: "civic",
      mileage: 58000,
      transmission: "automatic",
      status: "salvage"
    },
    {
      make: "Toyota",
      model: "corolla",
      mileage: 46000,
      transmission: "automatic",
      status: "clean"
    },
    {
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
