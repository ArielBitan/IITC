import express from "express";
import Subscriber from "../models/subscriber.js";
const router = express.Router();

// get all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one subscriber
router.get("/:id", getSubscriber, async (req, res) => {
  const id = req.params.id;
  try {
    const subscribers = await Subscriber.find();
    const index = subscribers.findIndex((value) => value.id === id);
    res.json(subscribers[index]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add subscriber data
router.post("/", async (req, res) => {
  console.log(req.body);

  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update specific subscriber data
router.patch("/:id", (req, res) => {});

// delete subscriber
router.delete("/:id", (req, res) => {});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.subscriber = subscriber;
  next();
}

export default router;
