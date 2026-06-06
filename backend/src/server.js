import fs from "fs";

if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "frontend/dist");

  console.log("DIST PATH:", distPath);
  console.log(
    "INDEX EXISTS:",
    fs.existsSync(path.join(distPath, "index.html")),
  );

  app.use(express.static(distPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}
