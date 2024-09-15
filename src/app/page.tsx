import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center bg-white h-screen bg-[url('/background.png')]">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content in the center */}
      <div className="flex justify-center items-center h-full">
        <Main />
      </div>
    </div>
  );
}
