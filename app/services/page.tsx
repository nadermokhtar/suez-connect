import Link from 'next/link';

const services = [
  {
    title: 'Rapid MVP Development',
    description: 'Accelerate your path to MVP with our skilled engineering teams. We help startups quickly build and launch their minimum viable products, allowing for faster market entry and validation.',
    benefits: [
      'Quick turnaround times',
      'Cost-effective development',
      'Access to experienced developers',
      'Flexible scaling of resources'
    ]
  },
  {
    title: 'Product-Market Fit',
    description: 'Iterate quickly and efficiently to achieve product-market fit. Our teams work closely with you to gather user feedback, implement changes, and refine your product to meet market demands.',
    benefits: [
      'Rapid iteration cycles',
      'User-centric development approach',
      'Data-driven decision making',
      'Continuous improvement processes'
    ]
  },
  {
    title: 'Talent Connection',
    description: 'Access the right talent at startup speed without depleting cash reserves. We connect you with top-tier professionals in engineering, product design, and auxiliary roles from the MENA region.',
    benefits: [
      'Cost savings of 2-4X compared to US rates',
      'Vetted, high-quality talent pool',
      'Flexible engagement models',
      'Reduced time-to-hire'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
        At SuezConnect, we offer comprehensive outsourcing solutions tailored to the unique needs of startups. 
        Our services are designed to help you accelerate growth, optimize resources, and achieve your business goals.
      </p>

      {services.map((service, index) => (
        <div key={index} className="mb-16 bg-base-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-primary">{service.title}</h2>
          <p className="mb-6">{service.description}</p>
          <h3 className="text-xl font-semibold mb-3">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {service.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}

      <section className="bg-base-200 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Why Choose SuezConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h3>
            <p>Leverage top talent at 2-4X lower rates than US markets without compromising quality.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Vast Talent Pool</h3>
            <p>Access a pool of over 20,000 annual tech graduates from the MENA region.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Vetted Professionals</h3>
            <p>Work with pre-screened, experienced professionals to ensure project success.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Engagement</h3>
            <p>Choose from various engagement models to suit your project needs and budget.</p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Accelerate Your Startup's Growth?</h2>
        <p className="mb-8">Let's discuss how SuezConnect can help you achieve your goals faster and more efficiently.</p>
        <Link href="/contact" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
      </div>
    </div>
  );
};

export default ServicesPage;