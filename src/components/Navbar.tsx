"use client";
import { useState } from "react";
import { Eth, Metamask, Profile } from "@/icons/coins";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Activity, ChevronDown, Settings, Menu, X, Bitcoin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 left-0 z-50 fixed bg-white shadow-sm p-4 w-full text-black">
      <div className="mx-auto container">
        <div className="flex justify-between items-center">
          {/* Left links for medium and large screens */}
          <div className="md:flex space-x-4 hidden">
            {['Swap', 'Bridge', 'Pool', 'Products'].map((item) => (
              <Link key={item} href="#" className={cn("hover:bg-gray-100 p-2 px-4 text-sm font-medium rounded-lg transition-all", item === "Swap" ? "bg-gray-100 " : "")}>
                {item}
              </Link>
            ))}
          </div>

          <div className="lg:flex justify-center items-center space-x-4 hidden">
            <Activity className="bg-gray-100 p-2 rounded-lg w-8 min-w-fit h-8" />
            <SelectDropdown label="Eth" icon={<Eth />} />
            <div className="flex justify-between items-center gap-2 bg-gray-100 px-2 p-1 rounded-full">
              <Button className="flex gap-1 bg-gray-100 hover:bg-gray-100/50 shadow-none px-2 p-0 rounded-full h-7 text-gray-500">
                <Metamask />
                <span className="sm:inline hidden">2.3 Eth</span>
              </Button>
              <Button className="flex gap-1 bg-white hover:bg-gray-100 shadow-none px-2 py-0 rounded-full h-7">
                <Profile />
                <span className="sm:inline hidden">0x70..4c3d</span>
                <ChevronDown size={18} />
              </Button>
            </div>
            <Settings className="bg-gray-100 p-2 rounded-lg w-8 min-w-fit h-8" />
          </div>

          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {['Swap', 'Bridge', 'Pool', 'Products'].map((item) => (
                <Link key={item} href="#" className="hover:text-gray-400">
                  {item}
                </Link>
              ))}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="bg-gray-100 p-2 rounded-lg w-8 h-8" />
                  <SelectDropdown label="Eth" icon={<Eth />} />
                  <Settings className="bg-gray-100 p-2 rounded-lg w-8 h-8" />
                </div>
                <div className="flex justify-between items-center gap-2 bg-gray-100 p-1 rounded-full">
                  <Button className="flex gap-1 bg-gray-100 shadow-none px-2 p-0 rounded-full h-7 text-gray-500">
                    <Metamask />
                    <span>2.3 Eth</span>
                  </Button>
                  <Button className="flex gap-1 bg-white shadow-none px-2 p-0 rounded-full h-7">
                    <Profile />
                    <span>0x70..4c3d</span>
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

const SelectDropdown = ({
  label,
  icon,
}: {
  label?: string;
  icon?: React.ReactNode;
}) => (
  <Select>
    <SelectTrigger className="flex items-center gap-1 bg-gray-100 px-2 rounded-lg h-8 hover:text-gray-400">
      <div className="flex justify-center items-center gap-2">
        <span className="w-4 h-4">{icon}</span>
        <span>{label}</span>
      </div>
    </SelectTrigger>
    <SelectContent className="bg-white shadow-lg p-2 rounded-md text-gray-800">
      {[
        { value: 'ethereum', name: 'Ethereum', Icon: Eth },
        { value: 'bitcoin', name: 'Bitcoin', Icon: Bitcoin },
        { value: 'litecoin', name: 'Litecoin', Icon: Eth },
        { value: 'ripple', name: 'Ripple', Icon: Eth },
        { value: 'dogecoin', name: 'Dogecoin', Icon: Eth }
      ].map(({ value, name, Icon }) => (
        <SelectItem key={value} value={value} className="hover:bg-gray-100 p-2">
          <span className="flex justify-center items-center gap-2">
            <span className="w-4 h-4"><Icon /></span>
            <span>{name}</span>
          </span>
        </SelectItem>
      ))}
    </SelectContent>
  </Select >
);

export default Navbar;
