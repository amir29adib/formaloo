import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { mockData } from "../MockData/mockData";

export default function DropDown() {
  const dropdownFields = mockData.filter((item) => item.type === "dropdown" && item.options);
  const dropdownValues = dropdownFields.map((option) => option.value) as [
    string,
    ...string[]
  ];

  const schema = z.object({
    dropdownOption: z.enum(dropdownValues, {
      required_error: "This field is required",
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
        {dropdownFields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <select id={field.id} {...register(field.name)}>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );

}
