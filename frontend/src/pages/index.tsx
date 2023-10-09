import Header from "@/components/header";

export default function Home() {
  return (
    <main>
          <Header/>

    <div className="flex h-full">
        <div className="w-1/2">
            <h1 className="text-6xl mt-32 ml-20 font-bold">Meet The Hub Of <br/><span className="text-primary">Urban Farming</span></h1>
            <p className="ml-20 mt-6 text-slate-500 font text-lg leading-6">A thriving community of urban farmers, share your <br/>harvests, connect with farmers, and discover how <br/>urban farming can benefit you & the city.</p>
            <a href="xyz.com">
            <button className="h-12 w-40 bg-primary text-lg text-white ml-20 mt-5 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Join Now</button>
            </a> 
            <a href="xyz.com">
            <button className="h-12 w-40 text-lg text-primary text-lg mt-5 bg-slate-100 rounded-md ml-2 border border-primary border-2 transition duration-300 ease-in-out transform hover:scale-105">Learn More</button></a>
            

        </div>
        
        <div className="flex-end w-1/2">
            <img src="images/homepageimage.png" alt="Fresh Fruits" className="ml-20"/>
        </div>
    </div>
    </main>
  );
}
