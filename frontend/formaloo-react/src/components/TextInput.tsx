import { mockData } from "../MockData/mockData";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(1, "username field cannot be empty"),
  email: z.string().email("Invalid email address"),
});

export default function TextInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
const textData = mockData.filter(obj => obj.type ==='text')
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="dynamicInput">
        {textData.map((inputField) => (
          <label key={inputField.name}>
            {inputField.label}
            <input
              {...register(inputField.name)}
              type={inputField.type}
              placeholder={inputField.placeholder}
            />
            {errors[inputField.name] && (
              <p>{String(errors[inputField.name]?.message)}</p>
            )}
          </label>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
