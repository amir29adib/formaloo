import { Resolver } from 'dns';
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { resolve } from 'path';

export default function Login() {
  const SignUpSchema = z.object({
    username: z.string().min(3, "username must be at least 3 characters"),
    email: z.string().email()
  });
  
  type SignUpSchemaType = z.infer<typeof SignUpSchema>;

    
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });
  
  const onSubmit = async (data: SignUpSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }


  return (
    <div>

        <div className='myForm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>

            <input type="text" placeholder="Username" {...register("username")} />

            {errors.username && (
              <p className='error'>{`${errors.username.message}`}</p>
            )}

            <input type="text" placeholder="Email" {...register("email")} />

            {errors.email && (
              <p className='error'>{`${errors.email.message}`}</p>
            )}


            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
        
    </div>
  )
}

