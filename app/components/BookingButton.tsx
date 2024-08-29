import Script from 'next/script';

const BookingButton = () => {
  return (
    <>
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      <Script src="https://calendar.google.com/calendar/scheduling-button-script.js" strategy="afterInteractive" />
      <Script id="google-calendar-script" strategy="afterInteractive">
        {`
          (function() {
            var target = document.getElementById('booking-button-container');
            window.addEventListener('load', function() {
              calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XkXOKhKqsgivJiDIvR7sUpC_oEZcgCibjo73I1E-UlZW-hxmEnBAurd2OkXrO5qOTDtgYMT6D?gv=true',
                color: '#039BE5',
                label: 'Book an appointment',
                target,
              });
            });
          })();
        `}
      </Script>
      <div id="booking-button-container"></div>
    </>
  );
};

export default BookingButton;