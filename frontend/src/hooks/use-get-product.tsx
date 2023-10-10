import { useQuery } from '@tanstack/react-query';

const getProduct = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/inventory/api/products/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to get product data - ${(await res.json()).message}`
    );
  }

  return res.json();
};

export const useGetProduct = (id: number) => {
  return useQuery<any, any>(['product', id], () => getProduct(id));
};
