import express from "express";
import path from "path";

const port = process.env.PORT || 5000;
const app = express();

export default async function startServer() {
  // Serve static files from the 'build' directory (adjust path if build is in client/build)
  app.use(express.static(path.join(import.meta.dirname, "../build")));

  // Serve the React application for all requests
  app.get("*", (req, res) => {
    console.log("Getting App Ready");
    res.sendFile(path.join(import.meta.dirname, "../build", "index.html"));
  });

  // Asynchronous function to start the server with promise-based error handling
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server is running on port localhost:${port}`);
      resolve(server); // Resolve with the server instance for potential further use
    });

    // Handle listening errors (e.g., port in use)
    server.on("error", (err) => {
      console.error(`Server startup error: ${err.message}`);
      reject(err); // Reject the promise on error
    });
  });
}
