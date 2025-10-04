import Image from "next/image";
import Header from "../ui/Headers/Header";

export default function FourCardSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <Header title="Sales & Customer Management" />

      <div className="flex flex-col gap-7 justify-center items-center w-full lg:flex-row">
        <div className="flex flex-col gap-7 w-full h-[150vh] relative">
          <div className="relative flex-1 rounded-2xl rounded-tl-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/2.png"
              alt="Comprehensive Order Tracking"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center text-left text-white font-semibold text-lg bg-black/30 p-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Order Tracking</h3>
                <p className="text-sm text-gray-300 font-normal leading-relaxed">
                  Monitor every stage of your sales orders: from 'New' to 'Picked,' 
                  'Packed,' and 'Shipped.' Gain real-time visibility into fulfillment 
                  progress and keep customers informed.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-1 rounded-2xl rounded-bl-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/3.png"
              alt="Integrated CRM Capabilities"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-center text-left text-white font-semibold text-lg bg-black/30 p-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrated CRM Capabilities</h3>
                <p className="text-sm text-gray-300 font-normal leading-relaxed">
                  Manage customer data, track interactions, and view purchase history 
                  directly within Accurack. Build stronger customer relationships and 
                  personalize sales efforts.
                </p>
              </div>
            </div>
          </div>
        </div>






        <div className="flex flex-col gap-7 w-full h-[150vh] relative">
          <div className="relative flex-1 rounded-2xl rounded-tr-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/1.png"
              alt="Flexible Fulfillment Options"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center text-right text-white font-semibold text-lg bg-black/30 p-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Fulfillment Options</h3>
                <p className="text-sm text-gray-300 font-normal leading-relaxed">
                  Choose between manual assignment for specific control or automatic 
                  workflows to streamline high-volume order processing. Accurack adapts 
                  to your operational needs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-1 rounded-2xl rounded-br-[130px] overflow-hidden">
            <Image
              src="/Images/SalesManagement/2.png"
              alt="Powerful Sales Analytics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-center text-right text-white font-semibold text-lg bg-black/30 p-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Powerful Sales Analytics</h3>
                <p className="text-sm text-gray-300 font-normal leading-relaxed">
                  Access real-time sales performance metrics, identify top-selling 
                  products, analyze customer purchasing patterns, and forecast future 
                  sales with precision. Drive data-driven sales strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
