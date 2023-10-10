export default function Header() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center pt-4">
        <div>
          <img src="images/kheti-city-logo.png" alt="Kheti City Logo" />
        </div>
        <div className="flex justify-between text-primary-dark">
          <div className="mx-5 transition duration-300 ease-in-out hover:underline">
            <a href="xyz.com">Products</a>
          </div>
          <div className="mx-5 transition duration-300 ease-in-out hover:underline">
            <a href="xyz.com">Kheti Shikshya</a>
          </div>
          <div className="mx-5 transition duration-300 ease-in-out hover:underline">
            <a href="/login">Login</a>
          </div>
          <div className="mx-5 transition duration-300 ease-in-out hover:underline">
            <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
