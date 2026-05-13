'use client';
import { useState } from 'react';

const ALL_DEALS = [
  {emoji:'🪚', badge:'-74%', store:'Home Depot', href:'/home-depot', name:'RYOBI 18V Circular Saw Kit', price:'$39', orig:'$149', save:'$110', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'📺', badge:'-61%', store:'Walmart', href:'/walmart', name:'Onn 55" 4K UHD Roku TV', price:'$118', orig:'$298', save:'$180', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'🎧', badge:'-55%', store:'Best Buy', href:'/best-buy', name:'Sony WH-1000XM4 Headphones', price:'$168', orig:'$349', save:'$181', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'🌀', badge:'-70%', store:'Costco', href:'/costco', name:'Dyson V8 Cordless Vacuum', price:'$139', orig:'$469', save:'$330', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'🚿', badge:'-82%', store:"Lowe's", href:'/lowes', name:'Kohler Rain Shower Head', price:'$24', orig:'$134', save:'$110', stock:'3 left nearby', stockColor:'#e67e00'},
  {emoji:'❄️', badge:'-45%', store:'Target', href:'/target', name:'Igloo 26qt Roller Cooler', price:'$33', orig:'$59', save:'$26', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'🔨', badge:'-60%', store:'Home Depot', href:'/home-depot', name:'Husky 100pc Mechanics Tool Set', price:'$59', orig:'$149', save:'$90', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'📦', badge:'-72%', store:'Amazon', href:'/amazon', name:'Instant Pot Duo 7-in-1 6qt', price:'$49', orig:'$179', save:'$130', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'📱', badge:'-40%', store:'Best Buy', href:'/best-buy', name:'Samsung Galaxy A54 5G', price:'$239', orig:'$399', save:'$160', stock:'Only 3 left', stockColor:'#e67e00'},
  {emoji:'🧹', badge:'-63%', store:'Walmart', href:'/walmart', name:'Bissell PowerForce Vacuum', price:'$29', orig:'$79', save:'$50', stock:'In stock nearby', stockColor:'#2a7a3b'},
  {emoji:'🔧', badge:'-62%', store:"Lowe's", href:'/lowes', name:'Craftsman 3/8" Drill Driver', price:'$49', orig:'$129', save:'$80', stock:'Only 2 left', stockColor:'#e67e00'},
  {emoji:'⌚', badge:'-65%', store:'Costco', href:'/costco', name:'Garmin Forerunner 55 GPS Watch', price:'$99', orig:'$279', save:'$180', stock:'In stock nearby', stockColor:'#2a7a3b'},
];

