import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from './interfaces';

interface CheckboxInputProps {
  fields: FieldProps[];
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ fields }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="dynamicInput">
      {fields.map((field: FieldProps) => (
        <label key={field.name}>
          <input
            {...register(field.name)}
            type="checkbox"
            defaultChecked={Boolean(field.boolean)}
          />
          {field.label}
          {errors[field.name] && (
            <p>{String(errors[field.name]?.message)}</p>
          )}
        </label>
      ))}
    </div>
  );
};

export default CheckboxInput;
