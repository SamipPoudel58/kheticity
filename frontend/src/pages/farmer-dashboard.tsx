import Header from '@/components/header';
import useUserStore from '@/store/user-store';

const FarmerDashboard = () => {
  const userInfo = useUserStore((state) => state.loginDetail);
  return (
    <main className="min-h-screen">
      <Header />

      <div className="flex pl-20 mt-6 relative">
        <div>
          <div>
            <p className="text-primary-dark font-bold text-lg">
              Welcome to Farmer&apos;s Dashboard, {userInfo.name}!
            </p>
            <p className="text-slate-500">
              You can add, edit or delete your products here.
            </p>

            <button className="mt-4 border-2 border-primary px-8 py-3 text-primary">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FarmerDashboard;
