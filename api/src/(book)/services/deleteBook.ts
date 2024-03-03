import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";
import BookDetails from "../(details)/models/detail";
import { handleDatabaseOperation } from "../../utils/db-operation";

export const handleDeleteBook = async (req: Request, next: NextFunction) => {
  const { bookId } = req.params;
  if (!bookId) throw new HttpException(400, "Book id required.");

  let deletedBookId: string | null = null;

  const deletedBook = await handleDatabaseOperation(
    Book.findByIdAndDelete(bookId),
    next
  );
  if (!deletedBook) throw new HttpException(404, "Book not found.");

  deletedBookId = deletedBook._id;

  await handleDatabaseOperation(
    BookDetails.findOneAndDelete({ bookId: bookId }),
    next
  );

  return deletedBookId;
};
