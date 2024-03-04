type UserGrade = "일반회원" | "VIP" | "관리자";

type UserStatus = "활성화" | "휴면";

type User = {
  _id: string;
  id: string;
  username: string;
  imageUrl: string;
  // TODO: Update API Schema
  email: string;
  grade: UserGrade;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
};

type UserInfo = Omit<User, "id" | "updatedAt">;
