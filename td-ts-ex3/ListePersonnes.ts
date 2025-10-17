import { Personne } from "./Personnes";

export class ListePersonnes {
    private _personnes: Personne[];

    constructor(personnes: Personne[]) { this._personnes = personnes; }

    get personnes(): Personne[] { return this._personnes; }

    public ajouterPersonne(p: Personne): void { this._personnes.push(p); }

    public afficherPersonne(p: Personne): void { console.log(`pers: ${p.getInfoComplete()}`); }

    public afficherPersonnes(): void { this._personnes.forEach(p => console.log(`pers: ${p.getInfoComplete()}`)); }

    public findByNom(nom: string): Personne | undefined { return this._personnes.find(p => p.nom === nom); }

    public findByCodePostal(codePostal: string): boolean { return this._personnes.some(p => p.adresses.some(a => a.codePostal === codePostal)); }

    public countPersonneVille(ville: string): number { return this._personnes.reduce((c, p) => c + p.adresses.filter(a => a.ville === ville).length, 0); }

    public editPersonne(oldNom: string, newNom: string): void { this._personnes.forEach(p => { if (p.nom === oldNom) p.nom = newNom; }); }

    public editPersonneVille(nom: string, oldVille: string, newVille: string): void { this._personnes.forEach(p => { if (p.nom === nom) p.adresses.forEach(a => { if (a.ville === oldVille) a.ville = newVille; }); }); }
}