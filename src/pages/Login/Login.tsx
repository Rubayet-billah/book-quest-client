import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  return (
    <div>
      <form className="flex max-w-md md:w-96 flex-col gap-4 mx-auto md:mt-36">
        <h1 className="text-2xl md:text-5xl text-center font-bold">Sign In</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@john.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" required type="password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
