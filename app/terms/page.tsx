export default function Terms() {
  return (
    <div style={{fontFamily: 'sans-serif', background: '#F7F5F0', minHeight: '100vh'}}>
      <nav style={{background: '#1a1a1a', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '50px'}}>
        <a href="/" style={{fontWeight: 800, fontSize: '18px', color: '#fff', textDecoration: 'none'}}>
          Shelf<span style={{color: '#F4A234'}}>Drop</span>
        </a>
        <a href="/" style={{fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none'}}>← Back to home</a>
      </nav>

      <div style={{maxWidth: '760px', margin: '0 auto', padding: '3rem 2rem'}}>
        <h1 style={{fontSize: '32px', fontWeight: 800, color: '#1a1a1a', marginBottom: '0.5rem', letterSpacing: '-1px'}}>Terms of Service</h1>
        <p style={{fontSize: '13px', color: '#999', marginBottom: '2rem'}}>Last updated: May 2026</p>

        {[
          {
            title: '1. Acceptance of Terms',
            body: `By accessing and using ShelfDrop at shelfdrop.live, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time, and your continued use of the site constitutes acceptance of any changes.`
          },
          {
            title: '2. Description of Service',
            body: `ShelfDrop is a clearance deal aggregation platform that collects and displays publicly available pricing and discount information from major US retailers. We provide a store locator feature that helps users find deals available at nearby physical store locations. ShelfDrop is an independent service and is not affiliated with, endorsed by, or sponsored by any of the retailers whose deals we display.`
          },
          {
            title: '3. Affiliate Links',
            body: `ShelfDrop uses affiliate links throughout the website. When you click on a link to a retailer and make a purchase, we may earn a commission at no additional cost to you. All affiliate relationships are disclosed in accordance with FTC guidelines. The presence of affiliate links does not influence which deals we feature or how we rank them.`
          },
          {
            title: '4. Accuracy of Information',
            body: `ShelfDrop makes every effort to ensure that deal information, pricing, and availability data is accurate and up to date. However, we cannot guarantee the accuracy of this information at all times. Prices and availability can change rapidly. Always verify pricing and availability directly on the retailer's website before making a purchase decision or traveling to a store. ShelfDrop is not responsible for any inconvenience caused by inaccurate pricing or availability information.`
          },
          {
            title: '5. User Accounts',
            body: `If you create an account on ShelfDrop, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to terminate accounts at our discretion.`
          },
          {
            title: '6. Subscription Services',
            body: `ShelfDrop offers a Pro membership subscription. Subscriptions are billed monthly or annually as selected at signup. You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. We do not offer refunds for partial billing periods. We reserve the right to change subscription pricing with 30 days notice to existing subscribers.`
          },
          {
            title: '7. Prohibited Uses',
            body: `You agree not to use ShelfDrop to scrape, copy, or redistribute our deal data without permission. You agree not to use automated tools to access the site in a way that places excessive load on our servers. You agree not to attempt to gain unauthorized access to any part of the site or its related systems. You agree not to use the site for any unlawful purpose.`
          },
          {
            title: '8. Intellectual Property',
            body: `The ShelfDrop name, logo, website design, and original content are the property of ShelfDrop and are protected by applicable intellectual property laws. Product names, images, and pricing data belong to their respective retailers. You may not reproduce, distribute, or create derivative works from our original content without explicit written permission.`
          },
          {
            title: '9. Limitation of Liability',
            body: `ShelfDrop is provided on an as-is basis without warranties of any kind. To the fullest extent permitted by law, ShelfDrop shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. This includes but is not limited to damages arising from inaccurate deal information, unavailable products, or decisions made based on information provided by ShelfDrop.`
          },
          {
            title: '10. Governing Law',
            body: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Fresno County, California.`
          },
          {
            title: '11. Contact Us',
            body: `If you have any questions about these Terms of Service, please contact us at hello@shelfdrop.live.`
          },
        ].map(section => (
          <div key={section.title} style={{marginBottom: '2rem'}}>
            <h2 style={{fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem'}}>{section.title}</h2>
            <p style={{fontSize: '14px', color: '#555', lineHeight: 1.8}}>{section.body}</p>
          </div>
        ))}
      </div>

      <div style={{textAlign: 'center', padding: '1rem 2rem 2rem', fontSize: '11px', color: '#aaa'}}>
        <a href="/terms" style={{color: '#F4A234', textDecoration: 'none', marginRight: '1rem'}}>Terms of Service</a>
        <a href="/privacy" style={{color: '#F4A234', textDecoration: 'none'}}>Privacy Policy</a>
      </div>
    </div>
  );
}