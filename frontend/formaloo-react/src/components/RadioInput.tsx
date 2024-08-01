import { mockData } from "../MockData/mockData";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// const schema = z.object({
//   username: z.string().min(1, "username field cannot be empty"),
//   email: z.string().email("Invalid email address"),
// });

export default function RadioInput() {

    const radioFields = mockData.filter(item => item.type === 'radio');
    const radioEnumValues = radioFields.map(option => option.value) as [string, ...string[]];

    const schema = z.object({
        radioOption: z.enum(radioEnumValues, {
        required_error: "This field is required"
        }),
    });

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="radioField">
        <form onSubmit={handleSubmit(onSubmit)}>
            {radioFields.map((option) => (
            <div key={option.id}>
                <label htmlFor={option.id}>
                    <input
                    type={option.type}
                    value={option.value}
                    id={option.id}
                    {...register(option.value)}
                    name={option.name}
                    />
                    {option.value}
                </label>
            </div>
            ))}
        </form>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
