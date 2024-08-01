import { mockData } from "../MockData/mockData"
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const schema = z.object({
    username: z.string().min(1,'username field cannot be empty') ,
    email: z.string().email("Invalid email address"),
});

export default function FormInput() {
    const { handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data:FieldValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="dynamicInput">
                {mockData.map((inputField) => (
                    <label key={inputField.name}>
                        {inputField.name}
                                <input
                                    type={inputField.type}
                                    placeholder={inputField.placeholder}
                                />
                    </label>
                ))}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
