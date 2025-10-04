import Image from "next/image";
import Header from "../ui/Headers/Header";

export default function FourCardSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <Header title="Sales & Customer Management" />

      {/* Four Card Section */}
      <div className="flex gap-7 justify-center items-center w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-7 w-full h-[150vh] relative">
          <div className="relative flex-1 rounded-2xl rounded-tl-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/1.png"
              alt="Aloo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg bg-black/20">
              Aloo
            </div>
          </div>
          <div className="relative flex-1 rounded-2xl rounded-bl-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/2.png"
              alt="aloo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg bg-black/20">
              aloo
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 w-full h-[150vh] relative">
          <div className="relative flex-1 rounded-2xl rounded-tr-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/3.png"
              alt="khaoge"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg bg-black/20">
              khaoge
            </div>
          </div>
          <div className="relative flex-1 rounded-2xl rounded-br-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/1.png"
              alt="haan?"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg bg-black/20">
              haan?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
