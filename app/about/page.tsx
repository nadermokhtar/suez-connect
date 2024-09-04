import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-neutral">
          About SuezConnect
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4 text-neutral">
            SuezConnect is dedicated to bridging tech opportunities between the
            United States and the Middle East & North Africa (MENA) region. We
            aim to simplify outsourcing for startups, helping them cut costs and
            gain a competitive edge in their early stages.
          </p>
          <p>
            Our unique selling proposition lies in our ability to tap into the
            vibrant tech scene emerging in the MENA region, particularly in
            Egypt, UAE, and Saudi Arabia.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <Image
                src="/nader-mokhtar.jpg" // Make sure to add this image to your public folder
                alt="Nader Mokhtar"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-semibold mb-2">Nader Mokhtar</h3>
              <p className="mb-4">
                Nader Mokhtar is a mechanical engineer turned software engineer
                with over 11 years of diverse experience. After working in
                property management and sales for 6 years and as a software
                engineer for 5 years, Nader founded SuezConnect to help startups
                leverage the power of outsourcing.
              </p>
              <p className="mb-4">
                With his unique background, Nader understands the challenges
                startups face and is passionate about providing solutions that
                enable them to thrive in their early stages.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/nmokhtar/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </Link>
                <Link
                  href="mailto:nader@suezconnect.co"
                  className="btn btn-secondary"
                >
                  Contact Nader
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Why Choose SuezConnect?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Access to a vast talent pool of over 20,000 annual tech graduates
              in Egypt alone
            </li>
            <li>
              Cost savings of 2X to 4X compared to US rates, without
              compromising quality
            </li>
            <li>
              Vetted local vendors in Egypt to ensure seamless integration and
              success
            </li>
            <li>Customized solutions to meet specific business needs</li>
            <li>
              Leverage the growing tech markets in Egypt, UAE, and Saudi Arabia
            </li>
            <li>
              Benefit from government support and initiatives like Egypt&apos;s
              &quot;Future Work is Digital&quot;
            </li>
          </ul>
        </section>

        <section className="bg-base-300 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">
            Our Vision for the Future
          </h2>

          <p>
            At Suez Connect, we&apos;re not just another IT outsourcing company.
            We&apos;re your strategic partner in navigating the complex world of
            technology and business.
          </p>

          <p className="mb-4">
            We&apos;re not just about delivering code; we&apos;re about
            delivering value.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Explore Opportunities with SuezConnect
          </Link>
        </section>
      </div>
    </main>
  );
}
