"use client";

import Link from "next/link";
import { useUser, SignInButton, SignUpButton } from "@clerk/nextjs";

const docSections = [
  {
    icon: "🔐",
    title: "SSO Integration",
    description: "Learn how to integrate Single Sign-On with Clerk in your Next.js applications.",
    link: "/sso-guide",
  },
  {
    icon: "🔧",
    title: "Configuration",
    description: "Step-by-step guide to configuring social providers and authentication flows.",
    link: "/sso-guide#configuration",
  },
  {
    icon: "🌐",
    title: "Multi-App Setup",
    description: "Set up SSO across multiple applications with shared session management.",
    link: "/sso-guide#multi-app",
  },
  {
    icon: "🛡️",
    title: "Security Best Practices",
    description: "Essential security considerations for production SSO implementations.",
    link: "/sso-guide#security",
  },
];

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="page">
      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__badge">
            <span className="hero__badgeIcon">📚</span>
            <span>SSO Documentation</span>
          </div>
          
          <h1 className="hero__title">
            Single Sign-On
            <br />
            <span className="hero__titleAccent">Documentation Portal</span>
          </h1>
          
          <p className="hero__description">
            Comprehensive guides and documentation for implementing SSO with Clerk 
            and Next.js across multiple applications.
          </p>

          <div className="hero__actions">
            {isLoaded && !isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="hero__btnPrimary">
                    Sign In to Access Docs
                  </button>
                </SignInButton>
                <Link href="http://localhost:4000" className="hero__btnSecondary">
                  View Web App
                </Link>
              </>
            ) : isSignedIn ? (
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link href="/sso-guide" className="hero__btnPrimary">
                  Read SSO Guide →
                </Link>
                <Link href="http://localhost:4000/dashboard" className="hero__btnSecondary">
                  Go to Dashboard
                </Link>
              </div>
            ) : (
              <div className="hero__loading">
                <span className="spinner" />
                Loading...
              </div>
            )}
          </div>

          {isSignedIn && user && (
            <div className="hero__user">
              <img
                src={user.imageUrl || ""}
                alt={user.fullName || "User"}
                className="hero__userImage"
              />
              <span>Welcome back, {user.firstName}</span>
            </div>
          )}
        </section>

        {/* SSO Status Banner */}
        {isSignedIn && (
          <div className="ssoBanner">
            <span className="ssoBanner__icon">✓</span>
            <span className="ssoBanner__text">
              You're signed in via SSO. Navigate to the Web App without re-authenticating!
            </span>
          </div>
        )}

        {/* Documentation Sections */}
        <section className="docs">
          <h2 className="section__title">Documentation Sections</h2>
          <p className="section__description">
            Explore our comprehensive guides to get started with SSO
          </p>

          <div className="docsGrid">
            {docSections.map((section, index) => (
              <Link key={index} href={section.link} className="docsCard">
                <span className="docsCard__icon">{section.icon}</span>
                <h3 className="docsCard__title">{section.title}</h3>
                <p className="docsCard__description">{section.description}</p>
                <span className="docsCard__link">
                  Learn more <span className="docsCard__linkArrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SSO Flow Explanation */}
        <section className="flow">
          <h2 className="section__title">How It Works</h2>
          <p className="section__description">
            Understanding the shared authentication between applications
          </p>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '12px',
              textAlign: 'center',
              minWidth: '160px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔐</div>
              <div style={{ fontWeight: '600', color: 'var(--foreground)' }}>Sign In</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                Web App (Port 4000)
              </div>
            </div>
            
            <div style={{ color: '#9ca3af', fontSize: '1.5rem' }}>→</div>
            
            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '12px',
              textAlign: 'center',
              minWidth: '160px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>☁️</div>
              <div style={{ fontWeight: '600', color: 'var(--foreground)' }}>Clerk Auth</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                Session Created
              </div>
            </div>
            
            <div style={{ color: '#9ca3af', fontSize: '1.5rem' }}>→</div>
            
            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '12px',
              textAlign: 'center',
              minWidth: '160px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
              <div style={{ fontWeight: '600', color: 'var(--foreground)' }}>Navigate</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                Docs App (Port 4001)
              </div>
            </div>
            
            <div style={{ color: '#9ca3af', fontSize: '1.5rem' }}>→</div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              textAlign: 'center',
              minWidth: '160px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
              <div style={{ fontWeight: '600', color: '#10b981' }}>Auto Signed In</div>
              <div style={{ fontSize: '0.75rem', color: '#059669', marginTop: '0.25rem' }}>
                No Re-auth Needed
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <h2 className="cta__title">Ready to Implement SSO?</h2>
          <p className="cta__description">
            Head to the SSO Guide for a complete walkthrough of the implementation, 
            or visit the Web App to see SSO in action.
          </p>
          <div className="cta__links">
            <Link href="/sso-guide" className="cta__link">
              <span>Read SSO Guide →</span>
            </Link>
            <Link href="http://localhost:4000" className="cta__linkSecondary">
              <span>Visit Web App →</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__content">
          <span className="footer__brand">
            📚 SSO Demo Docs powered by Clerk & Next.js
          </span>
          <span className="footer__links">
            <Link href="http://localhost:4000">Web App</Link>
            <span>•</span>
            <Link href="/sso-guide">SSO Guide</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
