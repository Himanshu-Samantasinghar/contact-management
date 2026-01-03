const router = require("express").Router();
const Contact = require("../models/Contact");

// Get all contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Add contact
router.post("/", async (req, res) => {
  const newContact = new Contact(req.body);
  const saved = await newContact.save();
  res.json(saved);
});

// Delete contact
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
});

module.exports = router;
