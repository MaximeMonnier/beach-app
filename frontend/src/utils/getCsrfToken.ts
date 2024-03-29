
// Cette fonction extrait le token CSRF du cookie et le retourne
export function getCsrfToken(): string | null {
    const csrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1];
    return csrfToken ? decodeURIComponent(csrfToken) : null;
  }
  