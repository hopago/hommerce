import Input from "../../../../_components/Input";
import Label from "../../../../_components/Label";
import Textarea from "../../../../_components/Textarea";

type InputsProps = {
  book: Partial<IBook>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function Inputs({ book, handleChange }: InputsProps) {
  return (
    <>
      <Label text="제목" />
      <Input
        type="text"
        onChange={handleChange}
        value={book.title!}
        placeholder="제목 수정하기"
        required={true}
      />
      <Label text="작가" />
      <Input
        type="text"
        onChange={handleChange}
        value={book.author!}
        placeholder="작가 수정하기"
        required={true}
      />
      <Label text="출판사" />
      <Input
        type="text"
        onChange={handleChange}
        value={book.publisher!}
        placeholder="출판사 수정하기"
        required={true}
      />
      <Label text="설명 수정하기" />
      <Textarea
        onChange={handleChange}
        value={book.desc!}
        placeholder="설명 수정하기"
        required={true}
      />
      <Label text="코멘트 수정하기" />
      <Input
        type="text"
        onChange={handleChange}
        value={book.comment!}
        placeholder="코멘트 수정하기"
        required={true}
      />
      <Label text="값 수정하기" />
      <Input
        type="number"
        onChange={handleChange}
        value={book.price!}
        placeholder="값 수정하기"
        required={true}
      />
      <Label text="할인율 수정하기" />
      <Input
        type="number"
        onChange={handleChange}
        value={book.discount!}
        placeholder="할인율 수정하기"
        required={true}
      />
      <Label text="전자책 가격 수정하기" />
      <Input
        type="number"
        onChange={handleChange}
        value={book.eBookPrice!}
        placeholder="전자책 가격 수정하기"
        required={true}
      />
    </>
  );
}
