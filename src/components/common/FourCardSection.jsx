import Header from "../ui/Headers/Header";

export default function FourCardSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <Header title="Sales & Customer Management" />

      {/* Four Card Section */}
      <div className="flex gap-7 justify-center items-center w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-7 w-full h-[120vh]">
          <div className="bg-gray-300 rounded-2xl rounded-tl-[130px] flex-1 flex items-center justify-center text-lg font-semibold">
            Aloo
          </div>
          <div className="bg-gray-300 rounded-2xl rounded-bl-[130px] flex-1 flex items-center justify-center text-lg font-semibold">
            aloo
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 w-full h-[120vh]">
          <div className="bg-gray-300 rounded-2xl rounded-tr-[130px] flex-1 flex items-center justify-center text-lg font-semibold">
            khaoge
          </div>
          <div className="bg-gray-300 rounded-2xl rounded-br-[130px] flex-1 flex items-center justify-center text-lg font-semibold">
            haan?
          </div>
        </div>
      </div>
    </div>
  );
}
