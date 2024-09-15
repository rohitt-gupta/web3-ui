import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="relative bg-[url('/background.png')] bg-white bg-cover bg-center h-screen">
      <div className="flex justify-center items-center h-full">
        <Main />
      </div>
    </div>
  );
}
