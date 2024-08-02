import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { mockData } from '../MockData/mockData';
import { FieldProps } from './interfaces';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import DropdownInput from './DropdownInput';

const generateSchema = (fields: FieldProps[]) => {
    const shape: { [key: string]: any } = fields.reduce((acc, field) => {
      const validation = field.validation;
      let schema: any;
  
      switch (validation.type) {
        case 'string':
          schema = z.string();
          if (validation.email) {
            schema = schema.email('Invalid email address');
          }
          if (validation.min) {
            schema = schema.min(validation.min[0], validation.min[1]);
          }
          if (validation.required) {
            schema = schema.nonempty(validation.required);
          }
          break;
        case 'boolean':
          schema = z.boolean();
          break;
        default:
          schema = z.string().optional();
      }
  
      acc[field.name] = schema;
      return acc;
    }, {} as { [key: string]: any });
  
    return z.object(shape);
  };

const FormBuilder: React.FC = () => {
  const schema = generateSchema(mockData);

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // Group fields by type
  const textFields = mockData.filter(field => ['text', 'email', 'password'].includes(field.type));
  const checkboxFields = mockData.filter(field => field.type === 'checkbox');
  const radioFields = mockData.filter(field => field.type === 'radio');
  const dropdownFields = mockData.filter(field => field.type === 'dropdown');

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextInput fields={textFields} />
        <CheckboxInput fields={checkboxFields} />
        <RadioInput fields={radioFields} />
        <DropdownInput fields={dropdownFields} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default FormBuilder;
