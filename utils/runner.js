import path from "path";
import { fileURLToPath } from "url";

// Change ONLY this file name when practicing
const CURRENT_PROBLEM = "../Objects&Arrays/Arrays&Objects.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const modulePath = path.join(__dirname, CURRENT_PROBLEM);
  const problem = await import(modulePath);

  if (!problem.solve) {
    console.error("❌ Missing `solve` function export.");
    process.exit(1);
  }

  console.log("Running:", CURRENT_PROBLEM);
  console.log("Output:", problem.solve());
}

run();
