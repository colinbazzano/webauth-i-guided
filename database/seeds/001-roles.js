exports.seed = function(knex) {
  // Deletes ALL existing entries
  // 000-cleanup already truncated
  return knex("roles").insert([
    { name: "admin" },
    { name: "TLs" },
    { name: "students" }
  ]);
};
