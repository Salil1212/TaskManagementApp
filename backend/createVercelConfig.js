const fs = require("fs");

const vercelConfig = {
  version: 2,
  builds: [{ src: "backend/script.js", use: "@vercel/node" }],
  routes: [
    {
      src: "/api/(.*)",
      dest: "backend/script.js",
    },
  ],
};

fs.writeFile("vercel.json", JSON.stringify(vercelConfig, null, 2), (err) => {
  if (err) throw err;
  console.log("vercel.json has been created!");
});