const TABS = ['All deals','Walmart','Home Depot',"Lowe's",'Costco','Target','Best Buy','Amazon'];
const TAB_COLORS: Record<string, string> = {
  'Walmart':'#0071CE','Home Depot':'#F96302',"Lowe's":'#004990',
  'Costco':'#E31837','Target':'#CC0000','Best Buy':'#0046BE','Amazon':'#FF9900'
};
const TAB_HREFS: Record<string, string> = {
  'Walmart':'/walmart','Home Depot':'/home-depot',"Lowe's":'/lowes',
  'Costco':'/costco','Target':'/target','Best Buy':'/best-buy','Amazon':'/amazon'
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('All deals');

  const filtered = activeTab === 'All deals'
    ? ALL_DEALS
    : ALL_DEALS.filter(d => d.store === activeTab);

  return (
    <main style={{fontFamily: 'DM Sans, sans-serif', background: '#F7F5F0', minHeight: '100vh', margin: 0, padding: 0}}>

      {/* NAV */}
      <nav style={{background: '#1a1a1a', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px'}}>
        <div style={{fontFamily: 'sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff', letterSpacing: '-0.5px'}}>
          Shelf<span style={{color: '#F4A234'}}>Drop</span>
        </div>
        <div style={{display: 'flex', gap: '24px'}}>
          <a href="#deals" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: 500}}>Deals</a>
          <a href="#stores" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: 500}}>Stores</a>
          <a href="/locator" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: 500}}>Near Me</a>
          <a href="#alerts" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: 500}}>Alerts</a>
        </div>
        <button style={{background: '#F4A234', color: '#1a1a1a', border: 'none', borderRadius: '6px', padding: '7px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer'}}>
          Join Free
        </button>
      </nav>

      {/* HERO */}
      <div style={{background: '#1a1a1a', padding: '3rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(244,162,52,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
        <div style={{display: 'inline-block', background: 'rgba(244,162,52,0.15)', color: '#F4A234', border: '1px solid rgba(244,162,52,0.3)', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', position: 'relative'}}>
          Live clearance tracker
        </div>
        <h1 style={{fontFamily: 'sans-serif', fontSize: '42px', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '1rem', position: 'relative'}}>
          Real clearance.<br /><span style={{color: '#F4A234'}}>Real stores.</span> Near you.
        </h1>
        <p style={{color: 'rgba(255,255,255,0.55)', fontSize: '15px', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: 1.6, position: 'relative'}}>
          We surface deep discounts from 12+ major retailers and show you exactly which local store has it in stock.
        </p>
        <form action="/locator" method="get" style={{display: 'flex', maxWidth: '400px', margin: '0 auto', background: '#fff', borderRadius: '10px', overflow: 'hidden', position: 'relative'}}>
          <div style={{display: 'flex', alignItems: 'center', padding: '0 14px', color: '#888'}}>📍</div>
          <input type="text" name="zip" placeholder="Enter zip code to find nearby stores..." maxLength={5} style={{flex: 1, border: 'none', outline: 'none', fontSize: '15px', padding: '13px 0', background: 'transparent', color: '#1a1a1a'}} />
          <button type="submit" style={{background: '#F4A234', border: 'none', color: '#1a1a1a', fontWeight: 500, fontSize: '14px', padding: '0 20px', cursor: 'pointer'}}>
            Find Stores
          </button>
        </form>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', position: 'relative'}}>
          {[['4,200+','Active deals'],['12','Retailers'],['68%','Avg discount']].map(([num, lbl]) => (
            <div key={lbl} style={{textAlign: 'center'}}>
              <div style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: 700, color: '#F4A234'}}>{num}</div>
              <div style={{fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px', letterSpacing: '0.5px', textTransform: 'uppercase'}}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RETAILER TABS */}
      <div id="deals" style={{display: 'flex', gap: '8px', padding: '1rem 2rem', overflowX: 'auto'}}>
        {TABS.map(tab => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{background: activeTab === tab ? '#1a1a1a' : '#fff', border: `1.5px solid ${activeTab === tab ? '#1a1a1a' : '#e5e3dc'}`, borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', color: activeTab === tab ? '#fff' : '#555'}}
          >
            {tab !== 'All deals' && <div style={{width: '8px', height: '8px', borderRadius: '50%', background: TAB_COLORS[tab]}} />}
            {tab}
          </div>
        ))}
      </div>

      {/* VIEW ALL LINK */}
      {activeTab !== 'All deals' && (
        <div style={{padding: '0 2rem 0.5rem', display: 'flex', justifyContent: 'flex-end'}}>
          <a href={TAB_HREFS[activeTab]} style={{fontSize: '12px', color: '#F4A234', fontWeight: 500, textDecoration: 'none'}}>
            View all {activeTab} deals →
          </a>
        </div>
      )}

      {/* DEAL CARDS */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', padding: '0 2rem'}}>
        {filtered.map((deal) => (
          <div key={deal.name} style={{background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e8e6df', cursor: 'pointer'}}>
            <div style={{background: '#F7F5F0', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', fontSize: '40px'}}>
              {deal.emoji}
              <div style={{position: 'absolute', top: '8px', left: '8px', background: '#E8320A', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '3px 8px', borderRadius: '5px'}}>{deal.badge}</div>
              <div style={{position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,255,255,0.9)', borderRadius: '5px', padding: '3px 7px', fontSize: '10px', fontWeight: 500, color: '#444', border: '1px solid #e8e6df'}}>{deal.store}</div>
            </div>
            <div style={{padding: '12px'}}>
              <div style={{fontSize: '13px', fontWeight: 500, lineHeight: 1.4, marginBottom: '8px'}}>{deal.name}</div>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px'}}>
                <span style={{fontSize: '18px', fontWeight: 700}}>{deal.price}</span>
                <span style={{fontSize: '12px', textDecoration: 'line-through', color: '#aaa'}}>{deal.orig}</span>
              </div>
              <div style={{fontSize: '11px', color: '#E8320A', fontWeight: 500, marginBottom: '8px'}}>You save {deal.save}</div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f0ede6', paddingTop: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <div style={{width: '6px', height: '6px', background: deal.stockColor, borderRadius: '50%'}} />
                  <span style={{fontSize: '11px', color: deal.stockColor}}>{deal.stock}</span>
                </div>
                <a href={deal.href} style={{fontSize: '11px', color: '#F4A234', fontWeight: 500, textDecoration: 'none'}}>View →</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* STORE GRID */}
      <div id="stores" style={{padding: '2rem'}}>
        <div style={{background: '#fff', borderRadius: '14px', border: '1px solid #e8e6df', padding: '1.5rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px'}}>Browse by store</h2>
            <a href="#" style={{fontSize: '12px', color: '#F4A234', fontWeight: 500, textDecoration: 'none'}}>All stores →</a>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '10px'}}>
            {[
              ['🟦','Walmart','842 deals','/walmart'],
              ['🟧','Home Depot','671 deals','/home-depot'],
              ['🟦',"Lowe's",'598 deals','/lowes'],
              ['🔴','Costco','314 deals','/costco'],
              ['🔴','Target','487 deals','/target'],
              ['🟦','Best Buy','229 deals','/best-buy'],
              ['🟨','Amazon','1,204 deals','/amazon'],
            ].map(([icon, name, count, href]) => (
              <a key={name} href={href} style={{background: '#F7F5F0', borderRadius: '10px', padding: '14px 8px', textAlign: 'center', cursor: 'pointer', border: '1.5px solid transparent', textDecoration: 'none', display: 'block'}}>
                <div style={{fontSize: '22px', marginBottom: '4px'}}>{icon}</div>
                <div style={{fontSize: '11px', fontWeight: 500, color: '#444'}}>{name}</div>
                <div style={{fontSize: '10px', color: '#999', marginTop: '2px'}}>{count}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ALERT BANNER */}
      <div id="alerts" style={{margin: '0 2rem 2rem', background: '#1a1a1a', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '36px', height: '36px', background: 'rgba(244,162,52,0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0}}>🔔</div>
          <div>
            <h3 style={{fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '2px'}}>Get deal alerts before they sell out</h3>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0}}>Free email alerts when new clearance drops at your local stores</p>
          </div>
        </div>
        <a href="/alerts" style={{background: '#F4A234', border: 'none', color: '#1a1a1a', padding: '9px 18px', borderRadius: '7px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, textDecoration: 'none'}}>
  Set Up Alerts
</a>
      </div>

     {/* FOOTER */}
<div style={{textAlign: 'center', padding: '1rem 2rem 2rem', fontSize: '11px', color: '#aaa', lineHeight: 1.6}}>
  <p style={{marginBottom: '0.5rem'}}>ShelfDrop finds and surfaces public clearance pricing. We may earn a commission on affiliate links at no extra cost to you. Prices and availability verified every 4 hours.</p>
  <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem'}}>
    <a href="/privacy" style={{color: '#F4A234', textDecoration: 'none', fontSize: '11px'}}>Privacy Policy</a>
    <a href="/terms" style={{color: '#F4A234', textDecoration: 'none', fontSize: '11px'}}>Terms of Service</a>
    <a href="mailto:hello@shelfdrop.live" style={{color: '#F4A234', textDecoration: 'none', fontSize: '11px'}}>Contact</a>
  </div>
</div>

    </main>
  );
}