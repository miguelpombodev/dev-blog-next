export default class FetchApiClient {
  private readonly _cacheTime: number;
  private readonly _baseURL: string;

  constructor() {
    this._baseURL = process.env.NEXT_GITHUB_BASE_URL!;
    this._cacheTime = 60;
  }
  public async Get<T>(url: string): Promise<T> {
    const res = await fetch(`${process.env.NEXT_GITHUB_BASE_URL}/${url}`, {
      next: { revalidate: this._cacheTime },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const json: T = await res.json();

    return json;
  }
}
