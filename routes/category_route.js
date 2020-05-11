const express = require("express");
const router = express.Router();
const pool = require("../config");


router.get("/category", (req, res) => {
  console.log(pool);
  pool
    .query("SELECT * FROM category;")
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
});

/*

router.post("/", (req, res) => {
  const { name, description } = req.body;
  pool
    .query(
      "INSERT INTO measurement_unit (name, description) VALUES ($1, $2);",
      [name, description]
    )
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
});

router.put("/:id", (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  console.log(name);
  pool
    .query("UPDATE measurement_unit SET name=$1, description=$2 WHERE id=$3;", [
      name,
      description,
      id,
    ])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("DELETE FROM measurement_unit WHERE id=$1;", [id])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
});
*/
module.exports = router;
