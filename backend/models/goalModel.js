const mongoose = require("mongoose");
const statusValue = require("../shared/status.enum");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    status: {
      type: String,
      required: true,
      enum: [statusValue.IN_PROGRESS, statusValue.DONE],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
