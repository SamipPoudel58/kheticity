export default function Header() {
  return (
    <main>
      <div className="flex">
        <img
          src="images/kheti-city-logo.png"
          alt="Kheti City Logo"
          className="pl-20 pt-8"
        />
        <div className="flex pt-14 justify-end w-10/12 text-primary-dark">
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
    </main>
  );
}
