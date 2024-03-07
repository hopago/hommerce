type UserGrade = "일반회원" | "VIP" | "관리자";

type UserStatus = "활성화" | "휴면";

type User = {
  _id: string;
  id: string;
  username: string;
  imageUrl: string;
  // TODO: Update API Schema
  email: string; // req.body
  grade: UserGrade; // default 일반회원
  status: UserStatus; // default 활성화, 한달 접속 X -> 휴면 -> 이메일 인증
  createdAt: Date;
  updatedAt: Date;
};
