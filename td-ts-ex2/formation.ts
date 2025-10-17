import { Stagiaire } from "./stagiaire";

export class Cours {
  constructor(private titre: string, private duree: number, public stagiaires: Stagiaire[]) {}
  public get _titre(): string { return this.titre; }
  public set _titre(value: string) { this.titre = value; }
  public get _duree(): number { return this.duree; }
  public set _duree(value: number) { this.duree = value; }
  public get _stagiaires(): Stagiaire[] { return this.stagiaires; }
  public set _stagiaires(value: Stagiaire[]) { this.stagiaires = value; }
  calculerMoyenneCours(): number {
    if (this.stagiaires.length === 0) return 0;
    const somme = this.stagiaires.reduce((sum, s) => sum + s.calculerMoyenne(), 0);
    return somme / this.stagiaires.length;
  }
  getIndexMeilleur(): number {
    if (this._stagiaires.length === 0) return -1;
    let maxMoyenne = 0;
    let idx = -1;
    for (let i = 0; i < this._stagiaires.length; i++) {
      if (this._stagiaires[i].calculerMoyenne() > maxMoyenne) {
        maxMoyenne = this._stagiaires[i].calculerMoyenne();
        idx = i;
      }
    }
    return idx;
  }
  getNoteMinParticipant(prenom: string): number {
    let stagiaire = null as Stagiaire | null;
    for (let i = 0; i < this._stagiaires.length; i++) {
      if (this._stagiaires[i]._prenom === prenom) {
        stagiaire = this._stagiaires[i];
        break;
      }
    }
    if (stagiaire) { return stagiaire.trouverMin(); }
    return -1;
  }
  afficherPrenomMax(): void {
    const idxMax = this.getIndexMeilleur();
    if (idxMax !== -1) {
      console.log(`meilleur: ${this._stagiaires[idxMax]._prenom}`);
    } else {
  console.log("aucun stagiaire");
    }
  }
  afficherMinMax(): void {
    const idxMax = this.getIndexMeilleur();
    if (idxMax !== -1) {
      const participantMax = this._stagiaires[idxMax];
  console.log(`min meilleur: ${participantMax.trouverMin()}`);
    } else {
  console.log("aucun stagiaire");
    }
  }
  trouverMoyenneParPrenom(prenom: string): void {
    let stagiaire = null as Stagiaire | null;
    for (let i = 0; i < this._stagiaires.length; i++) {
      if (this._stagiaires[i]._prenom === prenom) {
        stagiaire = this._stagiaires[i];
        break;
      }
    }
    if (stagiaire) {
  console.log(`moyenne ${prenom}: ${stagiaire.calculerMoyenne().toFixed(2)}`);
    } else {
        console.log(`${prenom} non trouvé`);
    }
  }
}

