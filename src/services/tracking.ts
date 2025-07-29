import posthog from "posthog-js";

const isProd = import.meta.env.PROD;
const postHogToken = import.meta.env.PUBLIC_POSTHOG_TOKEN;

export function initTracking() {
  if (isProd && postHogToken) {
    posthog.init(postHogToken, {
      api_host: "https://eu.i.posthog.com",
      person_profiles: "always",
    });
  }
}
