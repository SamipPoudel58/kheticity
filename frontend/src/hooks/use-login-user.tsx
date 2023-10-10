import { UserLoginPayload, UserLoginResponse } from '@/pages/login';
import { useMutation } from '@tanstack/react-query';

const loginUser = async (loginData: UserLoginPayload) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/login`,
    {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to login user - ${(await res.json()).message}`);
  }

  return res.json();
};

export const useLoginUser = () => {
  return useMutation<{ user: UserLoginResponse }, any, UserLoginPayload>(
    loginUser
  );
};
