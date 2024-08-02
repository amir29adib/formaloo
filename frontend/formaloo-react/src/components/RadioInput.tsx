import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from './interfaces';

interface RadioInputProps {
  fields: FieldProps[];
}

const RadioInput: React.FC<RadioInputProps> = ({ fields }) => {
  const { register, formState: { errors } } = useFormContext();


  const groupedFields = fields.reduce((acc, field) => {
    if (!acc[field.name]) {
      acc[field.name] = [];
    }
    acc[field.name].push(field);
    return acc;
  }, {} as { [key: string]: FieldProps[] });

  return (
    <div className="dynamicInput">
      {Object.keys(groupedFields).map((groupName) => (
        <fieldset key={groupName}>
          <legend>{groupedFields[groupName][0].name}</legend>
          {groupedFields[groupName].map((field) => (
            <label key={field.id}>
              <input
                {...register(field.name)}
                type="radio"
                value={String(field.value)}
              />
              {field.label}
            </label>
          ))}
          {errors[groupName] && (
            <p>{String(errors[groupName]?.message)}</p>
          )}
        </fieldset>
      ))}
    </div>
  );
};

export default RadioInput;
