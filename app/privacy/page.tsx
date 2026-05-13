export default function Privacy() {
  return (
    <div style={{fontFamily: 'sans-serif', background: '#F7F5F0', minHeight: '100vh'}}>
      <nav style={{background: '#1a1a1a', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '50px'}}>
        <a href="/" style={{fontWeight: 800, fontSize: '18px', color: '#fff', textDecoration: 'none'}}>
          Shelf<span style={{color: '#F4A234'}}>Drop</span>
        </a>
        <a href="/" style={{fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none'}}>← Back to home</a>
      </nav>

      <div style={{maxWidth: '760px', margin: '0 auto', padding: '3rem 2rem'}}>
        <h1 style={{fontSize: '32px', fontWeight: 800, color: '#1a1a1a', marginBottom: '0.5rem', letterSpacing: '-1px'}}>Privacy Policy</h1>
        <p style={{fontSize: '13px', color: '#999', marginBottom: '2rem'}}>Last updated: May 2026</p>

        {[
          {
            title: '1. Information We Collect',
            body: `We collect information you provide directly to us, such as your email address when you sign up for deal alerts. We also automatically collect certain information when you visit ShelfDrop, including your IP address, browser type, operating system, referring URLs, and pages viewed. If you enter a zip code to use our store locator, that zip code is used solely to find nearby stores and is not stored permanently.`
          },
          {
            title: '2. How We Use Your Information',
            body: `We use the information we collect to send you deal alerts and newsletters you have requested, improve and optimize our website, analyze usage patterns and trends, and communicate with you about updates or changes to our service. We do not sell your personal information to third parties.`
          },
          {
            title: '3. Affiliate Disclosure',
            body: `ShelfDrop participates in affiliate marketing programs. This means we earn a commission when you click on links to retailer websites and make a purchase. This comes at no additional cost to you. We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We also participate in affiliate programs with Walmart, Home Depot, Target, Lowe's, Best Buy, and Costco.`
          },
          {
            title: '4. Cookies',
            body: `ShelfDrop uses cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`
          },
          {
            title: '5. Third Party Services',
            body: `We use third party services including Vercel for website hosting, Beehiiv for email newsletter management, and Stripe for payment processing. These services have their own privacy policies governing the use of your information. We encourage you to review their privacy policies.`
          },
          {
            title: '6. Data Retention',
            body: `We retain your email address for as long as you are subscribed to our newsletter or deal alerts. You may unsubscribe at any time by clicking the unsubscribe link in any email we send you. Upon unsubscribing your email address will be removed from our mailing list within 30 days.`
          },
          {
            title: '7. California Privacy Rights (CCPA)',
            body: `If you are a California resident, you have the right to know what personal information we collect, disclose, and sell. You have the right to request deletion of your personal information. You have the right to opt out of the sale of your personal information. ShelfDrop does not sell personal information. To exercise your rights, contact us at hello@shelfdrop.live.`
          },
          {
            title: '8. Children\'s Privacy',
            body: `ShelfDrop is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`
          },
          {
            title: '9. Changes to This Policy',
            body: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the date at the top. Your continued use of ShelfDrop after any changes constitutes your acceptance of the new Privacy Policy.`
          },
          {
            title: '10. Contact Us',
            body: `If you have any questions about this Privacy Policy, please contact us at hello@shelfdrop.live.`
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