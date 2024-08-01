import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { mockData } from '../MockData/mockData'; 

const schema = z.object({
  checkbox: z.boolean(),
  
});

export default function CheckboxInput() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const checkboxData = mockData.filter(obj => obj.type ==='checkbox')
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="dynamicInput">
        {checkboxData.map((checkbox) => (
          <label key={checkbox.name}>
            <input
              type="checkbox"
              {...register(checkbox.name)}
            />
            {checkbox.value}
            {errors[checkbox.name] && (
              <p>{String(errors[checkbox.name]?.message)}</p>
            )}
          </label>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
