const express = require("express");
const router = express.Router();

const {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
} = require("../controller/contactController");

router.route("/")
  .get(getContacts)
  .post(createContact);

router.route('/:id')
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").get(getContact);

// router.route("/:id").delete(deleteContact);

module.exports = router;
