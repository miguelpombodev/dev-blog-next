type UrlsMapType = {
  github: string;
  devblog: string;
};

export default class FetchApiClient {
  private readonly _cacheTime: number;

  private getUrl(flag: keyof UrlsMapType): string {
    const urlsMap: UrlsMapType = {
      github: process.env.NEXT_GITHUB_BASE_URL ?? "",
      devblog: process.env.NEXT_DEV_BLOG_API_URL ?? "",
    };

    if (!urlsMap[flag]) {
      throw new Error(`Missing env variable for API base URL: ${flag}`);
    }

    return urlsMap[flag];
  }

  constructor() {
    this._cacheTime = 60;
  }
  public async Get<T>(flag: keyof UrlsMapType, url: string): Promise<T> {
    const baseUrl = this.getUrl(flag);
    const res = await fetch(`${baseUrl}/${url}`, {
      next: { revalidate: this._cacheTime },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const json: T = await res.json();

    return json;
  }
}
