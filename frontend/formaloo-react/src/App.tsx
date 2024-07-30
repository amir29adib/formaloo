import React from 'react';
import { useForm, type FieldValues } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: FieldValues)  => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" {...register("email", {required: true})} />
      <input type="text" placeholder="Username" {...register("Username", {required: true, max: 16, min: 6})} />
      <input type="checkbox" placeholder="Checkbox" {...register("Checkbox", {required: true, min: 1})} />
      <input type="checkbox" placeholder="checkbox" {...register} />

      <input {...register("radio", { required: true })} type="radio" value="option 1" />
      <input {...register("radio", { required: true })} type="radio" value=" option 2" />
      <input {...register("radio", { required: true })} type="radio" value=" option 3" />
      <input {...register("radio", { required: true })} type="radio" value=" option 4" />

      <input type="submit" />
    </form>
  );
}