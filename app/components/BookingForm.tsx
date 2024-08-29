const BookingForm = () => {
    return (
      <div className="w-full max-w-3xl mx-auto bg-base-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Book a Consultation</h2>
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XkXOKhKqsgivJiDIvR7sUpC_oEZcgCibjo73I1E-UlZW-hxmEnBAurd2OkXrO5qOTDtgYMT6D?gv=true" 
          style={{border: 0}} 
          width="100%" 
          height="600" 
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>
    );
  };
  
  export default BookingForm;