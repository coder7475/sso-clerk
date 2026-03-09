import { type JSX } from "react";

export type SSOProvider = "google" | "github" | "facebook" | "twitter";

interface SSOProviderCardProps {
  provider: SSOProvider;
  description: string;
  onClick?: () => void;
}

const providerConfig: Record<SSOProvider, { name: string; icon: string; color: string }> = {
  google: {
    name: "Google",
    icon: "🔵",
    color: "#4285f4",
  },
  github: {
    name: "GitHub",
    icon: "🐙",
    color: "#24292e",
  },
  facebook: {
    name: "Facebook",
    icon: "📘",
    color: "#1877f2",
  },
  twitter: {
    name: "Twitter/X",
    icon: "𝕏",
    color: "#000000",
  },
};

export function SSOProviderCard({
  provider,
  description,
  onClick,
}: SSOProviderCardProps): JSX.Element {
  const config = providerConfig[provider];

  return (
    <button
      type="button"
      className="sso-provider-card"
      onClick={onClick}
      aria-label={`Sign in with ${config.name}`}
    >
      <span className="sso-provider-card__icon">{config.icon}</span>
      <div className="sso-provider-card__content">
        <span className="sso-provider-card__name">{config.name}</span>
        <span className="sso-provider-card__description">{description}</span>
      </div>
      <span className="sso-provider-card__arrow">→</span>
    </button>
  );
}

interface SSOProviderListProps {
  onProviderSelect?: (provider: SSOProvider) => void;
}

export function SSOProviderList({ onProviderSelect }: SSOProviderListProps): JSX.Element {
  const providers: SSOProvider[] = ["google", "github", "facebook", "twitter"];

  return (
    <div className="sso-provider-list" role="list" aria-label="Sign in with SSO providers">
      {providers.map((provider) => (
        <SSOProviderCard
          key={provider}
          provider={provider}
          description="One-click sign in"
          onClick={() => onProviderSelect?.(provider)}
        />
      ))}
    </div>
  );
}
