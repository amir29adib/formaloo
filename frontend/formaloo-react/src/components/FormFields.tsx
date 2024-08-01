import { useForm } from "react-hook-form";
import { mockData } from "../MockData/mockData"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export default function FormInput() {

    const SignUpSchema = z.object({
        username: z.string().min(3, "username must be at least 10 characters"),
        email: z.string().email(),
        
      });
      
      type SignUpSchemaType = z.infer<typeof SignUpSchema>;
    
        
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<SignUpSchemaType>({
        resolver: zodResolver(SignUpSchema),
      });


    const inputFields = mockData.map((inputField) => {
        return (
            <label> {inputField.name}
                <input
                type={inputField.type}
                placeholder={inputField.placeholder}
                value={inputField.value}
                {...register("email")}
                />
            </label>
        )
    })


    return (
        <div className="dynamicInput">
            {inputFields}
        </div>
    )

}