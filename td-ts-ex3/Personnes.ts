import { Adresse } from "./Adresses";

export class Personne {
    private _nom: string;
    private _genre: string;
    private _adresses: Adresse[];

    constructor(nom: string, genre: string, adresses: Adresse[] = []) {
        if (genre !== "H" && genre !== "F") {
            throw new Error("Le genre doit être H ou F");
        }
        this._nom = nom;
        this._genre = genre;
        this._adresses = adresses;
    }

    get nom(): string { return this._nom; }
    set nom(value: string) { this._nom = value; }

    get genre(): string { return this._genre; }
    set genre(value: string) {
        if (value !== "H" && value !== "F") {
            throw new Error("Le genre doit être H ou F");
        }
        this._genre = value;
    }

    get adresses(): Adresse[] { return this._adresses; }
    set adresses(value: Adresse[]) { this._adresses = value; }

    public getAdresseComplete(): string {
        return this._adresses.map(a => a.getAdresseComplete()).join(' | ');
    }

    public ajouterAdresse(a: Adresse): void { this._adresses.push(a); }

    public getInfoComplete(): string {
    return `${this._nom}, ${this._genre}, ${this._adresses.map(a => a.getAdresseComplete()).join(' | ')}`;
    }
}
