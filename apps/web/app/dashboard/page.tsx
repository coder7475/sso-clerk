"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="dashboard-loading">
        <div className="spinner" />
        <span>Loading...</span>
      </div>
    );
  }

  if (!isSignedIn) {
    redirect("/");
  }

  return (
    <div className="dashboard">
      <main className="dashboard__main">
        <div className="dashboard__header">
          <h1 className="dashboard__title">Welcome back, {user?.firstName}!</h1>
          <p className="dashboard__subtitle">
            You're now signed in via Single Sign-On
          </p>
        </div>

        <div className="dashboard__grid">
          {/* User Info Card */}
          <div className="dashboard__card dashboard__card--user">
            <div className="dashboard__cardHeader">
              <span className="dashboard__cardIcon">👤</span>
              <h2 className="dashboard__cardTitle">Your Account</h2>
            </div>
            <div className="dashboard__cardContent">
              <div className="dashboard__userInfo">
                {user?.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.fullName || "User"}
                    className="dashboard__avatar"
                  />
                ) : (
                  <div className="dashboard__avatar dashboard__avatar--placeholder">
                    {user?.firstName?.charAt(0) || "U"}
                  </div>
                )}
                <div className="dashboard__userDetails">
                  <span className="dashboard__userName">{user?.fullName}</span>
                  <span className="dashboard__userEmail">{user?.primaryEmailAddress?.emailAddress}</span>
                </div>
              </div>
              <div className="dashboard__meta">
                <div className="dashboard__metaItem">
                  <span className="dashboard__metaLabel">User ID</span>
                  <code className="dashboard__metaValue">{user?.id.slice(0, 12)}...</code>
                </div>
              </div>
            </div>
          </div>

          {/* SSO Status Card */}
          <div className="dashboard__card dashboard__card--sso">
            <div className="dashboard__cardHeader">
              <span className="dashboard__cardIcon">🔐</span>
              <h2 className="dashboard__cardTitle">SSO Status</h2>
            </div>
            <div className="dashboard__cardContent">
              <div className="dashboard__ssoStatus">
                <span className="dashboard__ssoIndicator" />
                <span className="dashboard__ssoText">Authenticated via Clerk</span>
              </div>
              <p className="dashboard__ssoDescription">
                Your session is valid across both applications. Try navigating to the Docs App without signing in again.
              </p>
              <div className="dashboard__ssoProviders">
                <span className="dashboard__ssoProvider">✓ Google</span>
                <span className="dashboard__ssoProvider">✓ GitHub</span>
                <span className="dashboard__ssoProvider">✓ Facebook</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="dashboard__card dashboard__card--actions">
            <div className="dashboard__cardHeader">
              <span className="dashboard__cardIcon">⚡</span>
              <h2 className="dashboard__cardTitle">Quick Actions</h2>
            </div>
            <div className="dashboard__cardContent">
              <div className="dashboard__actions">
                <Link href="http://localhost:4001" className="dashboard__action">
                  <span className="dashboard__actionIcon">📚</span>
                  <span className="dashboard__actionText">Visit Docs App</span>
                  <span className="dashboard__actionArrow">→</span>
                </Link>
                <Link href="/" className="dashboard__action">
                  <span className="dashboard__actionIcon">🏠</span>
                  <span className="dashboard__actionText">Back to Home</span>
                  <span className="dashboard__actionArrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Session Info Card */}
          <div className="dashboard__card dashboard__card--session">
            <div className="dashboard__cardHeader">
              <span className="dashboard__cardIcon">🔑</span>
              <h2 className="dashboard__cardTitle">Session Info</h2>
            </div>
            <div className="dashboard__cardContent">
              <div className="dashboard__sessionList">
                <div className="dashboard__sessionItem">
                  <span className="dashboard__sessionLabel">Web App</span>
                  <span className="dashboard__sessionStatus dashboard__sessionStatus--active">
                    Signed In
                  </span>
                </div>
                <div className="dashboard__sessionItem">
                  <span className="dashboard__sessionLabel">Docs App</span>
                  <span className="dashboard__sessionStatus dashboard__sessionStatus--active">
                    Signed In
                  </span>
                </div>
              </div>
              <p className="dashboard__sessionNote">
                Both apps share the same Clerk session. You're automatically signed in to the Docs App.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
