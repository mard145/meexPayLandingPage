import { ssoUrl } from "./sso.url";

export function addParams(params: { [key: string]: string }) {
  const queryString = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");

  return `${ssoUrl}?${queryString}`;
}
