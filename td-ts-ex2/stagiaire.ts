export class Stagiaire {
  constructor(private prenom: string, private notes: number[]) {}
  public get _prenom(): string { return this.prenom; }
  public set _prenom(value: string) { this.prenom = value; }
  public get _notes(): number[] { return this.notes; }
  public set _notes(value: number[]) { this.notes = value; }
  calculerMoyenne(): number { if (this.notes.length === 0) return 0; const somme = this.notes.reduce((a, b) => a + b, 0); return somme / this.notes.length; }
  trouverMax() { return Math.max(...this.notes); }
  trouverMin() { return Math.min(...this.notes); }
}
