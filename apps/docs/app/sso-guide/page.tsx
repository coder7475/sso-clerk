"use client";

import Link from "next/link";

export default function SSOGuide() {
  return (
    <div className="page">
      <main className="main">
        {/* Header */}
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link 
            href="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#6b7280',
              marginBottom: '1rem'
            }}
          >
            ← Back to Docs
          </Link>
          
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: 'var(--foreground)',
            marginBottom: '1rem'
          }}>
            🔐 Single Sign-On Guide
          </h1>
          
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Complete guide to implementing SSO across multiple Next.js applications using Clerk.
          </p>
        </section>

        {/* Content */}
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Prerequisites */}
          <section style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              📋 Prerequisites
            </h2>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem' 
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                <span>Clerk account with a published application</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                <span>Node.js 18+ installed</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                <span>pnpm, npm, or yarn package manager</span>
              </li>
            </ul>
          </section>

          {/* Step 1 */}
          <section id="configuration" style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <span style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600'
              }}>1</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Configure Clerk Application
              </h2>
            </div>
            
            <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>
              In your Clerk dashboard, navigate to{" "}
              <code style={{ 
                background: '#f3f4f6', 
                padding: '0.125rem 0.375rem', 
                borderRadius: '4px',
                fontSize: '0.875rem'
              }}>User & Authentication → Social Providers</code>{" "}
              and enable the SSO providers you want to support.
            </p>
            
            <div style={{
              padding: '1rem',
              background: 'rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              <strong>Supported Providers:</strong> Google, GitHub, Facebook, Twitter, OAuth providers, and SAML/Enterprise SSO.
            </div>
          </section>

          {/* Step 2 */}
          <section style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <span style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600'
              }}>2</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Install Dependencies
              </h2>
            </div>
            
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Install the Clerk Next.js SDK in your applications:
            </p>
            
            <pre style={{
              background: '#1f2937',
              color: '#e5e7eb',
              padding: '1rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.875rem',
              fontFamily: 'ui-monospace, SFMono-Regular, monospace'
            }}>
{`# Using pnpm
pnpm add @clerk/nextjs

# Using npm
npm install @clerk/nextjs

# Using yarn
yarn add @clerk/nextjs`}
            </pre>
          </section>

          {/* Step 3 */}
          <section id="multi-app" style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <span style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600'
              }}>3</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Set Up Multiple Applications
              </h2>
            </div>
            
            <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>
              Both applications use the same Clerk instance (same Publishable Key and Secret Key).
              This enables shared sessions across applications. The key is using{" "}
              <strong>identical credentials</strong> for both apps.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                padding: '1rem',
                background: 'rgba(99, 102, 241, 0.05)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Web App</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>localhost:4000</div>
              </div>
              <div style={{
                padding: '1rem',
                background: 'rgba(99, 102, 241, 0.05)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Docs App</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>localhost:4001</div>
              </div>
              <div style={{
                padding: '1rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔐</div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#10b981' }}>Clerk</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Shared Auth</div>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section id="security" style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <span style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600'
              }}>4</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Security Best Practices
              </h2>
            </div>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem' 
            }}>
              <li style={{ 
                padding: '1rem', 
                background: '#f9fafb', 
                borderRadius: '8px',
                borderLeft: '3px solid #10b981'
              }}>
                <strong>Use Environment Variables</strong>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  Never commit your Clerk secret keys to version control. Use .env.local files.
                </p>
              </li>
              <li style={{ 
                padding: '1rem', 
                background: '#f9fafb', 
                borderRadius: '8px',
                borderLeft: '3px solid #10b981'
              }}>
                <strong>Configure Allowed Origins</strong>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  In Clerk dashboard, add your development URLs to allowed origins.
                </p>
              </li>
              <li style={{ 
                padding: '1rem', 
                background: '#f9fafb', 
                borderRadius: '8px',
                borderLeft: '3px solid #10b981'
              }}>
                <strong>Protect Sensitive Routes</strong>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  Use middleware to protect routes that require authentication.
                </p>
              </li>
            </ul>
          </section>

          {/* Next Steps */}
          <section style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              🚀 Try It Out!
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              Sign in to experience SSO across both applications
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="http://localhost:4000" 
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#6366f1',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Web App →
              </Link>
              <Link 
                href="/" 
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: 'var(--foreground)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Back to Docs Home
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
