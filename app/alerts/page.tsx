export default function Alerts() {
  return (
    <div style={{fontFamily: 'sans-serif', background: '#F7F5F0', minHeight: '100vh'}}>
      <nav style={{background: '#1a1a1a', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '50px'}}>
        <a href="/" style={{fontWeight: 800, fontSize: '18px', color: '#fff', textDecoration: 'none'}}>
          Shelf<span style={{color: '#F4A234'}}>Drop</span>
        </a>
        <a href="/" style={{fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none'}}>← Back to deals</a>
      </nav>

      <div style={{background: '#1a1a1a', padding: '3rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(244,162,52,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
        <div style={{display: 'inline-block', background: 'rgba(244,162,52,0.15)', color: '#F4A234', border: '1px solid rgba(244,162,52,0.3)', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', position: 'relative'}}>
          Free deal alerts
        </div>
        <h1 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '1rem', position: 'relative'}}>
          Never miss a clearance deal again.
        </h1>
        <p style={{color: 'rgba(255,255,255,0.55)', fontSize: '15px', maxWidth: '460px', margin: '0 auto', lineHeight: 1.6, position: 'relative'}}>
          Get the best clearance finds from Walmart, Home Depot, Target, Lowe's, Costco, Best Buy and Amazon delivered to your inbox. Free, weekly, no spam.
        </p>
      </div>

      <div style={{maxWidth: '600px', margin: '3rem auto', padding: '0 2rem'}}>
        <div style={{background: '#fff', borderRadius: '16px', border: '1px solid #e8e6df', padding: '2rem', marginBottom: '2rem'}}>
          <h2 style={{fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem'}}>What you'll get</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '1rem'}}>
            {[
              ['🔔', 'Weekly deal digest', 'Top 10 clearance finds of the week across all retailers'],
              ['📍', 'Local stock alerts', 'Deals verified in stock at stores near you'],
              ['⚡', 'Flash clearance drops', 'Limited quantity items before they sell out'],
              ['🏷️', 'Deep discount only', 'We only send deals 40% off or more'],
            ].map(([emoji, title, desc]) => (
              <div key={title} style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                <div style={{fontSize: '20px', flexShrink: 0}}>{emoji}</div>
                <div>
                  <div style={{fontSize: '13px', fontWeight: 600, color: '#1a1a1a', marginBottom: '2px'}}>{title}</div>
                  <div style={{fontSize: '12px', color: '#888'}}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background: '#fff', borderRadius: '16px', border: '1px solid #e8e6df', padding: '2rem'}}>
          <div style={{background: '#fff', borderRadius: '16px', border: '1px solid #e8e6df', padding: '2rem'}}>
  <iframe
    src="https://embeds.beehiiv.com/2825603e-c1af-4cd1-8551-43e75cab7c57"
    data-test-id="beehiiv-embed"
    width="100%"
    height="320"
    style={{borderRadius: '8px', border: 'none'}}
  />
</div>
        </div>

        <p style={{textAlign: 'center', fontSize: '11px', color: '#aaa', marginTop: '1rem'}}>
          No spam. Unsubscribe anytime. By signing up you agree to our <a href="/privacy" style={{color: '#F4A234', textDecoration: 'none'}}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}