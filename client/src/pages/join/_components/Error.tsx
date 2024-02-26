type ErrorMsg = {
  msg: string;
};

export default function Error({ msg }: ErrorMsg) {
  return <p style={{ marginTop: "1rem" }} className="warn">{msg}</p>;
}
