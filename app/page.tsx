import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="badge badge-primary badge-lg mb-2">Former Real Estate Agent</div>
              <div className="badge badge-secondary badge-lg mb-2 ml-2">Software Engineer</div>
            </div>
            <h1 className="mb-6 text-3xl md:text-5xl font-bold">From Agent to Engineer:<br/>Transforming Real Estate with Tech</h1>
            <p className="mb-8 text-lg">Nader combines 5+ years as a Keller Williams agent with Silicon Valley engineering expertise to serve two critical needs in real estate.</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h2 className="card-title text-primary">For Real Estate Professionals</h2>
                  <p className="text-left">Struggling with 12+ hour days? Reclaim 40+ hours/week with AI automation built by someone who understands your workflow.</p>
                  <div className="card-actions justify-start">
                    <Link href="/contact?type=automation" className="btn btn-primary">Start AI Automation</Link>
                  </div>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h2 className="card-title text-secondary">For PropTech Companies</h2>
                  <p className="text-left">Need real estate expertise + elite developers? Save 70% on costs while accessing talent that understands your industry.</p>
                  <div className="card-actions justify-start">
                    <Link href="/contact?type=outsourcing" className="btn btn-secondary">Scale Tech Teams</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm opacity-70">Trusted by 50+ companies • 95% client retention • 5.0/5 rating</p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="stats shadow w-full">
            <div className="stat place-items-center">
              <div className="stat-title">Time Saved (Agents)</div>
              <div className="stat-value text-primary">40+</div>
              <div className="stat-desc">hours per week</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title">Cost Savings (PropTech)</div>
              <div className="stat-value text-secondary">70%</div>
              <div className="stat-desc">vs. US rates</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title">Real Estate Experience</div>
              <div className="stat-value text-accent">5+</div>
              <div className="stat-desc">years as agent</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Two Solutions, One Expert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl border-2 border-primary">
              <div className="card-body">
                <div className="badge badge-primary mb-4">For Agents</div>
                <h3 className="card-title text-primary">AI Automation Program</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>16-week transformation program</li>
                  <li>Reclaim 40+ hours per week</li>
                  <li>Lead generation on autopilot</li>
                  <li>CRM automation & follow-up</li>
                  <li>$4k investment with payment plans</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                  <Link href="/contact?type=automation" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl border-2 border-secondary">
              <div className="card-body">
                <div className="badge badge-secondary mb-4">For Companies</div>
                <h3 className="card-title text-secondary">Tech Talent Outsourcing</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Elite Egyptian developers</li>
                  <li>70% cost savings vs US rates</li>
                  <li>Real estate domain expertise</li>
                  <li>MVP development & scaling</li>
                  <li>Dedicated team management</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                  <Link href="/contact?type=outsourcing" className="btn btn-secondary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-300 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose SuezConnect?
          </h2>
          <p className="mb-12">
            We connect you with top-tier talent in Egypt, offering innovative
            offshore outsourcing solutions at 2-4X lower rates than US markets.
            Stretch your budget, achieve your goals, and drive innovation
            without compromising quality.
          </p>
          <Link href="/services" className="btn btn-secondary">
            Explore Our Services
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <div className="badge badge-primary mb-2">Agent Success</div>
                <div className="avatar mb-4 mx-auto">
                  <div className="w-16 rounded-full">
                    <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" alt="Lisa Martinez" width={64} height={64} />
                  </div>
                </div>
                <h3 className="card-title text-sm">Lisa Martinez, RE/MAX Agent</h3>
                <p className="text-sm italic">&ldquo;Went from 70-hour weeks to 30 hours while doubling my lead flow. Nader gets the real estate workflow like no other tech person.&rdquo;</p>
                <div className="rating rating-sm">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <div className="badge badge-secondary mb-2">PropTech Success</div>
                <div className="avatar mb-4 mx-auto">
                  <div className="w-16 rounded-full">
                    <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" alt="Michael Rodriguez" width={64} height={64} />
                  </div>
                </div>
                <h3 className="card-title text-sm">Michael Rodriguez, CTO at RealtyFlow</h3>
                <p className="text-sm italic">&ldquo;Finally found developers who understand real estate. Cut costs 65% while building features agents actually want.&rdquo;</p>
                <div className="rating rating-sm">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <div className="badge badge-accent mb-2">Broker Success</div>
                <div className="avatar mb-4 mx-auto">
                  <div className="w-16 rounded-full">
                    <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=David" alt="David Kim" width={64} height={64} />
                  </div>
                </div>
                <h3 className="card-title text-sm">David Kim, Keller Williams Team Lead</h3>
                <p className="text-sm italic">&ldquo;My entire team now uses Nader&apos;s automation. We&apos;re closing 40% more deals with half the admin work.&rdquo;</p>
                <div className="rating rating-sm">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <div className="badge badge-primary">Trusted by 50+ Companies</div>
            <div className="badge badge-secondary">95% Client Retention</div>
            <div className="badge badge-accent">4.9/5 Average Rating</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="badge badge-primary badge-lg mb-4">1</div>
              <h3 className="font-bold mb-2">Consultation</h3>
              <p>Understand your needs and goals</p>
            </div>
            <div className="text-center">
              <div className="badge badge-primary badge-lg mb-4">2</div>
              <h3 className="font-bold mb-2">Talent Matching</h3>
              <p>Connect you with the right team</p>
            </div>
            <div className="text-center">
              <div className="badge badge-primary badge-lg mb-4">3</div>
              <h3 className="font-bold mb-2">Execution</h3>
              <p>Deliver results at startup speed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-300 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Accelerate Your Startup&apos;s Growth?
          </h2>
          <p className="mb-12">
            Let&apos;s discuss how SuezConnect can help you achieve your goals faster
            and more efficiently.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
