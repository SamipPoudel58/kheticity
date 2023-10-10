import Header from "@/components/header";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <div>
        <p className="text-slate-500 pt-6 flex items-center max-w-[1200px] mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span>Go Back</span>
        </p>
      </div>
      <div className="flex gap-x-6 max-w-[1200px] mx-auto">
        <div>
          <img
            src="images/producttomato.png"
            alt="Fresh Tomato"
            className="mt-8"
          />
        </div>
        <div className="w-1/2">
          <div className="mt-8 flex justify-between pr-20">
            <h1 className="text-2xl font-bold">Tomato</h1>
            <h1 className="text-2xl text-secondary font-bold">Rs. 40/kg</h1>
          </div>
          <p className="pr-20 mt-2 text-slate-500">
            Our vine-ripened tomatoes are handpicked at the peak of ripeness to
            ensure unparalleled flavor and quality. Add a burst of vibrant color
            and exquisite taste to your culinary creations with these succulent
            tomatoes.
          </p>
          <p className="text-slate-500 flex items-center pt-8">
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
          <p className="text-slate-500 flex items-center pt-2">
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
          <p className="text-slate-500 flex items-center mb-2 pt-2">
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
          <a href="xyz.com">
            <button className="h-12 w-96 bg-primary font-medium text-lg text-white mt-5 rounded-md transition duration-300 ease-in-out transform hover:scale-105 relative">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </div>
              <span> Connect with Farmer</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
