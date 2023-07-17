import man from "../../assets/man.jpg";

const ContactInfo = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 p-2 md:p-0">
      <div className="md:w-[60%]">
        <img src={man} alt="man photo" className="w-full" />
      </div>
      <div className="py-3 md:py-5 px-3 md:px-10 shadow-2xl md:w-[40%] border border-gray-100 rounded-md md:relative md:right-20 bg-white">
        <h1 className="text-3xl font-barlow font-bold underline underline-offset-8 decoration-2 decoration-red-500 mt-5 mb-10">
          Contact info
        </h1>
        <div className="flex flex-col gap-5 my-5">
          <div className=" border border-gray-200 rounded-tl-md rounded-tr-3xl rounded-b-md group overflow-hidden">
            <div className="group-hover:bg-[#131D4E] p-5 transition duration-300 ease-in-out transform-gpu">
              <h1 className="text-sm font-barlow font-semibold group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                Let&apos;s Talk
              </h1>
              <p className="text-sm group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                mshipan657@gmail.com
              </p>
              <p className="text-sm group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                +880 1622 543390
              </p>
            </div>
          </div>
          <div className=" border border-gray-200 rounded-tl-md rounded-tr-3xl rounded-b-md group overflow-hidden">
            <div className="group-hover:bg-[#131D4E] p-5 transition duration-300 ease-in-out transform-gpu">
              <h1 className="text-sm font-barlow font-semibold group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                Location
              </h1>
              <p className="text-sm group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                Mirpur-2, Dhaka,
              </p>
              <p className="text-sm group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                Bangladesh
              </p>
            </div>
          </div>
          <div className=" border border-gray-200 rounded-tl-md rounded-tr-3xl rounded-b-md group overflow-hidden">
            <div className="group-hover:bg-[#131D4E] p-5 transition duration-300 ease-in-out transform-gpu">
              <h1 className="text-sm font-barlow font-semibold group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                Visit Us
              </h1>
              <p className="text-sm group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                Facebook: https://www.facebook.com/travlerz
              </p>
              <p className="text-sm group-hover:text-white transition duration-300 ease-in-out transform-gpu">
                Twitter: https://www.twitter.com/travlerz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
