
export class Adresse {
    private _rue: string;
    private _ville: string;
    private _codePostal: string;

    constructor(rue: string, ville: string, codePostal: string) {
        this._rue = rue;
        this._ville = ville;
        this._codePostal = codePostal;
    }

    get rue(): string { return this._rue; }
    set rue(value: string) { this._rue = value; }

    get ville(): string { return this._ville; }
    set ville(value: string) { this._ville = value; }

    get codePostal(): string { return this._codePostal; }
    set codePostal(value: string) { this._codePostal = value; }

    public getAdresseComplete(): string { return `${this._rue}, ${this._ville}, ${this._codePostal}`; }
}
