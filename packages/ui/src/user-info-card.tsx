import { type JSX } from "react";

interface UserInfoCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
  ssoProvider?: string;
  sessionId?: string;
}

export function UserInfoCard({ user, ssoProvider, sessionId }: UserInfoCardProps): JSX.Element {
  return (
    <div className="user-info-card">
      <div className="user-info-card__header">
        {user.image ? (
          <img src={user.image} alt={user.name} className="user-info-card__avatar" />
        ) : (
          <div className="user-info-card__avatar user-info-card__avatar--placeholder">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="user-info-card__details">
          <h3 className="user-info-card__name">{user.name}</h3>
          <p className="user-info-card__email">{user.email}</p>
        </div>
      </div>
      
      <div className="user-info-card__meta">
        <div className="user-info-card__item">
          <span className="user-info-card__label">Signed in via</span>
          <span className="user-info-card__value">{ssoProvider || "SSO"}</span>
        </div>
        {sessionId && (
          <div className="user-info-card__item">
            <span className="user-info-card__label">Session</span>
            <code className="user-info-card__code">{sessionId.slice(0, 12)}...</code>
          </div>
        )}
        <div className="user-info-card__item">
          <span className="user-info-card__label">User ID</span>
          <code className="user-info-card__code">{user.id.slice(0, 8)}...</code>
        </div>
      </div>
    </div>
  );
}
