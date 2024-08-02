import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from './interfaces';

interface TextInputProps {
  fields: FieldProps[];
}

const TextInput: React.FC<TextInputProps> = ({ fields }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="dynamicInput">
      {fields.map((field: FieldProps) => (
        <label key={field.name}>
          {field.label}
          <input
            {...register(field.name)}
            type={field.type}
            placeholder={field.placeholder}
          />
          {errors[field.name] && (
            <p>{String(errors[field.name]?.message)}</p>
          )}
        </label>
      ))}
    </div>
  );
};

export default TextInput;
