import FormWrapper from '@/components/forms/FormWrapper';
import Input from '@/components/forms/Input';
import Header from '@/components/header';
import { useLoginUser } from '@/hooks/use-login-user';
import useUserStore from '@/store/user-store';
import Link from 'next/link';

export type UserLoginPayload = {
  email: string;
  password: string;
};

export type UserLoginResponse = {
  _id: string;
  name: string;
  token: string;
};

export default function Login() {
  const { mutate: loginUser, isLoading, isError } = useLoginUser();
  const setLoginDetail = useUserStore((state) => state.setLoginDetail);

  const submitHandler = (data: UserLoginPayload) => {
    loginUser(data, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="pl-20 pr-28 pt-8 w-1/2">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">
              Sign In
            </h2>

            <FormWrapper
              showLoader={false}
              className="space-y-4"
              onSubmit={submitHandler}
            >
              <Input type="email" name="email" label="Email" />
              <Input type="password" name="password" label="Password" />
            </FormWrapper>
            <p className="mt-2 text-slate-500 text-center">
              Don&apos;t have an account?{' '}
              <Link className="text-primary" href="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="images/handimage.png"
            alt="hand"
            className="rounded-lg pl-14"
          />
        </div>
      </div>
    </div>
  );
}
