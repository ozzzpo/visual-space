import { FieldErrors, UseFormRegister } from "react-hook-form";
import "./InputField.scss";
interface InputFieldProps {
  inputName: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  placeholder: string;
}

export default function InputField({
  inputName,
  register,
  errors,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="custom-input">
      <label className="custom-input__errorMessage">
        {/*@ts-ignore */}
        {errors[inputName] && errors[inputName].message}
      </label>
      <input
        className={`custom-input__input ${
          errors[inputName] && "custom-input--error"
        }`}
        placeholder={placeholder}
        {...register(inputName)}
      />
    </div>
  );
}
