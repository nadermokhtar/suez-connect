import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <div className="badge badge-primary badge-lg mb-4">Two Distinct Paths</div>
        <h1 className="text-4xl font-bold mb-4">Choose Your Solution</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Nader&apos;s unique background as both a real estate agent and Silicon Valley engineer 
          allows SuezConnect to serve two distinct markets with specialized expertise.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* AI Automation for Agents */}
        <div className="card bg-gradient-to-br from-primary/10 to-primary/5 shadow-2xl border-2 border-primary">
          <div className="card-body">
            <div className="badge badge-primary badge-lg mb-4">Path 1: For Real Estate Professionals</div>
            <h2 className="card-title text-3xl text-primary mb-4">AI Automation Program</h2>
            <p className="mb-6">
              Transform your real estate business from reactive to proactive. Reclaim 40+ hours per week 
              with automation systems built by someone who understands your exact workflow.
            </p>
            
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">What You Get:</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">✓</span>16-week transformation program</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span>Lead generation automation</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span>CRM setup & follow-up sequences</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span>Transaction coordination systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span>Weekly 1:1 coaching calls</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span>Templates & workflows library</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Perfect For:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Solo agents doing $30k-$50k/month</li>
                <li>• Agents working 60+ hours per week</li>
                <li>• Teams wanting to scale systematically</li>
                <li>• Brokers seeking competitive advantage</li>
              </ul>
            </div>

            <div className="bg-base-100 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <span className="font-bold">Investment:</span>
                <span className="text-2xl font-bold text-primary">$4,000</span>
              </div>
              <p className="text-sm mt-2">Payment plans available • 100% money-back guarantee</p>
            </div>

            <div className="card-actions">
              <Link href="/contact?type=automation" className="btn btn-primary btn-block">
                Start AI Automation
              </Link>
            </div>
          </div>
        </div>

        {/* Tech Outsourcing for Companies */}
        <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-2xl border-2 border-secondary">
          <div className="card-body">
            <div className="badge badge-secondary badge-lg mb-4">Path 2: For PropTech Companies</div>
            <h2 className="card-title text-3xl text-secondary mb-4">Tech Talent Outsourcing</h2>
            <p className="mb-6">
              Scale your engineering team with elite Egyptian developers who understand real estate. 
              Get Silicon Valley quality at 70% cost savings.
            </p>
            
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">What You Get:</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-secondary mr-2">✓</span>Vetted senior developers</li>
                <li className="flex items-start"><span className="text-secondary mr-2">✓</span>Real estate domain expertise</li>
                <li className="flex items-start"><span className="text-secondary mr-2">✓</span>Dedicated team management</li>
                <li className="flex items-start"><span className="text-secondary mr-2">✓</span>Agile development processes</li>
                <li className="flex items-start"><span className="text-secondary mr-2">✓</span>US timezone overlap options</li>
                <li className="flex items-start"><span className="text-secondary mr-2">✓</span>Quality assurance & testing</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Perfect For:</h3>
              <ul className="space-y-1 text-sm">
                <li>• PropTech startups & scale-ups</li>
                <li>• Real estate brokerages with tech needs</li>
                <li>• CTOs looking to extend teams</li>
                <li>• Companies building agent-facing tools</li>
              </ul>
            </div>

            <div className="bg-base-100 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <span className="font-bold">Cost Savings:</span>
                <span className="text-2xl font-bold text-secondary">70%</span>
              </div>
              <p className="text-sm mt-2">vs. US rates • No setup fees • Flexible contracts</p>
            </div>

            <div className="card-actions">
              <Link href="/contact?type=outsourcing" className="btn btn-secondary btn-block">
                Scale Tech Teams
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="bg-base-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Nader&apos;s Background Matters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="badge badge-primary badge-lg mb-4">Real Estate Experience</div>
            <h3 className="text-xl font-bold mb-3">Lived the Pain</h3>
            <p className="text-sm">5+ years as a Keller Williams agent means I understand your daily struggles, not just read about them in forums.</p>
          </div>
          <div className="text-center">
            <div className="badge badge-secondary badge-lg mb-4">Silicon Valley Engineering</div>
            <h3 className="text-xl font-bold mb-3">Built at Scale</h3>
            <p className="text-sm">Wayfair & LaunchWare experience building systems that handle millions of users and transactions.</p>
          </div>
          <div className="text-center">
            <div className="badge badge-accent badge-lg mb-4">Global Talent Network</div>
            <h3 className="text-xl font-bold mb-3">500+ Elite Developers</h3>
            <p className="text-sm">Vetted Egyptian developers who combine technical excellence with real estate industry understanding.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How We Work</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">AI Automation Process</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="badge badge-primary">Week 1-2</div>
                <div>
                  <h4 className="font-bold">Discovery & Assessment</h4>
                  <p className="text-sm">Analyze current workflow, identify automation opportunities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="badge badge-primary">Week 3-8</div>
                <div>
                  <h4 className="font-bold">System Setup</h4>
                  <p className="text-sm">CRM configuration, lead capture, follow-up sequences</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="badge badge-primary">Week 9-16</div>
                <div>
                  <h4 className="font-bold">Optimization & Training</h4>
                  <p className="text-sm">Fine-tune systems, train team, ensure adoption</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Tech Outsourcing Process</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="badge badge-secondary">Week 1</div>
                <div>
                  <h4 className="font-bold">Requirements & Team Selection</h4>
                  <p className="text-sm">Define scope, select developers, establish processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="badge badge-secondary">Week 2-4</div>
                <div>
                  <h4 className="font-bold">Team Integration</h4>
                  <p className="text-sm">Onboard developers, establish communication, start development</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="badge badge-secondary">Ongoing</div>
                <div>
                  <h4 className="font-bold">Delivery & Optimization</h4>
                  <p className="text-sm">Sprint delivery, quality assurance, continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Choose Your Path?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Whether you&apos;re an agent ready to reclaim your time or a PropTech company ready to scale, 
          Nader&apos;s unique expertise bridges the gap between real estate reality and tech solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact?type=automation" className="btn btn-primary btn-lg">
            Start AI Automation - $4k
          </Link>
          <Link href="/contact?type=outsourcing" className="btn btn-secondary btn-lg">
            Scale Tech Teams - 70% Savings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;