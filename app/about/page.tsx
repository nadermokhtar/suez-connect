import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge badge-primary badge-lg mb-4">From Agent to Engineer</div>
          <h1 className="text-4xl font-bold mb-4">
            The Only Tech Partner Who&apos;s Actually Sold Real Estate
          </h1>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Nader Mokhtar combines 5+ years as a Keller Williams agent with Silicon Valley engineering expertise 
            to solve real problems for real estate professionals and PropTech companies.
          </p>
        </div>

        <section className="mb-12">
          <div className="hero bg-base-100 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
              <div className="max-w-sm">
                <Image
                  src="/nader-mokhtar.jpg"
                  alt="Nader Mokhtar"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold">The Journey: Agent → Engineer</h2>
                <div className="py-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="badge badge-primary">2018-2023</div>
                    <div>
                      <h3 className="font-bold">Real Estate Agent, Keller Williams</h3>
                      <p>Worked 70+ hour weeks, experienced feast/famine cycles, understood agent pain points firsthand</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="badge badge-secondary">2019-2024</div>
                    <div>
                      <h3 className="font-bold">Software Engineer, Wayfair & LaunchWare</h3>
                      <p>Built scalable systems, learned automation, gained Silicon Valley engineering experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="badge badge-accent">2024+</div>
                    <div>
                      <h3 className="font-bold">Founded SuezConnect</h3>
                      <p>Bridging real estate expertise with world-class tech talent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Two Problems, One Solution</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="badge badge-primary mb-4">For Real Estate Professionals</div>
                <h3 className="card-title">The Agent Pain I Lived</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Working 12+ hour days, 6-7 days a week</li>
                  <li>Drowning in CRM data entry and follow-ups</li>
                  <li>Feast or famine lead generation cycles</li>
                  <li>No time to work ON the business</li>
                  <li>Tech solutions built by people who never sold a house</li>
                </ul>
                <p className="mt-4 text-sm italic">
                  &ldquo;I spent 5 years experiencing these exact problems. Now I build solutions that actually work 
                  because I understand your daily workflow.&rdquo;
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="badge badge-secondary mb-4">For PropTech Companies</div>
                <h3 className="card-title">The Startup Challenge I Solve</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>US developer costs eating up runway</li>
                  <li>Long hiring timelines slowing growth</li>
                  <li>Engineers without real estate domain knowledge</li>
                  <li>Building features agents don&apos;t actually need</li>
                  <li>Offshore teams that don&apos;t understand the industry</li>
                </ul>
                <p className="mt-4 text-sm italic">
                  &ldquo;I provide Silicon Valley-quality developers who build with real estate expertise built-in, 
                  at 70% cost savings.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">The SuezConnect Advantage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="badge badge-primary mb-4">Real Estate Expertise</div>
                <h3 className="card-title justify-center">Industry Knowledge</h3>
                <p className="text-sm">The only tech partner who&apos;s actually sold houses, managed leads, and closed deals</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="badge badge-secondary mb-4">Silicon Valley Quality</div>
                <h3 className="card-title justify-center">World-Class Engineering</h3>
                <p className="text-sm">Wayfair & LaunchWare experience building systems that scale</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="badge badge-accent mb-4">Elite Global Talent</div>
                <h3 className="card-title justify-center">70% Cost Savings</h3>
                <p className="text-sm">Access to 500+ vetted Egyptian developers at fraction of US costs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you&apos;re an agent drowning in admin work or a PropTech company burning through runway, 
            Nader&apos;s unique background bridges the gap between real estate reality and tech solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?type=automation" className="btn btn-primary">
              Start AI Automation
            </Link>
            <Link href="/contact?type=outsourcing" className="btn btn-secondary">
              Scale Tech Teams
            </Link>
            <Link href="https://www.linkedin.com/in/nmokhtar/" className="btn btn-outline" target="_blank">
              Connect on LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
