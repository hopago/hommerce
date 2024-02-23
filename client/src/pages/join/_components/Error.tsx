type ErrorMsg = {
  msg: string;
};

export default function Error({ msg }: ErrorMsg) {
  return <p className="warn">{msg}</p>;
}
