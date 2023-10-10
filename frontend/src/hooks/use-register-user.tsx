import { UserRegisterPayload, UserRegisterResponse } from '@/pages/register';
import { useMutation } from '@tanstack/react-query';

const registerUser = async (loginData: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/register`,
    {
      method: 'POST',
      body: loginData,
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to register user - ${(await res.json()).message}`);
  }

  return res.json();
};

export const useRegisterUser = () => {
  return useMutation<{ user: UserRegisterResponse }, any, any>(registerUser);
};
