const core = require("@actions/core");
const awsExports = require("./aws-exports");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const awsExportsFile = JSON.stringify(awsExports);
    console.log(`AWS Exports: ${awsExportsFile}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
