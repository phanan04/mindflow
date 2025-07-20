import { Search } from "lucide-react";

const Header = () => {
  return (
    <header
      id="masthead"
      className="bg-white py-2 pr-0 pl-0
 text-black"
      role="banner"
    >
      <div className="bg-white px-2 py-4 text-center">
        <h1 className="font-serif font-bold text-black text-6xl">
          Simple food
        </h1>

        <nav className="mt-6 flex flex-wrap justify-center items-center gap-6 text-neutral-500 text-sm font-semibold ">
          <a href="#">Home</a>
          <a href="#">Category</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>  

      </div>
    </header>
  );
};

export default Header;
