export default class TaxlessApiService {

    _apiBase = 'http://localhost:3050/api';

    _getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    gelAllOperations = async () => {
        return await this._getResource(`/my/finances/operations`);
    }
}