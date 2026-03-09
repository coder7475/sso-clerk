"use client";

import Link from "next/link";
import { useUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import styles from "./page.module.css";

const features = [
  {
    icon: "🔐",
    title: "Single Sign-On",
    description: "Sign in once, access both the web app and documentation seamlessly.",
  },
  {
    icon: "🌐",
    title: "Social Providers",
    description: "Connect with Google, GitHub, Facebook, or Twitter for quick access.",
  },
  {
    icon: "🔒",
    title: "Secure Authentication",
    description: "Powered by Clerk with enterprise-grade security and session management.",
  },
  {
    icon: "⚡",
    title: "Cross-App Navigation",
    description: "Navigate between apps without re-authenticating. Your session is shared.",
  },
];

const providers = [
  { id: "google", name: "Google", icon: "🔵", color: "#4285f4" },
  { id: "github", name: "GitHub", icon: "🐙", color: "#24292e" },
  { id: "facebook", name: "Facebook", icon: "📘", color: "#1877f2" },
  { id: "twitter", name: "Twitter/X", icon: "𝕏", color: "#000000" },
];

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.hero__badge}>
            <span className={styles.hero__badgeIcon}>🎉</span>
            <span>SSO Demo with Clerk</span>
          </div>
          
          <h1 className={styles.hero__title}>
            Single Sign-On
            <br />
            <span className={styles.hero__titleAccent}>Across Two Apps</span>
          </h1>
          
          <p className={styles.hero__description}>
            Experience seamless authentication with our Two-App SSO demonstration.
            Sign in once and access both the web application and documentation portal.
          </p>

          <div className={styles.hero__actions}>
            {isLoaded && !isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className={styles.hero__btnPrimary}>
                    Sign In to Experience SSO
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className={styles.hero__btnSecondary}>
                    Create Account
                  </button>
                </SignUpButton>
              </>
            ) : isSignedIn ? (
              <Link href="/dashboard" className={styles.hero__btnPrimary}>
                Go to Dashboard →
              </Link>
            ) : (
              <div className={styles.hero__loading}>
                <span className={styles.spinner} />
                Loading...
              </div>
            )}
          </div>

          {isSignedIn && user && (
            <div className={styles.hero__user}>
              <img
                src={user.imageUrl || ""}
                alt={user.fullName || "User"}
                className={styles.hero__userImage}
              />
              <span>Signed in as {user.fullName}</span>
            </div>
          )}
        </section>

        {/* SSO Providers Section */}
        <section className={styles.providers}>
          <h2 className={styles.section__title}>Supported SSO Providers</h2>
          <p className={styles.section__description}>
            Choose your preferred identity provider to sign in
          </p>
          
          <div className={styles.providerGrid}>
            {providers.map((provider) => (
              <div key={provider.id} className={styles.providerCard}>
                <span className={styles.providerIcon}>{provider.icon}</span>
                <span className={styles.providerName}>{provider.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.section__title}>How SSO Works</h2>
          <p className={styles.section__description}>
            Understanding the single sign-on experience
          </p>

          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Flow Diagram */}
        <section className={styles.flow}>
          <h2 className={styles.section__title}>Authentication Flow</h2>
          <p className={styles.section__description}>
            Watch how your session is shared between applications
          </p>

          <div className={styles.flowDiagram}>
            <div className={styles.flowStep}>
              <span className={styles.flowIcon}>1</span>
              <span className={styles.flowLabel}>Sign In</span>
              <span className={styles.flowApp}>Web App</span>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStep}>
              <span className={styles.flowIcon}>🔐</span>
              <span className={styles.flowLabel}>Clerk Auth</span>
              <span className={styles.flowApp}>Session Created</span>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStep}>
              <span className={styles.flowIcon}>2</span>
              <span className={styles.flowLabel}>Navigate</span>
              <span className={styles.flowApp}>Docs App</span>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStep}>
              <span className={styles.flowIcon}>✓</span>
              <span className={styles.flowLabel}>Already Signed In</span>
              <span className={styles.flowApp}>No Re-auth</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2 className={styles.cta__title}>Ready to Try It Out?</h2>
          <p className={styles.cta__description}>
            Sign in with any supported provider and navigate to the docs app to experience true SSO.
          </p>
          <div className={styles.cta__links}>
            <Link href="http://localhost:4001" className={styles.cta__link}>
              <span>Visit Docs App →</span>
            </Link>
            <Link href="/dashboard" className={styles.cta__linkSecondary}>
              <span>View Dashboard →</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <span className={styles.footer__brand}>
            🔐 SSO Demo powered by Clerk & Next.js
          </span>
          <span className={styles.footer__links}>
            <Link href="http://localhost:4001">Documentation</Link>
            <span>•</span>
            <Link href="/dashboard">Dashboard</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
