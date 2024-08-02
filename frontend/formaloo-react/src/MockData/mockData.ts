import { FieldProps } from "../components/interfaces";

export const mockData: FieldProps[] = [
    {
      type: 'email',
      placeholder: 'enter your email',
      value: 'arefe.ehyaee@gmail.com',
      name: 'email',
      label: 'Email',
      validation: {
        type: 'string',
        email: true,
        required: 'Email is required',
      },
    },
    {
      type: 'text',
      placeholder: 'username',
      value: 'arefe1234',
      name: 'username',
      label: 'Username',
      validation: {
        type: 'string',
        min: [1, 'Username cannot be empty'],
      },
    },
    {
      type: 'password',
      placeholder: 'please enter your password',
      value: 'a1b2c3',
      name: 'password',
      label: 'Password',
      validation: {
        type: 'string',
        min: [6, 'Password must be at least 6 characters long'],
      },
    },
    {
      type: 'checkbox',
      name: 'transport1',
      id: 'transport1',
      value: 'Bike',
      label: 'Bike',
      validation: {
        type: 'boolean',
      },
    },
    {
      type: 'checkbox',
      name: 'transport2',
      id: 'transport2',
      value: 'Buggy',
      label: 'Buggy',
      validation: {
        type: 'boolean',
      },
    },
    {
      type: 'checkbox',
      name: 'transport3',
      id: 'transport3',
      value: 'Bus',
      label: 'Bus',
      validation: {
        type: 'boolean',
      },
    },
    {
      type: 'checkbox',
      name: 'transport4',
      id: 'transport4',
      value: 'Boat',
      label: 'Boat',
      validation: {
        type: 'boolean',
      },
    },
    {
      type: 'radio',
      name: 'color',
      id: 'color1',
      value: 'green',
      label: 'Green',
      validation: {
        type: 'string',
      },
    },
    {
      type: 'radio',
      name: 'color',
      id: 'color2',
      value: 'yellow',
      label: 'Yellow',
      validation: {
        type: 'string',
      },
    },
    {
      type: 'radio',
      name: 'color',
      id: 'color3',
      value: 'pink',
      label: 'Pink',
      validation: {
        type: 'string',
      },
    },
    {
      type: 'dropdown',
      name: 'cars',
      id: 'cars',
      options: ['volvo', 'audi', 'fiat'],
      label: 'Cars',
      validation: {
        type: 'string',
        required: 'Please select a car',
      },
    },
    {
      type: 'dropdown',
      name: 'languages',
      id: 'languages',
      options: ['Java', 'Python', 'PHP'],
      label: 'Languages',
      validation: {
        type: 'string',
        required: 'Please select a language',
      },
    },
  ];
  