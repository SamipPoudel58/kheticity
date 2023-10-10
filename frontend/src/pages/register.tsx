import FormWrapper from '@/components/forms/FormWrapper';
import Input from '@/components/forms/Input';
import Header from '@/components/header';
import { useRegisterUser } from '@/hooks/use-register-user';
import useUserStore from '@/store/user-store';
import Link from 'next/link';
import { useRouter } from 'next/router';

export type UserRegisterPayload = {
  name: string;
  email: string;
  password: string;
  image: any;
};

export type UserRegisterResponse = {
  id: number;
  name: string;
  email: string;
  image: string;
  jwt: string;
};

export default function Register() {
  const { mutate: registerUser, isLoading, isError } = useRegisterUser();
  const setLoginDetail = useUserStore((state) => state.setLoginDetail);

  const router = useRouter();

  const submitHandler = (data: UserRegisterPayload) => {
    const formData: any = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append(
      'image',
      (document.getElementById('imageInput') as any).files[0]
    );
    registerUser(formData, {
      onSuccess: (data) => {
        setLoginDetail(data.user);
        router.push('/customer-dashboard');
      },
    });
  };

  return (
    <main>
      <Header />
      <div className="max-w-[1200px] mx-auto flex">
        <div className="pr-28 pt-8 w-1/2">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">
              Create an account
            </h2>

            <FormWrapper
              showLoader={isLoading}
              className="space-y-4"
              onSubmit={submitHandler}
            >
              <Input type="text" name="name" label="Full Name" />
              <Input type="email" name="email" label="Email" />
              <Input type="password" name="password" label="Password" />
              <input type="file" accept="image/*" id="imageInput" />
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
