import { useQuery } from '@tanstack/react-query';

const getNearbyData = async (lat: number, lon: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/marketplace/api/farmers/nearby_farmers?lat=${lat}&lon=${lon}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to get nearby data - ${(await res.json()).message}`
    );
  }

  return res.json();
};

export const useGetNearbyData = (lat: number, lon: number) => {
  return useQuery<any, any>(['nearby-data'], () => getNearbyData(lat, lon));
};
