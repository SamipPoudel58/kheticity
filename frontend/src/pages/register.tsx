import FormWrapper from '@/components/forms/FormWrapper';
import Input from '@/components/forms/Input';
import Header from '@/components/header';
import { useRegisterUser } from '@/hooks/use-register-user';
import useUserStore from '@/store/user-store';
import Link from 'next/link';

export type UserRegisterPayload = {
  email: string;
  password: string;
};

export type UserRegisterResponse = {
  _id: string;
  name: string;
  token: string;
};

export default function Register() {
  const { mutate: registerUser, isLoading, isError } = useRegisterUser();
  const setLoginDetail = useUserStore((state) => state.setLoginDetail);

  const submitHandler = (data: UserRegisterPayload) => {
    registerUser(data, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <main>
      <Header />
      <div className="flex">
        <div className="pl-20 pr-28 pt-8 w-1/2">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">
              Create an account
            </h2>

            <FormWrapper
              showLoader={false}
              className="space-y-4"
              onSubmit={submitHandler}
            >
              <Input type="text" name="name" label="Full Name" />
              <Input type="email" name="email" label="Email" />
              <Input type="password" name="password" label="Password" />
            </FormWrapper>
            <p className="mt-2 text-slate-500 text-center">
              Already have an account?{' '}
              <Link className="text-primary" href="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="w-3/6">
          <img
            src="images/handimage.png"
            alt="hand"
            className="rounded-lg pl-14"
          />
        </div>
      </div>
    </main>
  );
}
