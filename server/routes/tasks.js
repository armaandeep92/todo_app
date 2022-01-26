const Tasks = require("../models/tasks");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const tasks = await new Tasks(req.body).save();
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tasks = await Tasks.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tasks = await Tasks.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
});

module.exports = router;
