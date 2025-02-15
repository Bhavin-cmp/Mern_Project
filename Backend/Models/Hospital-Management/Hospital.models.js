import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    specializedIn: [
      {
        type: String,
      },
    ],

    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
    ],
    medicalRecords: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
