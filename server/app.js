
import Server from "./Server";

/**
 * Define Application start
 * @returns {Promise<void>}
 */
const start = async () => {
  try {
    // Initialize the server
    await Server.init();
  } catch (err) {
    console.log(`Error inside app start: ${err.message}`);
    throw err;
    process.exit(1);
  }
};

// Start the server
start();
