import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#000" />
            <path
              d="M12 12h16v16H12V12z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-xl font-bold">Relume</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Community</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Learn</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact Sales</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            Start for free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;