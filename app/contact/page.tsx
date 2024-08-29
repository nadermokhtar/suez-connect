import BookingButton from "@/components/BookingButton";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfNxsfIDi3Wd8zrxmZnOHnhv0cLhCj5eSVwn5-ggUtWh5_9Uw/viewform?embedded=true" 
            width="640" 
            height="1985" 
            className="rounded-lg shadow-lg w-full"
          >
            Loading…
          </iframe>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
          <div className="bg-base-200 p-6 rounded-lg shadow-lg">
            <p className="mb-4">Ready to discuss how SuezConnect can help your startup? Book a consultation with us using the button below.</p>
            <BookingButton />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>Email: nader@suezconnect.co</p>
            <p>Phone: +1 (781) 591-7158</p>
            <p>Address: 50 Milk Street, Boston, MA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;