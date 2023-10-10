import Header from '@/components/header';
import { useGetNearbyData } from '@/hooks/use-nearby-data';
import useUserStore from '@/store/user-store';
import { useEffect, useState } from 'react';

export default function CustomerDashboard() {
  const userInfo = useUserStore((state) => state.loginDetail);
  const [latlngCordinates, setLatLngCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const { data } = useGetNearbyData(
    latlngCordinates?.lat as number,
    latlngCordinates?.lng as number
    // 27.67333122142462,
    // 85.37279544367713
  );

  // const data = {
  //   nearby_farmers: [
  //     {
  //       id: 3,
  //       user_id: 1,
  //       farmName: 'Mero Mitho Tarkari',
  //       description: 'Dherai Mitho Tarkari xa mero',
  //       latitude: 27.67383911608892,
  //       longitude: 85.37245851339124,
  //       contact: 9879879898,
  //       products: [
  //         {
  //           id: 2,
  //           name: 'Red Cabbage',
  //           description: 'This is a very good Cabbage',
  //           price: 75,
  //           unit: 'kg',
  //           quantity: 4,
  //           availabilityDate: '2023-10-10T09:49:11.726465Z',
  //           productImg:
  //             'http://127.0.0.1:8000/media/product_images/273959628_329702579194711_6530405726743897761_n.jpg',
  //           farmer_id: 3,
  //         },
  //       ],
  //     },
  //   ],
  // };

  const productsWithFarmerName = data.nearby_farmers.flatMap((farmer: any) =>
    farmer.products.map((product: any) => ({
      farmer_name: farmer.farmName,
      product,
    }))
  );

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setLatLngCoordinates({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(`Error getting geolocation: ${error.message}`);
        }
      );
    } else {
      console.log('Geolocation is not supported in this browser.');
    }
  }, []);

  return (
    <main>
      <Header />

      <div className="flex pl-20 mt-6 relative">
        <div>
          <div>
            <p className="font-bold text-lg">Hello {userInfo.name}!</p>
            <p className="text-slate-500">
              Here are the trending products in your area.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/4 mt-4 pl-20">
        {productsWithFarmerName.length > 0 ? (
          <>
            {productsWithFarmerName.map((product: any) => (
              <Product key={product.product.id} productDetail={product} />
            ))}
          </>
        ) : (
          ''
        )}
      </div>
      <div className="flex pl-20 mt-6 relative">
        <div>
          <div>
            <p className="font-bold text-lg">Farmers</p>
            <p className="text-slate-500">
              Here are the top rated farmers in your area.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 mt-4 pl-20 mb-4">
        {data.nearby_farmers.map((farmer: any) => (
          <Farmer key={farmer.id} farmerDetail={farmer} />
        ))}
      </div>
    </main>
  );
}

const Product = ({ productDetail }: any) => (
  <div className="border border-gray-300 rounded-lg p-4">
    <img
      src={productDetail.product.productImg}
      alt="product_img"
      className="w-full max-h-[160px] object-cover"
    />
    <p className="font-bold text-lg mb-">{productDetail.product.name}</p>
    <p className="text-slate-500 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="green"
        className="w-4 h-4 mr-2 icon-outline"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
      {productDetail.farmer_name}
    </p>
    <p className="text-slate-500 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="green"
        className="w-4 h-4 mr-2 icon-outline"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
      Chyasal, Lalitpur
    </p>
    <p className="text-slate-500 flex items-center mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="green"
        className="w-4 h-4 mr-2 icon-outline"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {formatDate(productDetail.product.availabilityDate)}
    </p>
    <p className="text-secondary font-bold text-lg">
      Rs.{productDetail.product.price}/{productDetail.product.unit}
    </p>
  </div>
);

const Farmer = ({ farmerDetail }: any) => (
  <div className="border border-gray-300 rounded-lg p-4">
    <img src="images/farmername.png" alt="Fresh Lettuce" className="w-full" />
    <p className="font-bold mb-1">{farmerDetail.name}</p>
    <p className="text-slate-500 mb-2">{farmerDetail.description}</p>
    <p className="text-slate-500 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        className="w-4 h-4 mr-2 icon-outline stroke-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
      Chyasal Lalitpur
    </p>
    <p className="text-slate-500 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 mr-2 icon-outline stroke-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
      {farmerDetail.contact}
    </p>
  </div>
);

function formatDate(dateStr: string) {
  var date = new Date(dateStr);
  var options: any = { year: 'numeric', month: 'short', day: 'numeric' };
  var formattedDate = date.toLocaleDateString(undefined, options);
  return formattedDate;
}
