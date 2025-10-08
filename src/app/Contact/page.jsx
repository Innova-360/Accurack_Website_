import TransformSection from "@/components/common/Transform";
import GoodCompany from "./_components/GoodCompany";
import ContactUsForm from "./_components/ContactUsForm";



export default function page() {
    return (
        <div>
           <ContactUsForm />

            <GoodCompany />

            <TransformSection />
        </div>
    )
}
