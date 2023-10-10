import { UserLoginPayload, UserLoginResponse } from '@/pages/login';
import {
  FarmerRegisterPayload,
  FarmerRegisterResponse,
} from '@/pages/register-farmer';
import { useMutation } from '@tanstack/react-query';

const registerFarmer = async (loginData: FarmerRegisterPayload) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/marketplace/api/farmers/`,
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

export const useRegisterFarmer = () => {
  return useMutation<
    { user: FarmerRegisterResponse },
    any,
    FarmerRegisterPayload
  >(registerFarmer);
};
