'use client';
import { useState, useEffect } from 'react';

const STORES = [
  { id: 1, name: 'Home Depot #0482', retailer: 'Home Depot', color: '#F96302', address: '7491 N Blackstone Ave', city: 'Fresno', dist: '2.1', deals: 47, hours: 'Open until 10pm' },
  { id: 2, name: 'Walmart Supercenter', retailer: 'Walmart', color: '#0071CE', address: '5053 N Fresno St', city: 'Fresno', dist: '3.8', deals: 83, hours: 'Open 24 hrs' },
  { id: 3, name: 'Target #T-2841', retailer: 'Target', color: '#CC0000', address: '810 E Champlain Dr', city: 'Fresno', dist: '5.2', deals: 29, hours: 'Open until 11pm' },
  { id: 4, name: "Lowe's #1832", retailer: "Lowe's", color: '#004990', address: '3680 W Shaw Ave', city: 'Fresno', dist: '6.7', deals: 31, hours: 'Open until 9pm' },
  { id: 5, name: 'Costco #1128', retailer: 'Costco', color: '#E31837', address: '4801 W Jacquelyn Ave', city: 'Fresno', dist: '8.1', deals: 12, hours: 'Open until 8:30pm' },
];

const DEALS = [
  { id: 1, storeId: 1, emoji: '🪚', name: 'RYOBI 18V Circular Saw Kit', price: '$39', orig: '$149', save: '74', stock: 'In stock', stockColor: '#2a7a3b' },
  { id: 2, storeId: 1, emoji: '🚿', name: 'Kohler Rain Shower Head', price: '$24', orig: '$134', save: '82', stock: 'Only 3 left', stockColor: '#e67e00' },
  { id: 3, storeId: 1, emoji: '💡', name: 'EcoSmart 65W LED 6-pack', price: '$11', orig: '$44', save: '75', stock: 'In stock', stockColor: '#2a7a3b' },
  { id: 4, storeId: 1, emoji: '🪣', name: 'Behr Marquee Interior Paint 1gal', price: '$18', orig: '$59', save: '69', stock: 'Last 1', stockColor: '#dc2626' },
  { id: 5, storeId: 2, emoji: '📺', name: 'Onn 55" 4K UHD Roku TV', price: '$118', orig: '$298', save: '61', stock: 'In stock', stockColor: '#2a7a3b' },
  { id: 6, storeId: 2, emoji: '🧹', name: 'Bissell PowerForce Vacuum', price: '$29', orig: '$79', save: '63', stock: 'In stock', stockColor: '#2a7a3b' },
  { id: 7, storeId: 3, emoji: '❄️', name: 'Igloo 26qt Roller Cooler', price: '$33', orig: '$59', save: '45', stock: 'In stock', stockColor: '#2a7a3b' },
  { id: 8, storeId: 4, emoji: '🔧', name: 'Craftsman 3/8" Drill Driver', price: '$49', orig: '$129', save: '62', stock: 'Only 2 left', stockColor: '#e67e00' },
];

