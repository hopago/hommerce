import { Schema, model, Document } from "mongoose";

// TODO: req.body -> formData || json.stringify(data)

interface IDetails extends Document {
  bookId: string;
  awards: string[];
  intro: string;
  contentsList: string;
  bookInside: string;
  bookPublisherReview: string;
}

const bookDetailSchema = new Schema(
  {
    bookId: {
      type: String,
      require: true,
    },
    awards: {
      type: [String],
      require: true,
    },
    intro: {
      type: String,
      require: true,
    },
    contentsList: {
      type: String,
      require: true,
    },
    bookInside: {
      type: String,
      require: true,
    },
    bookPublisherReview: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const BookDetails = model<IDetails>("BookDetails", bookDetailSchema);

export default BookDetails;
