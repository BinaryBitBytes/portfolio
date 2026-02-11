import startServer from "./server/server.js";

// Top-level await for server startup, enabled in ESM contexts
(async () => {
  try {
    await startServer();
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1); // Terminate with non-zero exit code on failure
  }
})();
