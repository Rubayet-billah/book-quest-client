import { useState, ChangeEvent, FormEvent } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    console.log(formData);
  };

  return (
    <div>
      <form
        className="flex max-w-md md:w-96 flex-col gap-4 mx-auto md:mt-36"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl md:text-4xl text-center font-bold">Sign In</h1>
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
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
