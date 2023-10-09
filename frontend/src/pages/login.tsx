export function Login(){
    return (
        <h1>
        <div class="relative">
          <img src="logo.png" alt="logo" class="absolute top-5 left-12 w-20 h-20" />
        </div>
      </h1>
     
      <div class="relative">
        <img src="hand.jpg" alt="hand" class="absolute top-10 right-20 w-50 h-50 rounded-lg " />
      </div>
      
      <div class="relative">
        <div class="absolute top-5 right-20">
          <span class="mr-4 text-slate-500">Product</span>
          <span class="mr-4 text-slate-500">Kheti Shikshya</span>
          <span class="mr-4 text-slate-500">Login</span>
          <span class="text-slate-500">Register</span>
        </div>
      </div>
      
      <div class="min-h-screen flex items-center justify-left bg-gray-100">
        <div class="bg-white p-12 rounded w-80">
          <h2 class="text-2xl font-semibold mb-4">Sign In</h2>
          <div class="mb-4">
            <label for="email" class="block text-slate-500 text-sm font-medium mb-2">Email Address</label>
            <input type="email" id="email" name="email" placeholder="kheticity56@example.com" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" required>
          </div>
          <div  class="mb-6">
            <label for="password" class="block text-slate-500 text-sm font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="********" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" required>
          </div>
          <button
            class="bg-green-500 hover:bg-green-800 text-white font-bold py-1 px-20 rounded focus:outline-none focus:shadow-outline"
            type="button"
          > Sign In
          </button>
          <p class="text-slate-500 text-sm">Don't have an account? <a href="#" class="text-green-500">Sign Up</a></span>
        </div>
      </div>
      
    )
}