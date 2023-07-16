import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hook";
import { setLoading, setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [login, { data, isLoading, isError, isSuccess }] =
    useLoginUserMutation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const formData = {
      email,
      password,
    };
    login(formData);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess && data) {
      const { email, accessToken } = data?.data;
      dispatch(setUser({ email, accessToken }));
      toast.success("Login successfull");
      navigate("/");
      dispatch(setLoading(isLoading));
    }
  }, [data, isLoading, isError, isSuccess, navigate, dispatch]);

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
        <Button color="purple" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
