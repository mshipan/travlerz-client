const ContactForm = () => {
  return (
    <div className="container mx-auto mt-20 p-2 md:p-0">
      <div className="shadow-xl p-10 rounded-md border border-red-100 md:w-[65%] mx-auto">
        <div className="mb-5">
          <h1 className="text-xl font-barlow font-bold">
            Feel free to contact with us
          </h1>
          <p className="text-sm font-barlow">
            Your emil address is secure to us.
          </p>
        </div>
        <div className="font-barlow">
          <form className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row  gap-5">
              <div className="form-control">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="py-2 px-4 border border-red-300 rounded-full outline-none"
                  />
                </div>
              </div>
              <div className="form-control">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Email:</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="py-2 px-4 border border-red-300 rounded-full outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <textarea
                name="message"
                placeholder="Your message"
                cols="30"
                rows="10"
                className="py-2 px-4 border border-red-300 rounded-2xl outline-none"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Send Message"
                className="bg-red-500 hover:bg-white border border-red-500 text-white hover:text-red-500 font-semibold px-7 py-2 rounded-full duration-500 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
