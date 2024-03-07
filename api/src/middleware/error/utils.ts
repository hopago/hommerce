export class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message || "서버 내부 오류");
    this.status = status || 500;
    this.message = message;
  }
}
