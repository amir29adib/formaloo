import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from './interfaces';

interface DropdownInputProps {
  fields: FieldProps[];
}

const DropdownInput: React.FC<DropdownInputProps> = ({ fields }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="dynamicInput">
      {fields.map((field: FieldProps) => (
        <label key={field.id}>
          {field.label}
          <select {...register(field.name)}>
            {field.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors[field.name] && (
            <p>{String(errors[field.name]?.message)}</p>
          )}
        </label>
      ))}
    </div>
  );
};

export default DropdownInput;
