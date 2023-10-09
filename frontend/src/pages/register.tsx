import Header from "@/components/header";

export default function Register() {
    return (
        <main>
              <Header/> 
              <div className="flex">
      <div className="flex items-center pl-20 w-3/6">
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-4">Create an account</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-500 font-medium mb-2">Full Name</label>
            <input type="email" id="email" name="text" placeholder="" className="w-96 h-12 px-4 bg-offwhite-light py-2 rounded-lg focus:ring focus:ring-blue-200" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-500 font-medium mb-2">Email Address</label>
            <input type="email" id="email" name="email" placeholder="" className="w-96 h-12 px-4 bg-offwhite-light py-2 rounded-lg focus:ring focus:ring-blue-200" required/>
          </div>
          <div  className="mb-6">
            <label htmlFor="password" className="block text-slate-500 font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="" className="w-96 h-12 bg-offwhite-light px-4 rounded-lg focus:ring focus:ring-blue-200" required/>
          </div>
          <button
            className="h-12 w-96 bg-primary transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold px-20 rounded mb-2"
            type="button"
          > Create Account
          </button>
          <p className="text-slate-500 text-sm">Already have an account? <a href="#" className="text-primary">Log In?</a></p>
        </div>
      </div>
      <div className="w-3/6">
        <img src="images/handimage.png" alt="hand" className="rounded-lg pl-14" />
      </div>


          
          
        </div>
  
  

        </main>
    );
}
