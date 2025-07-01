"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookingButton from "../components/BookingButton";

const ContactContent = () => {
  const searchParams = useSearchParams();
  const [serviceType, setServiceType] = useState<string>("none");
  
  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "automation" || type === "outsourcing") {
      setServiceType(type);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="text-center mb-12">
        <div className="badge badge-primary badge-lg mb-4">Let&apos;s Connect</div>
        <h1 className="text-4xl font-bold mb-4">
          {serviceType === "automation" && "Transform Your Real Estate Business"}
          {serviceType === "outsourcing" && "Scale Your Tech Team"}
          {serviceType === "none" && "Choose Your Path"}
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          {serviceType === "automation" && "Ready to reclaim 40+ hours per week? Let's discuss your workflow and build a custom automation plan."}
          {serviceType === "outsourcing" && "Need elite developers who understand real estate? Let's explore how to extend your team at 70% cost savings."}
          {serviceType === "none" && "Whether you're an agent seeking automation or a company needing developers, we have the solution."}
        </p>
      </div>

      {/* Service Selection for Direct Visitors */}
      {serviceType === "none" && (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            className="card bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl border-2 border-primary cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => setServiceType("automation")}
          >
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center mb-4">I&apos;m a Real Estate Professional</h2>
              <p className="mb-4">Looking for AI automation to transform my business</p>
              <div className="badge badge-primary">16-week program • $4k investment</div>
            </div>
          </div>
          
          <div 
            className="card bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-xl border-2 border-secondary cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => setServiceType("outsourcing")}
          >
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center mb-4">I&apos;m a PropTech Company</h2>
              <p className="mb-4">Need elite offshore developers with RE expertise</p>
              <div className="badge badge-secondary">70% cost savings • Flexible contracts</div>
            </div>
          </div>
        </div>
      )}

      {/* Automation Contact Form */}
      {serviceType === "automation" && (
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">AI Automation Inquiry</h2>
                <form className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name *</span>
                    </label>
                    <input type="text" placeholder="John Smith" className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email *</span>
                    </label>
                    <input type="email" placeholder="john@remax.com" className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number *</span>
                    </label>
                    <input type="tel" placeholder="(555) 123-4567" className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Current Brokerage</span>
                    </label>
                    <input type="text" placeholder="Keller Williams, RE/MAX, etc." className="input input-bordered" />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Monthly Transaction Volume *</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Select range</option>
                      <option>Less than $20k/month</option>
                      <option>$20k - $30k/month</option>
                      <option>$30k - $50k/month</option>
                      <option>$50k+ /month</option>
                    </select>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Hours Worked Per Week *</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Select range</option>
                      <option>40-50 hours</option>
                      <option>50-60 hours</option>
                      <option>60-70 hours</option>
                      <option>70+ hours</option>
                    </select>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Biggest Time Drain *</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered h-24" 
                      placeholder="What tasks take up most of your time? (e.g., lead follow-up, CRM data entry, transaction coordination)"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-block">
                    Start My Automation Journey
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card bg-primary/10 shadow-xl mb-6">
              <div className="card-body">
                <h3 className="card-title">What Happens Next?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">1.</span>I&apos;ll review your submission within 24 hours</li>
                  <li className="flex items-start"><span className="text-primary mr-2">2.</span>We&apos;ll schedule a 30-min discovery call</li>
                  <li className="flex items-start"><span className="text-primary mr-2">3.</span>I&apos;ll create a custom automation roadmap</li>
                  <li className="flex items-start"><span className="text-primary mr-2">4.</span>You decide if the program is right for you</li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title mb-4">Prefer to Schedule a Call?</h3>
                <p className="mb-4">Book a 15-minute intro call to see if we&apos;re a good fit.</p>
                <BookingButton />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Outsourcing Contact Form */}
      {serviceType === "outsourcing" && (
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Tech Team Scaling Inquiry</h2>
                <form className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name *</span>
                    </label>
                    <input type="text" placeholder="Jane Doe" className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Company Email *</span>
                    </label>
                    <input type="email" placeholder="jane@proptech.com" className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Company Name *</span>
                    </label>
                    <input type="text" placeholder="PropTech Innovations Inc." className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Role *</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Select role</option>
                      <option>CTO / VP Engineering</option>
                      <option>CEO / Founder</option>
                      <option>Engineering Manager</option>
                      <option>Product Manager</option>
                      <option>Other Decision Maker</option>
                    </select>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Company Stage *</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Select stage</option>
                      <option>Pre-seed / Idea Stage</option>
                      <option>Seed (Raised $500k-$2M)</option>
                      <option>Series A (Raised $2M-$15M)</option>
                      <option>Series B+ (Raised $15M+)</option>
                      <option>Established Company</option>
                    </select>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Team Size Needed *</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Select team size</option>
                      <option>1-2 developers</option>
                      <option>3-5 developers</option>
                      <option>6-10 developers</option>
                      <option>10+ developers</option>
                    </select>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tech Stack & Requirements *</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered h-24" 
                      placeholder="e.g., React, Node.js, Python, AWS. Specific real estate integrations needed?"
                    ></textarea>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Timeline *</span>
                    </label>
                    <select className="select select-bordered">
                      <option>When do you need to start?</option>
                      <option>ASAP</option>
                      <option>Within 2 weeks</option>
                      <option>Within 1 month</option>
                      <option>Within 2 months</option>
                      <option>Just exploring options</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="btn btn-secondary btn-block">
                    Get Team Proposal
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card bg-secondary/10 shadow-xl mb-6">
              <div className="card-body">
                <h3 className="card-title">Our Process</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><span className="text-secondary mr-2">→</span>Review requirements within 24 hours</li>
                  <li className="flex items-start"><span className="text-secondary mr-2">→</span>Match you with 3-5 pre-vetted developers</li>
                  <li className="flex items-start"><span className="text-secondary mr-2">→</span>Conduct technical interviews together</li>
                  <li className="flex items-start"><span className="text-secondary mr-2">→</span>Start with a paid trial period</li>
                  <li className="flex items-start"><span className="text-secondary mr-2">→</span>Scale team as needed</li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl mb-6">
              <div className="card-body">
                <h3 className="card-title mb-4">Why Our Developers Excel</h3>
                <div className="space-y-2">
                  <div className="badge badge-outline badge-secondary">Real Estate Domain Knowledge</div>
                  <div className="badge badge-outline badge-secondary">Silicon Valley Standards</div>
                  <div className="badge badge-outline badge-secondary">English Fluency</div>
                  <div className="badge badge-outline badge-secondary">US Time Zone Overlap</div>
                  <div className="badge badge-outline badge-secondary">Agile Experience</div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title mb-4">Direct Contact</h3>
                <p className="text-sm mb-2"><strong>Email:</strong> nader@suezconnect.co</p>
                <p className="text-sm mb-2"><strong>Phone:</strong> +1 (781) 591-7158</p>
                <p className="text-sm mb-4"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nmokhtar/" target="_blank" className="link link-secondary">Connect with Nader</a></p>
                <BookingButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactPage = () => {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4 text-center">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
};

export default ContactPage;