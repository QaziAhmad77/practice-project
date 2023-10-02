import Button from './Button';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
      <div className="relative bg-[#FFFFFF] top-[170px] z-10  max-w-[400px] rounded-[16px] font-bodyFont flex flex-col gap-4 py-4 px-8 mx-auto border-[1px] border-gray-200">
        <h1 className="text-[#22A2FF] font-600 text-[40px] text-center">
          Contact Us
        </h1>
        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter your Name"
            className="rounded-[8px] py-3 px-2 border-[1px] border-gray-200"
          />
          <input
            type="text"
            placeholder="Enter your E-Mail Address"
            className="rounded-[8px] py-3 px-2 border-[1px] border-gray-200"
          />
          <textarea
            rows={5}
            type="text"
            placeholder="Enter your message"
            className="rounded-[8px] py-3 px-2 border-[1px] border-gray-200"
          />
          <div className="text-center">
            <Button text="Submit Now" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
