import Header from "@/components/header";

export default function KhetiShikshya() {
  return (
    <div>
      <Header />
      <div>
        <p className="text-center p-1 mt-50 text-primary-dark text-4xl font-bold mb-2 border-b-8 border-green-600 text-center w-max mx-auto">
          Kheti Shikshya
        </p>

        <div className="max-w-[1200px] mx-auto">
          <p className="text-center px-60 mt-5 text-slate-600 text-lg mb-2 ">
            Kheti Shiksya is a central hub for learning more about Urban
            farming. It includes official curated guides along with a huge array
            of articles shared by urban farmers community.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white px-10 p-4 rounded-lg  flex w-1/8 gap-x-6">
          <div className="bg-white p-2 rounded-lg shadow flex w-1/8 gap-x-1">
            <img
              src="images/cabbage.png"
              alt="Image 1"
              className="w-1/8 h=auto"
            />
            <div>
              <p className="ml-4 font-medium ">
                {" "}
                <a href="/blogpage">
                  How to Start Urban Farming with Minimal Cost
                </a>
              </p>

              <p className="ml-4 text-sm pt-2">
                {" "}
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex">
            <img
              src="images/tools.png"
              alt="Image 2"
              className="w-1/8 h-auto"
            />
            <div>
              <p className="ml-4 font-medium">
                Must have equipments for Urban Farmers for max productivity.
              </p>
              <p className="ml-4 text-sm pt-2">
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white  px-10 p-4 rounded-lg flex w-1/8 gap-x-6">
          <div className="bg-white p-4 rounded-lg shadow flex w-1/8 gap-x-1">
            <img
              src="images/carrot.png"
              alt="Image 1"
              className="w-1/8 h=auto"
            />
            <div>
              <p className="ml-4 font-medium">
                10 reasons why carrots are the best crop for Urban farmers
              </p>
              <p className="ml-4 text-sm pt-2">
                {" "}
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex">
            <img
              src="images/strawberry.png"
              alt="Image 2"
              className="w-1/8 h-auto"
            />
            <div>
              <p className="ml-4 font-medium">
                How to farm strawberries in a large scale.
              </p>
              <p className="ml-4 text-sm pt-2">
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <p className="px-10 mt-50 text-primary-dark text-2xl font-bold mb-2 ">
          Community Articles
        </p>
        <div>
          <p className="text-left px-10 mt-2 text-slate-600 text-lg mb-2 ">
            Articles written by urban farmers.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white px-10 p-4 rounded-lg flex w-1/8 gap-x-6">
          <div className="bg-white p-4 rounded-lg shadow flex w-1/8">
            <img
              src="images/cabbage.png"
              alt="Image 1"
              className="w-1/8 h=auto"
            />
            <div>
              <p className="ml-4 font-medium">
                {" "}
                How I got started with vertical farming and you can too.
              </p>
              <p className="ml-4 text-sm pt-2">
                {" "}
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex">
            <img
              src="images/tools.png"
              alt="Image 2"
              className="w-1/8 h-auto"
            />
            <div>
              <p className="ml-4 font-medium">
                Must have equipments for Urban Farmers for max productivity.
              </p>
              <p className="ml-4 text-sm pt-2">
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-10 p-4 rounded-lg flex w-1/8 gap-x-6">
          <div className="bg-white p-4 rounded-lg shadow flex w-1/8">
            <img
              src="images/carrot.png"
              alt="Image 3"
              className="w-1/8 h=auto"
            />
            <div>
              <p className="ml-4 font-medium">
                10 reasons why carrots are the best crop for Urban farmers
              </p>
              <p className="ml-4 text-sm pt-2">
                {" "}
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex">
            <img
              src="images/strawberry.png"
              alt="Image 4"
              className="w-1/8 h-auto"
            />
            <div>
              <p className="ml-4 font-medium">
                How to farm strawberries in a large scale.
              </p>
              <p className="ml-4 text-sm pt-2">
                Let me take you on a journey of how I got started with vertical
                farming which helped me increase quantity of my produces
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
