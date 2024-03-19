import styles from "./book-info-edit.module.css";

import Input from "../../../../_components/Input";
import Label from "../../../../_components/Label";
import Textarea from "../../../../_components/Textarea";

import { cn } from "@/app/ui/lib/utils";

type InputsProps = {
  book: Partial<IBook>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function Inputs({ book, handleChange }: InputsProps) {
  const hasEbook = book.sellType?.includes("eBook");

  return (
    <>
      <div className={styles.inputWrap}>
        <Label text="제목" />
        <Input
          type="text"
          name="title"
          onChange={handleChange}
          value={book.title!}
          placeholder="제목 수정하기"
          required={true}
        />
      </div>
      <div className={styles.inputWrap}>
        <Label text="작가" />
        <Input
          type="text"
          name="author"
          onChange={handleChange}
          value={book.author!}
          placeholder="작가 수정하기"
          required={true}
        />
      </div>
      <div className={styles.inputWrap}>
        <Label text="출판사" />
        <Input
          type="text"
          name="publisher"
          onChange={handleChange}
          value={book.publisher!}
          placeholder="출판사 수정하기"
          required={true}
        />
      </div>
      <div className={styles.inputWrap}>
        <Label text="설명" />
        <Textarea
          name="desc"
          onChange={handleChange}
          value={book.desc!}
          placeholder="설명 수정하기"
          required={true}
        />
      </div>
      <div className={styles.inputWrap}>
        <Label text="코멘트" />
        <Input
          type="text"
          name="comment"
          onChange={handleChange}
          value={book.comment!}
          placeholder="코멘트 수정하기"
        />
      </div>
      <div className={styles.inputWrap}>
        <Label text="값" />
        <Input
          type="number"
          name="price"
          onChange={handleChange}
          value={book.price!}
          placeholder="값"
          required={true}
        />
      </div>
      <div className={styles.inputWrap}>
        <Label text="할인율" />
        <Input
          type="number"
          name="discount"
          onChange={handleChange}
          value={book.discount!}
          placeholder="할인율 수정하기, 예시: 17, 25..."
        />
      </div>
      <div className={cn(styles.inputWrap, styles.lastInputWrap)}>
        <Label text="전자책 가격" />
        <Input
          type="number"
          name="eBookPrice"
          onChange={handleChange}
          value={book.eBookPrice!}
          placeholder="전자책 가격 수정하기"
          disabled={!hasEbook}
        />
      </div>
    </>
  );
}
