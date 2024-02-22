import PhoneVerification from "./PhoneVerification";
import RegisterForm from "./RegisterForm";

type FormProps = {
  currForm: 0 | 1;
  setCurrForm: React.Dispatch<React.SetStateAction<0 | 1>>
};

export default function Form({ currForm, setCurrForm }: FormProps) {
  if (currForm === 0) {
    return <PhoneVerification setCurrForm={setCurrForm} />;
  } else {
    return <RegisterForm />;
  }
}
