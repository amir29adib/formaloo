import React from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import './App.css';
import Login from './components/login';



export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: FieldValues)  => console.log(data);
  console.log(errors);
  
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to='/'>Form</NavLink>
          <NavLink to='/login'>Login</NavLink>

        </nav>

        <Routes>
          <Route  path="/" element={<Form />} />
          <Route  path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  
      {/* <form className='myForm' onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register("email", {required: true})} />
        <input type="text" placeholder="Username" {...register("Username", {required: true, max: 16, min: 6})} />
        <div>
          <input type="checkbox" placeholder="Checkbox" {...register("Checkbox", {required: true, min: 1})} />
          <input type="checkbox" placeholder="checkbox" {...register} />
          <input {...register("radio", { required: true })} type="radio" value="option 1" />
          <input {...register("radio", { required: true })} type="radio" value=" option 2" />
          <input {...register("radio", { required: true })} type="radio" value=" option 3" />
          <input {...register("radio", { required: true })} type="radio" value=" option 4" />
        </div>


        <input type="submit" />
      </form> */}

    </div>
  );
}