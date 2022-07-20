const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  addToFlight
}

function newTicket(req, res) {
  Ticket.find({})
  .sort("seat")
  .exec(function (err, tickets) {
    res.render("tickets/new", {
      title: "Add Tickets",
      tickets
    });
  });
}

function addToFlight(req, res) {
  console.log("addToFlight");
}