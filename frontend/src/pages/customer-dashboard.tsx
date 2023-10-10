import Header from "@/components/header";

export default function CustomerDashboard() {
  return (
    <main>
      <Header />

      <div className="flex pl-20 mt-6 relative">
        <div>
          <div>
            <p className="font-bold text-lg">Hello Ramesh!</p>
            <p className="text-slate-500">
              Here are the trending products in your area.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 pr-20 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
            className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="search"
            className=" border-2 border-green-500/50 text-gray-900 outline-white h-full w-72"
            placeholder="         Search for products or farmers"
          />
        </div>
      </div>

      <div className="w-1/4 mt-4 pl-20">
        <div className="border border-gray-300 rounded-lg p-4">
          <img
            src="images/lettuce.png"
            alt="Fresh Lettuce"
            className="w-full"
          />
          <p className="font-bold text-lg mb-">Lettuce</p>
          <p className="text-slate-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="green"
              className="w-4 h-4 mr-2 icon-outline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Sarika Bhatta
          </p>
          <p className="text-slate-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="green"
              className="w-4 h-4 mr-2 icon-outline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Nayabasti, Boudha
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
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            28 Sep
          </p>
          <p className="text-secondary font-bold text-lg">Rs.60/kg</p>
        </div>
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
        <div>
          <div className="w-1/4 absolute top-0 right-0 pr-20 h-full">
            <p className="font-bold text-lg">Recent Chat</p>
            <p className="text-slate-500">Get back to the conversation</p>
            <div className="border border-2 border-black"></div>
          </div>
        </div>
      </div>
      <div className="w-1/4 mt-4 pl-20 mb-4">
        <div className="border border-gray-300 rounded-lg p-4">
          <img
            src="images/farmername.png"
            alt="Fresh Lettuce"
            className="w-full"
          />
          <p className="font-bold mb-1">Sarika Bhatta</p>
          <p className="text-slate-500 mb-2">
            I have been growing organic vegetables for 5 years.
          </p>
          <p className="text-slate-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="green"
              className="w-4 h-4 mr-2 icon-outline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Nayabasti, Boudha
          </p>
        </div>
      </div>
    </main>
  );
}
