type UrlsMapType = {
  github: string;
  devblog: string;
};

export default class FetchApiClient {
  private readonly _cacheTime: number;
  private readonly _urlsMap: UrlsMapType = {
    github: process.env.NEXT_GITHUB_BASE_URL!,
    devblog: process.env.NEXT_DEV_BLOG_API_URL!,
  };

  constructor() {
    this._cacheTime = 60;
  }
  public async Get<T>(flag: keyof UrlsMapType, url: string): Promise<T> {
    const res = await fetch(`${this._urlsMap[flag]}/${url}`, {
      next: { revalidate: this._cacheTime },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const json: T = await res.json();

    return json;
  }
}
