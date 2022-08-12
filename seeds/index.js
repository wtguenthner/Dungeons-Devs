import sequelize from "../config/connection.js";
import seedClasses from "./classSeeds.js";

// Seed all databases, easy to add any seeded users or characters with this framework
(async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedClasses();
  console.log("\n----- CLASSES SEEDED -----\n");

  process.exit(0);
})();