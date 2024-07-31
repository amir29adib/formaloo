import { Resolver } from 'dns';
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { resolve } from 'path';

export default function Dashboard() {

  const SignUpSchema = z.object({
    username: z.string().min(3, "username must be at least 10 characters"),
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
        <h2>Usres</h2>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            assumenda rerum accusamus nam impedit nisi ipsam id sapiente? Nam ad
            fugit consectetur sapiente nobis officiis sit in, nostrum ea quia!
        </div>

        <div className='myForm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Let's check with Zod!</h3>

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

