import { Controller, useForm } from "react-hook-form";
import InputField from "../../common/InputField/InputField";
import "./RequestForm.scss";
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
import { requestSchema } from "../../../utils/validators/requestSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { quotesApi } from "../../../api/quotes.service";
export default function RequestForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(requestSchema) });
  const onSubmit = async (data: any) => {
    console.log(data);
    const response = await quotesApi.getQuote();
    console.log(response.data);
  };
  return (
    <div className="request-form" id="form">
      <div className="requset-form__text">
        <h1>Оставить заявку</h1>
        <p>
          Заполните форму и наши сотрудники свяжутся с вами для консультации
        </p>
      </div>
      <form className="request-form__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="request-form__content">
          <div className="request-form__inputs">
            <InputField
              register={register}
              errors={errors}
              inputName="name"
              placeholder="Ваше имя"
            />
            <InputField
              register={register}
              errors={errors}
              inputName="phone"
              placeholder="Номер телефона"
            />
          </div>
          <div className="request-form__textarea">
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <TextArea
                  className="textarea"
                  placeholder="Комментарий к проекту"
                  style={{ resize: "none", fontSize: "24px", height: "100%" }}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="request-form__button">
          <Button type="primary" size="large" htmlType="submit">
            Отправить заявку
          </Button>
          <p>
            Я даю согласие, что студия Visual Space собирает и хранит личные
            данные, указанные в этой контактной форме.
          </p>
        </div>
      </form>
    </div>
  );
}
