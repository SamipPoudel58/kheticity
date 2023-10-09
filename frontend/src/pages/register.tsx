export default function Register() {
    return (
        <main>
              <h1>
    <div className="relative">
      <img src="logo.png" alt="logo" className="absolute top-5 left-12 w-20 h-20" />
    </div>
  </h1>
 
  <div className="relative">
    <img src="hand.jpg" alt="hand" className="absolute top-10 right-20 w-50 h-50 rounded-lg " />
  </div>
  
  <div className="relative">
    <div className="absolute top-5 right-20">
      <span className="mr-4 text-slate-500">Product</span>
      <span className="mr-4 text-slate-500">Kheti Shikshya</span>
      <span className="mr-4 text-slate-500">Login</span>
      <span className="text-slate-500">Register</span>
    </div>
  </div>
  
  <div className="min-h-screen flex items-center justify-left bg-gray-100 ">
      <div className="bg-white p-12 rounded w-100">
          <h1 className="text-2xl font-semibold mb-6">Create an Account</h1>
          <form>
              <div className="mb-4">
                  <label for="full_name" className="block text-slate-500 text-sm font-medium mb-2">Full Name</label>
                  <input type="text" id="full_name" name="full_name" placeholder="Kheti City" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" required>
              </div>
              <div className="mb-4">
                  <label for="email" className="block text-slate-500 text-sm font-medium mb-2">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="kheticity56@example.com" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" required>
              </div>
              <div className="mb-6">
                  <label for="password" className="block text-slate-500 text-sm font-medium mb-2">Password</label>
                  <input type="password" id="password" name="password" placeholder="********" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" required>
              </div>
              <div className="flex items-center justify-between">
                  <button  className="bg-green-500 hover:bg-green-800 text-white font-bold py-1 px-20 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >Create Account
                  </button>
              </div>
          </form>
          <p className="text-slate-500 text-sm">Already have an account? <a href="#" className="text-green-500">Log In</a></p>
      </div>
  </div>

        </main>
    );
}
