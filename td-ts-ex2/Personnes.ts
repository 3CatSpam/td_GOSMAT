export class Participant {
  constructor(private prenom: string, private resultats: number[]) {}
  public get _prenom(): string { return this.prenom; }
  public set _prenom(value: string) { this.prenom = value; }
  public get _resultats(): number[] { return this.resultats; }
  public set _resultats(value: number[]) { this.resultats = value; }
  calculerMoyenne(): number { if (this.resultats.length === 0) return 0; const somme = this.resultats.reduce((a, b) => a + b, 0); return somme / this.resultats.length; }
  trouverMax() { return Math.max(...this.resultats); }
  trouverMin() { return Math.min(...this.resultats); }
}
