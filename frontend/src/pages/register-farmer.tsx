import MapWithInitialView from '@/components/farmer-map';
import FormWrapper from '@/components/forms/FormWrapper';
import Input from '@/components/forms/Input';
import Header from '@/components/header';
import { useRegisterFarmer } from '@/hooks/use-register-farmer';
import useUserStore from '@/store/user-store';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

export type FarmerRegisterPayload = {
  user_id?: number;
  farmName: string;
  description: string;
  contact: string;
  latitude?: number;
  longitude?: number;
};

export type FarmerRegisterResponse = {
  id: number;
  name: string;
  email: string;
  image: string;
  jwt: string;
};

const Map = dynamic(() => import('@/components/farmer-map'), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default function FarmerRegister() {
  const { mutate: registerFarmer, isLoading, isError } = useRegisterFarmer();

  const [latlngCordinates, setLatLngCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const router = useRouter();

  const userInfo = useUserStore((state) => state.loginDetail);

  const submitHandler = (data: FarmerRegisterPayload) => {
    const payload = {
      user_id: userInfo.id,
      latitude: latlngCordinates?.lat,
      longitude: latlngCordinates?.lng,
      ...data,
    };

    console.log(payload);
    registerFarmer(payload, {
      onSuccess: (data) => {
        router.push('/customer-dashboard');
      },
    });
  };

  const getGeoCode = () => {
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
  };

  const DEFAULT_CENTER = [38.907132, -77.036546];

  return (
    <main>
      <Header />
      <div className="max-w-[1200px] mx-auto flex">
        <div className="pr-28 pt-8 w-1/2">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">
              Register as a Farmer
            </h2>

            <FormWrapper
              showLoader={isLoading}
              className="space-y-4"
              onSubmit={submitHandler}
            >
              <Input type="text" name="farmName" label="Farm Name" />
              <Input type="text" name="description" label="Description" />
              <Input type="text" name="contact" label="Contact" />
              {latlngCordinates?.lat ? (
                <>
                  <p>
                    <strong>Latitude: </strong>
                    {latlngCordinates.lat}
                  </p>
                  <p>
                    <strong>Longitude: </strong>
                    {latlngCordinates.lng}
                  </p>
                </>
              ) : (
                <button type="button" onClick={getGeoCode}>
                  Get Geocode
                </button>
              )}
            </FormWrapper>
          </div>
        </div>
        <div className="w-1/2">
          <Map />
        </div>
      </div>
    </main>
  );
}
