import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MapComponent from "@/components/MapComponent";
import Navbar from "@/components/Navbar";
import { Protected } from "@/utils/ProtectedRoutes";
import React from "react";

const Page = () => {
  return (
    <Protected>
      <Navbar />
      <section className='w-full h-full'>
        <div className='w-full h-full px-40  max-[480px]:px-[20px] max-[890px]:px-20'>
          <div className=' w-full  h-full flex justify-between max-[480px]:flex-col max-[480px]:justify-center max-[480px]:items-center'>
            <ContactForm />
            <MapComponent />
          </div>
        </div>
      </section>
      <Footer />
    </Protected>
  );
};

export default Page;
