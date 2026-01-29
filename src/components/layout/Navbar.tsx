import { ModeToggle } from "../mode-toggoler";

// components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className=" px-[70px] bg-gray-900 text-white py-2 flex justify-between items-center shadow">
      <div className="text-lg font-semibold">
        🌐 Task <span>Mastar</span>
      </div>
      <div className="space-x-4 text-sm">
        <a href="/" className="hover:text-yellow-400">
          Tasks
        </a>
        <a href="/users" className="hover:text-yellow-400">
          Users
        </a>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
