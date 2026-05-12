export default function Amazon() {
  const deals = [
    {emoji:'📦', badge:'-72%', name:'Instant Pot Duo 7-in-1 6qt', price:'$49', orig:'$179', save:'$130', stock:'In stock', stockColor:'#2a7a3b'},
    {emoji:'🔥', badge:'-65%', name:'Fire TV Stick 4K Max', price:'$24', orig:'$69', save:'$45', stock:'In stock', stockColor:'#2a7a3b'},
    {emoji:'🎙️', badge:'-60%', name:'Echo Dot 5th Gen Smart Speaker', price:'$19', orig:'$49', save:'$30', stock:'In stock', stockColor:'#2a7a3b'},
    {emoji:'📚', badge:'-55%', name:'Kindle Paperwhite 16GB', price:'$89', orig:'$199', save:'$110', stock:'In stock', stockColor:'#2a7a3b'},
    {emoji:'🏋️', badge:'-70%', name:'Bowflex SelectTech 552 Dumbbells', price:'$179', orig:'$599', save:'$420', stock:'Only 6 left', stockColor:'#e67e00'},
    {emoji:'🧹', badge:'-58%', name:'iRobot Roomba i3 Robot Vacuum', price:'$149', orig:'$349', save:'$200', stock:'In stock', stockColor:'#2a7a3b'},
  ];
  return (
    <div style={{fontFamily:'sans-serif', background:'#F7F5F0', minHeight:'100vh'}}>
      <nav style={{background:'#1a1a1a', padding:'0 1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between', height:'50px'}}>
        <a href="/" style={{fontWeight:800, fontSize:'18px', color:'#fff', textDecoration:'none'}}>Shelf<span style={{color:'#F4A234'}}>Drop</span></a>
        <a href="/" style={{fontSize:'12px', color:'rgba(255,255,255,0.5)', textDecoration:'none'}}>← Back to all deals</a>
      </nav>
      <div style={{background:'#232F3E', padding:'2rem 2rem 2.5rem'}}>
        <div style={{display:'inline-block', background:'rgba(255,255,255,0.15)', color:'#fff', borderRadius:'20px', padding:'4px 12px', fontSize:'11px', fontWeight:500, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'0.75rem'}}>Clearance tracker</div>
        <h1 style={{fontSize:'32px', fontWeight:800, color:'#fff', margin:'0 0 0.5rem', letterSpacing:'-1px'}}>Amazon Clearance</h1>
        <p style={{color:'rgba(255,255,255,0.75)', fontSize:'14px', margin:'0 0 1.5rem'}}>{deals.length} clearance deals tracked today · Updated every 4 hours</p>
        <div style={{display:'flex', gap:'1rem'}}>
          <a href="#" style={{background:'#FF9900', color:'#1a1a1a', borderRadius:'8px', padding:'9px 18px', fontSize:'13px', fontWeight:600, textDecoration:'none'}}>Shop on Amazon →</a>
          <div style={{background:'rgba(255,255,255,0.15)', color:'#fff', borderRadius:'8px', padding:'9px 18px', fontSize:'13px', fontWeight:500}}>1,204 deals available</div>
        </div>
      </div>
      <div style={{background:'#fff', borderBottom:'1px solid #e8e4dc', padding:'0.75rem 2rem', display:'flex', gap:'8px', overflowX:'auto'}}>
        {['All','Kitchen','Smart Home','Electronics','Fitness','Books'].map((cat,i) => (
          <div key={cat} style={{background:i===0?'#1a1a1a':'#F7F5F0', color:i===0?'#fff':'#555', borderRadius:'6px', padding:'6px 14px', fontSize:'12px', fontWeight:500, cursor:'pointer', whiteSpace:'nowrap'}}>{cat}</div>
        ))}
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'12px', padding:'1.5rem 2rem'}}>
        {deals.map(deal => (
          <div key={deal.name} style={{background:'#fff', borderRadius:'12px', overflow:'hidden', border:'1px solid #e8e6df', cursor:'pointer'}}>
            <div style={{background:'#F7F5F0', height:'130px', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', fontSize:'40px'}}>
              {deal.emoji}
              <div style={{position:'absolute', top:'8px', left:'8px', background:'#E8320A', color:'#fff', fontSize:'11px', fontWeight:500, padding:'3px 8px', borderRadius:'5px'}}>{deal.badge}</div>
            </div>
            <div style={{padding:'12px'}}>
              <div style={{fontSize:'13px', fontWeight:500, lineHeight:1.4, marginBottom:'8px'}}>{deal.name}</div>
              <div style={{display:'flex', alignItems:'baseline', gap:'6px', marginBottom:'4px'}}>
                <span style={{fontSize:'18px', fontWeight:700}}>{deal.price}</span>
                <span style={{fontSize:'12px', textDecoration:'line-through', color:'#aaa'}}>{deal.orig}</span>
              </div>
              <div style={{fontSize:'11px', color:'#E8320A', fontWeight:500, marginBottom:'8px'}}>You save {deal.save}</div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid #f0ede6', paddingTop:'8px'}}>
                <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                  <div style={{width:'6px', height:'6px', background:deal.stockColor, borderRadius:'50%'}} />
                  <span style={{fontSize:'11px', color:deal.stockColor}}>{deal.stock}</span>
                </div>
                <a href="#" style={{fontSize:'11px', color:'#F4A234', fontWeight:500, textDecoration:'none'}}>View →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}