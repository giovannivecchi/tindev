const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    bio: String, //Opcional
    avatar: {
      type: String,
      required: true
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'dev',
    }],
    dislikes: [{
      type: Schema.Types.ObjectId,
      ref: 'dev',
    }],
  },
  {
    timestamps: true
  }
);

module.exports = model("Dev", DevSchema);
