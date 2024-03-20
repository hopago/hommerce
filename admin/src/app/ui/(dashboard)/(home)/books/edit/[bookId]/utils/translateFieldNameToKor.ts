import { BookDetailsField } from "../_components/BookDetailsEdit";

const fieldNameObject: Record<BookDetailsField, string> = {
  awards: "수상내역",
  intro: "책 소개",
  contentList: "목차",
  bookInside: "책 속으로",
  bookPublisherReview: "출판사 서평",
};

export function translateFieldNameToKor(fieldName: BookDetailsField) {
  return fieldNameObject[fieldName];
}
