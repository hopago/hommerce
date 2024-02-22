type HeadingProps = {
  currForm: 0 | 1;
};

export default function Heading({ currForm }: HeadingProps) {
  return (
    <div className="register-heading">
      <div className="title-wrap">
        <h1>회원가입</h1>
      </div>
      <div className="form-state">
        {[...Array.from({ length: 2 })].map((_, i) => {
          if (i === currForm) {
            return (
              <div key={i} className="icon-wrap active">
                {currForm + 1}
              </div>
            );
          } else {
            return <div key={i} className="icon-wrap" />;
          }
        })}
      </div>
    </div>
  );
}
