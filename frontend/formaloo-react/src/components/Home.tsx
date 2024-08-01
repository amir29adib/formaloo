import React from "react";
import FormInput from "./FormFields";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      <TextInput></TextInput>
      <CheckboxInput/>
      <RadioInput></RadioInput>
    </div>
  );
}