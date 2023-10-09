import { UserRegisterPayload, UserRegisterResponse } from '@/pages/register';
import { useMutation } from '@tanstack/react-query';

const registerUser = async (loginData: UserRegisterPayload) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/register`,
    {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to register user - ${(await res.json()).message}`);
  }

  return res.json();
};

export const useRegisterUser = () => {
  return useMutation<UserRegisterResponse, any, UserRegisterPayload>(
    registerUser
  );
};
