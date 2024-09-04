import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(/desert-background.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">SuezConnect</h1>
            <p className="mb-5">Empowering startups to reach their goals faster through strategic outsourcing solutions.</p>
            <Link href="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How We Help Startups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Rapid MVP Development', description: 'Accelerate your path to MVP with our skilled engineering teams.' },
              { title: 'Product-Market Fit', description: 'Iterate quickly and efficiently to achieve product-market fit.' },
              { title: 'Talent Connection', description: 'Access the right talent at startup speed without depleting cash reserves.' }
            ].map((item, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-300 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose SuezConnect?</h2>
          <p className="mb-8">We connect you with top-tier talent in Egypt, offering innovative offshore outsourcing solutions at 2-4X lower rates than US markets. Stretch your budget, achieve your goals, and drive innovation without compromising quality.</p>
          <Link href="/services" className="btn btn-secondary">Explore Our Services</Link>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            {[
              { step: 1, title: 'Consultation', description: 'Understand your needs and goals' },
              { step: 2, title: 'Talent Matching', description: 'Connect you with the right team' },
              { step: 3, title: 'Execution', description: 'Deliver results at startup speed' }
            ].map((item, index) => (
              <div key={index} className="text-center mb-8 md:mb-0">
                <div className="rounded-full bg-primary text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-300 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Accelerate Your Startup's Growth?</h2>
          <p className="mb-8">Let's discuss how SuezConnect can help you achieve your goals faster and more efficiently.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
        </div>
      </section>
    </main>
  );
}
