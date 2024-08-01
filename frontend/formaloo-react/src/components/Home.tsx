import React from "react";
import FormInput from "./FormFields";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      <TextInput></TextInput>
      <CheckboxInput/>
    </div>
  );
}