export default function Locator() {
  const [zip, setZip] = useState('');
  const [radius, setRadius] = useState('10');
  const [searched, setSearched] = useState(false);
  const [selectedStore, setSelectedStore] = useState(STORES[0]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const zipParam = params.get('zip');
    if (zipParam) {
      setZip(zipParam);
      setSearched(true);
    }
  }, []);

  const handleSearch = () => {
    setSearched(true);
  };

  const storeDeals = DEALS.filter(d => d.storeId === selectedStore.id);

  return (
    <div style={{fontFamily: 'sans-serif', background: '#F7F5F0', minHeight: '100vh'}}>

      {/* NAV */}
      <nav style={{background: '#1a1a1a', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '50px'}}>
        <a href="/" style={{fontWeight: 800, fontSize: '18px', color: '#fff', textDecoration: 'none', letterSpacing: '-0.5px'}}>
          Shelf<span style={{color: '#F4A234'}}>Drop</span>
        </a>
        <a href="/" style={{fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none'}}>← Back to all deals</a>
      </nav>

      {/* SEARCH BAR */}
      <div style={{background: '#1a1a1a', padding: '1.25rem 1.5rem 1.5rem'}}>
        <div style={{fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px'}}>
          Find stores near you
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
          <div style={{display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '8px', flex: 1, maxWidth: '320px', overflow: 'hidden'}}>
            <span style={{margin: '0 10px', fontSize: '14px'}}>📍</span>
            <input
              type="text"
              value={zip}
              onChange={e => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Enter zip code..."
              style={{border: 'none', outline: 'none', fontSize: '15px', fontWeight: 500, padding: '11px 0', width: '100%', background: 'transparent'}}
            />
          </div>
          <button
            onClick={handleSearch}
            style={{background: '#F4A234', border: 'none', borderRadius: '8px', color: '#1a1a1a', fontSize: '13px', fontWeight: 500, padding: '0 20px', cursor: 'pointer'}}
          >
            Search
          </button>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px'}}>
          <span style={{fontSize: '12px', color: 'rgba(255,255,255,0.45)'}}>Search radius:</span>
          {['5','10','25','50'].map(r => (
            <button
              key={r}
              onClick={() => setRadius(r)}
              style={{background: radius === r ? 'rgba(244,162,52,0.15)' : 'rgba(255,255,255,0.08)', border: `1px solid ${radius === r ? 'rgba(244,162,52,0.4)' : 'rgba(255,255,255,0.12)'}`, borderRadius: '20px', padding: '4px 12px', fontSize: '12px', color: radius === r ? '#F4A234' : 'rgba(255,255,255,0.5)', cursor: 'pointer'}}
            >
              {r} mi
            </button>
          ))}
        </div>
      </div>

      {searched ? (
        <>
          {/* RESULTS */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 280px'}}>

            {/* MAP PLACEHOLDER */}
            <div style={{background: '#E8E4DC', minHeight: '380px', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)', backgroundSize: '32px 32px'}} />
              <div style={{position: 'absolute', top: '38%', left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.6)'}} />
              <div style={{position: 'absolute', top: '62%', left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.6)'}} />
              <div style={{position: 'absolute', left: '42%', top: 0, bottom: 0, width: '3px', background: 'rgba(255,255,255,0.6)'}} />
              <div style={{position: 'absolute', left: '68%', top: 0, bottom: 0, width: '3px', background: 'rgba(255,255,255,0.6)'}} />
              <div style={{position: 'absolute', left: '52%', top: '50%', transform: 'translate(-50%,-50%)', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(26,26,26,0.07)', border: '1.5px solid rgba(26,26,26,0.12)'}} />
              <div style={{position: 'absolute', left: '52%', top: '50%', transform: 'translate(-50%,-50%)', width: '14px', height: '14px', background: '#1a1a1a', borderRadius: '50%', border: '3px solid #fff'}} />
              {[
                {left:'38%', top:'38%', label:'Home Depot', color:'#F96302'},
                {left:'66%', top:'30%', label:'Walmart', color:'#0071CE'},
                {left:'72%', top:'58%', label:'Target', color:'#CC0000'},
                {left:'28%', top:'65%', label:"Lowe's", color:'#004990'},
              ].map(pin => (
                <div key={pin.label} style={{position: 'absolute', left: pin.left, top: pin.top, transform: 'translate(-50%,-100%)'}}>
                  <div style={{background: '#fff', borderRadius: '8px', padding: '4px 8px', fontSize: '10px', fontWeight: 500, border: `1.5px solid ${pin.color}`, color: pin.color, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <div style={{width: '6px', height: '6px', borderRadius: '50%', background: pin.color}} />
                    {pin.label}
                  </div>
                  <div style={{width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `7px solid ${pin.color}`, margin: '0 auto'}} />
                </div>
              ))}
              <div style={{position: 'absolute', bottom: '12px', left: '12px', background: '#1a1a1a', color: '#fff', borderRadius: '6px', padding: '5px 10px', fontSize: '11px', fontWeight: 500}}>
                Showing stores near <span style={{color: '#F4A234'}}>{zip}</span> · {radius} mi radius
              </div>
            </div>

            {/* STORE LIST */}
            <div style={{background: '#fff', borderLeft: '1px solid #e8e4dc'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #f0ece4', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontSize: '13px', fontWeight: 500}}>Nearby stores</span>
                <span style={{fontSize: '11px', color: '#999'}}>{STORES.length} found</span>
              </div>
              {STORES.map(store => (
                <div
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  style={{padding: '12px 14px', borderBottom: '1px solid #f5f2ec', cursor: 'pointer', background: selectedStore.id === store.id ? '#fffbf5' : '#fff', borderLeft: selectedStore.id === store.id ? '3px solid #F4A234' : '3px solid transparent'}}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                      <div style={{width: '8px', height: '8px', borderRadius: '50%', background: store.color, flexShrink: 0}} />
                      <span style={{fontSize: '13px', fontWeight: 500}}>{store.name}</span>
                    </div>
                    <span style={{fontSize: '11px', color: '#999'}}>{store.dist} mi</span>
                  </div>
                  <div style={{fontSize: '11px', color: '#888', marginBottom: '6px', paddingLeft: '15px'}}>{store.address}, {store.city}</div>
                  <div style={{display: 'flex', gap: '6px', paddingLeft: '15px'}}>
                    <span style={{background: '#EAF3DE', color: '#27500A', borderRadius: '5px', padding: '3px 7px', fontSize: '10px', fontWeight: 500}}>{store.deals} deals in stock</span>
                    <span style={{background: '#F7F5F0', borderRadius: '5px', padding: '3px 7px', fontSize: '10px', color: '#555'}}>{store.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEALS AT SELECTED STORE */}
          <div style={{background: '#F7F5F0'}}>
            <div style={{background: '#1a1a1a', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontSize: '12px', fontWeight: 500, color: '#fff'}}>Clearance deals at this store</span>
              <span style={{fontSize: '11px', color: '#F4A234'}}>{selectedStore.name} · {selectedStore.dist} mi away</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', padding: '10px'}}>
              {storeDeals.length > 0 ? storeDeals.map(deal => (
                <div key={deal.id} style={{background: '#fff', borderRadius: '10px', border: '1px solid #e8e4dc', overflow: 'hidden'}}>
                  <div style={{display: 'flex', gap: '10px', padding: '10px'}}>
                    <div style={{width: '52px', height: '52px', background: '#F7F5F0', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0}}>{deal.emoji}</div>
                    <div style={{flex: 1}}>
                      <div style={{fontSize: '12px', fontWeight: 500, lineHeight: 1.35, marginBottom: '4px'}}>{deal.name}</div>
                      <div style={{display: 'flex', alignItems: 'baseline', gap: '5px'}}>
                        <span style={{fontSize: '16px', fontWeight: 700}}>{deal.price}</span>
                        <span style={{fontSize: '11px', textDecoration: 'line-through', color: '#bbb'}}>{deal.orig}</span>
                        <span style={{fontSize: '10px', color: '#E8320A', fontWeight: 500}}>{deal.save}% off</span>
                      </div>
                    </div>
                  </div>
                  <div style={{borderTop: '1px solid #f0ece4', padding: '7px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                      <div style={{width: '5px', height: '5px', borderRadius: '50%', background: deal.stockColor}} />
                      <span style={{fontSize: '11px', color: deal.stockColor}}>{deal.stock}</span>
                    </div>
                    <button style={{background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px', fontSize: '10px', fontWeight: 500, cursor: 'pointer'}}>View at store →</button>
                  </div>
                </div>
              )) : (
                <div style={{padding: '2rem', color: '#999', fontSize: '13px'}}>No deals tracked at this store yet.</div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <div style={{fontSize: '48px', marginBottom: '1rem'}}>📍</div>
          <h2 style={{fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: '#1a1a1a'}}>Enter your zip code above</h2>
          <p style={{fontSize: '14px', color: '#888', maxWidth: '300px', margin: '0 auto'}}>We'll find stores near you and show you exactly what's in stock on clearance today.</p>
        </div>
      )}

    </div>
  );
}