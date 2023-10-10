import Header from "@/components/header";

export default function UrbanFarmingPage() {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center mt-16">
        <div className="w-3/4 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img
                src="images/farmerphotoblog.jpg"
                alt="Farmer Icon"
                className="w-8 h-8"
              />
            </div>
            <div className="ml-4">
              <p className="text-slate-500 font-semibold">Ram Adhikari</p>
              <p className="text-slate-500">Written on June 30, 2023</p>
            </div>
          </div>
          <h1 className="text-4xl text-primary-dark font-bold mb-4">
            How to Start Urban Farming with Minimal Cost
          </h1>
          <img
            src="images/urban-farming-1.jpg"
            alt="Urban Farming"
            className="mb-4 rounded-lg"
          />
          <p className="text-slate-500 text leading-6 max-w-[1200px] mx-auto">
            Urban farming offers numerous benefits, including access to fresh,
            organic produce and a sustainable way to contribute to a greener,
            healthier city. The good news is that you can start your own urban
            farm with minimal cost and resources.
          </p>
          <h2 className="text-2xl text-primary-dark mt-6 font-semibold">
            Benefits of Urban Farming
          </h2>
          <ul className="list-disc list-inside text-slate-500 mt-2 ml-4">
            <li>Reduce grocery bills by growing your own food.</li>
            <li>Access fresh and organic produce right at home.</li>
            <li>
              Contribute to a more eco-friendly and sustainable lifestyle.
            </li>
            <li>Engage with your community through urban farming projects.</li>
          </ul>
          <br />

          <p className="text-slate-500">
            We can start urban farming using minimal cost. Following are the
            necessary steps:
          </p>

          <h1 className="text-xl font-bold">Step 1</h1>

          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <img src="images/urban-farming-1.jpg" className="h-60 pt-2"></img>

          <h1 className="text-xl font-bold">Step 2</h1>

          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <img src="images/urban-farming-2.jpg" className="h-60 pt-2"></img>

          <h1 className="text-xl font-bold">Step 3</h1>

          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <img src="images/urban-farming-3.png" className="h-60 pt-2"></img>

          <h1 className="text-xl font-bold">Step 4</h1>

          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <img src="images/urban-farming-1.jpg" className="h-60 pt-2"></img>
          <div className="mt-8">
            <a
              href="#"
              className="text-primary hover:underline text-lg font-semibold"
            >
              Learn More About Urban Farming
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
