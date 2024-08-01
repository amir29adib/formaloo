import React from "react";
import FormInput from "./FormFields";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      {/* <FormInput></FormInput> */}
      <TextInput></TextInput>
      <RadioInput></RadioInput>
    </div>
  );
}