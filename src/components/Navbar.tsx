"use client";
import { useState } from "react";
import { Eth, Metamask, Profile } from "@/icons/coins";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@radix-ui/react-select";
import { Activity, ChevronDown, Settings, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 left-0 z-50 absolute bg-white shadow-sm p-4 w-full text-black">
      <div className="mx-auto container">
        <div className="flex justify-between items-center">
          {/* Left links for medium and large screens */}
          <div className="md:flex space-x-4 hidden">
            <Link href="#" className="hover:text-gray-400">
              Swap
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Bridge
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Pool
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Products
            </Link>
          </div>

          {/* Right selects (dropdowns) for large screens */}
          <div className="lg:flex items-center space-x-4 hidden">
            <Activity className="bg-gray-100 p-2 rounded-lg w-8 h-8" />
            <SelectDropdown label="Eth" icon={<Eth />} />
            <div className="flex justify-between items-center gap-2 bg-gray-100 p-1 rounded-full">
              <Button className="flex gap-1 bg-gray-100 shadow-none px-2 p-0 rounded-full h-7 text-gray-500">
                <Metamask />
                <span className="sm:inline hidden">2.3 Eth</span>
              </Button>
              <Button className="flex gap-1 bg-white shadow-none px-2 p-0 rounded-full h-7">
                <Profile />
                <span className="sm:inline hidden">0x70..4c3d</span>
                <ChevronDown size={18} />
              </Button>
            </div>
            <Settings className="bg-gray-100 p-2 rounded-lg w-8 h-8" />
          </div>

          {/* Hamburger menu for small and medium screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile and tablet menu */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="hover:text-gray-400">
                Swap
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Bridge
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Pool
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Products
              </Link>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="bg-gray-100 p-2 rounded-lg w-8 h-8" />
                  <SelectDropdown label="Eth" icon={<Eth />} />
                  <Settings className="bg-gray-100 p-2 rounded-lg w-8 h-8" />
                </div>
                <div className="flex justify-between items-center gap-2 bg-gray-100 p-1 rounded-full">
                  <Button className="flex gap-1 bg-gray-100 shadow-none px-2 p-0 rounded-full h-7 text-gray-500">
                    <Metamask />
                    <span className="inline">2.3 Eth</span>
                  </Button>
                  <Button className="flex gap-1 bg-white shadow-none px-2 p-0 rounded-full h-7">
                    <Profile />
                    <span className="inline">0x70..4c3d</span>
                    <ChevronDown size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// SelectDropdown component using shadcn's Select
const SelectDropdown = ({
  label,
  icon,
}: {
  label?: string;
  icon?: React.ReactNode;
}) => (
  <Select>
    <SelectTrigger className="flex items-center gap-1 bg-gray-100 px-2 rounded-lg h-8 hover:text-gray-400">
      <span className="flex items-center gap-1">
        {icon}
        {label}
      </span>
      <ChevronDown className="w-4 h-4" />
    </SelectTrigger>
    <SelectContent className="bg-white shadow-lg p-2 rounded-md text-gray-800">
      <SelectItem value="option1" className="hover:bg-gray-100 p-2">
        Option 1
      </SelectItem>
      <SelectItem value="option2" className="hover:bg-gray-100 p-2">
        Option 2
      </SelectItem>
      <SelectItem value="option3" className="hover:bg-gray-100 p-2">
        Option 3
      </SelectItem>
    </SelectContent>
  </Select>
);

export default Navbar;
