const fs = require("fs-extra");
const path = require("path");

console.log("Start post build");

exports.onPostBuild = () => {
  console.log("Copying locales");
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  );
};
