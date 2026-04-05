import React, { useState } from 'react';

const CHECKOUT_URL = 'https://coly7qmut2gjw7uzqrxpwktpg40ywjju.lambda-url.ap-southeast-2.on.aws/';

export const WFAIFrontDoor = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const startCheckout = async () => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email || undefined }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'No checkout URL returned.');
      }
    } catch (err: any) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section style={{
      background: '#0f0e0d',
      borderBottom: '1px solid #2a2620',
      fontFamily: "'DM Sans', Georgia, sans-serif",
    }}>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 0, minHeight: 480 }}>

          {/* LEFT — headline + proof */}
          <div style={{ padding: '64px 48px 64px 0', borderRight: '1px solid #2a2620' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6a8f60', display: 'inline-block', animation: 'wfpulse 2.4s ease-in-out infinite' }} />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6a8f60', fontFamily: 'DM Sans, sans-serif' }}>Now available</span>
            </div>

            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(30px,4vw,54px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#f7f4ef', marginBottom: 24, fontWeight: 400 }}>
              AI tools built for<br />
              <em style={{ color: '#6a8f60', fontStyle: 'italic' }}>working families</em> —<br />
              not just workplaces.
            </h2>

            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: 'rgba(247,244,239,0.65)', maxWidth: 480, marginBottom: 40, fontFamily: 'DM Sans, sans-serif' }}>
              WorkFamilyAI gives parents and carers access to the same AI advantage professionals already have. Practical, private, designed for real life.
            </p>

            {/* Proof points */}
            {[
              ['Decisions get easier', 'NDIS plans, school meetings, medical appointments — navigate with confidence.'],
              ['Time comes back', 'AI drafts letters, summarises reports, and plans schedules in seconds.'],
              ['Your data stays yours', 'No profiles sold. No ads. Privacy-first infrastructure.'],
            ].map(([title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid #2a2620', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6a8f60" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="10" cy="10" r="8"/><path d="M7 10l2 2 4-4"/>
                </svg>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 15, color: '#f7f4ef', marginBottom: 3, fontFamily: 'DM Sans, sans-serif' }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(247,244,239,0.55)', fontFamily: 'DM Sans, sans-serif' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — buy card */}
          <div style={{ padding: '64px 0 64px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#4a6741', color: '#fff', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 2, width: 'fit-content', fontFamily: 'DM Sans, sans-serif' }}>
              Starter Pack
            </div>

            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, lineHeight: 1.2, color: '#f7f4ef', fontWeight: 400 }}>
              WFAI Starter<br />— everything to begin.
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontSize: 16, color: 'rgba(247,244,239,0.5)', fontFamily: 'DM Sans, sans-serif' }}>A$</span>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 52, color: '#f7f4ef', letterSpacing: '-0.03em', fontWeight: 400 }}>79</span>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(247,244,239,0.45)', marginTop: 4, fontFamily: 'DM Sans, sans-serif' }}>One-time. No subscription.</div>
            </div>

            <div style={{ height: 1, background: '#2a2620' }} />

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Full AI toolkit — 12 months', 'Family communication templates', 'NDIS plan navigation guide', 'Priority onboarding session', 'All future updates included'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(247,244,239,0.75)', fontFamily: 'DM Sans, sans-serif' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#6a8f60', flexShrink: 0, display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ height: 1, background: '#2a2620' }} />

            <div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(247,244,239,0.45)', marginBottom: 8, fontFamily: 'DM Sans, sans-serif' }}>Your email</div>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                onKeyDown={e => e.key === 'Enter' && startCheckout()}
                placeholder="you@example.com"
                style={{ width: '100%', padding: '12px 14px', background: '#1a1917', border: '1px solid #2a2620', borderRadius: 2, color: '#f7f4ef', fontSize: 15, fontFamily: 'DM Sans, sans-serif', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {error && (
              <div style={{ fontSize: 13, color: '#c4522a', background: '#1f1210', border: '1px solid #3a1a10', borderRadius: 2, padding: '10px 14px', fontFamily: 'DM Sans, sans-serif' }}>{error}</div>
            )}

            <button
              onClick={startCheckout}
              disabled={loading}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: loading ? '#2a2620' : '#f7f4ef', color: '#0f0e0d', border: 'none', padding: '17px 24px', fontSize: 15, fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', borderRadius: 2, width: '100%', fontFamily: 'DM Sans, sans-serif', transition: 'background 0.2s' }}
            >
              {loading ? 'Preparing checkout…' : 'Get the Starter Pack'}
              {!loading && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              )}
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(247,244,239,0.35)', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6a8f60" strokeWidth="1.4">
                <rect x="2" y="5" width="10" height="8" rx="1"/><path d="M5 5V4a2 2 0 114 0v1"/>
              </svg>
              Secure checkout via Stripe · AUD pricing
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wfpulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        @media(max-width:768px){
          .wfai-grid{grid-template-columns:1fr!important}
          .wfai-left{border-right:none!important;padding:48px 24px!important}
          .wfai-right{padding:0 24px 48px!important}
        }
      `}</style>
    </section>
  );
};
