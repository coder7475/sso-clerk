"use client";

import { type JSX, useId } from "react";

interface SSOStatusProps {
  isAuthenticated: boolean;
  user?: {
    name: string;
    email: string;
    image?: string;
  };
  ssoProvider?: string;
}

export function SSOStatus({
  isAuthenticated,
  user,
  ssoProvider,
}: SSOStatusProps): JSX.Element {
  const badgeId = useId();

  return (
    <div
      id={badgeId}
      className="sso-status"
      role="status"
      aria-live="polite"
    >
      {isAuthenticated ? (
        <div className="sso-status--authenticated">
          <span className="sso-status__indicator sso-status__indicator--active" />
          <span className="sso-status__text">
            Signed in via {ssoProvider || "SSO"}
          </span>
          {user && (
            <span className="sso-status__user">{user.name}</span>
          )}
        </div>
      ) : (
        <div className="sso-status--anonymous">
          <span className="sso-status__indicator sso-status__indicator--inactive" />
          <span className="sso-status__text">Not signed in</span>
        </div>
      )}
    </div>
  );
}
