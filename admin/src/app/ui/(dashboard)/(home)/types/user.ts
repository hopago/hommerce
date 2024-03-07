export interface IUser {
  _id: string;
  id: string;
  username: string;
  imageUrl: string;
  email: string; // req.body
  grade: UserGrade; // default 일반회원
  status: UserStatus; // default 활성화, 한달 접속 X -> 휴면 -> 이메일 인증
  createdAt: Date;
  updatedAt: Date;
}
