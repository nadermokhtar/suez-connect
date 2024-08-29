'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

const BookingButton = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadButton = () => {
      if (window.calendar && window.calendar.schedulingButton && buttonRef.current) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XkXOKhKqsgivJiDIvR7sUpC_oEZcgCibjo73I1E-UlZW-hxmEnBAurd2OkXrO5qOTDtgYMT6D?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: buttonRef.current,
        });
      }
    };

    if (window.calendar && window.calendar.schedulingButton) {
      loadButton();
    } else {
      window.addEventListener('load', loadButton);
    }

    return () => {
      window.removeEventListener('load', loadButton);
    };
  }, []);

  return (
    <>
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.calendar && window.calendar.schedulingButton && buttonRef.current) {
            window.calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XkXOKhKqsgivJiDIvR7sUpC_oEZcgCibjo73I1E-UlZW-hxmEnBAurd2OkXrO5qOTDtgYMT6D?gv=true',
              color: '#039BE5',
              label: 'Book an appointment',
              target: buttonRef.current,
            });
          }
        }}
      />
      <div ref={buttonRef}></div>
    </>
  );
};

export default BookingButton;