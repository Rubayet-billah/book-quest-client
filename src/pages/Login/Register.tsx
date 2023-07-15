import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const formData = {
        email,
        password,
      };
      console.log(formData);
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div>
      <form
        className="flex max-w-md md:w-96 flex-col gap-4 mx-auto md:mt-36"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl md:text-4xl text-center font-bold">Sign Up</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@john.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmPassword" value="Confirm password" />
          </div>
          <TextInput
            id="confirmPassword"
            required
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!passwordMatch && (
            <p className="text-red-500 text-sm">Passwords do not match</p>
          )}
        </div>
        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
