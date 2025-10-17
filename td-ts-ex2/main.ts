import { Cours } from "./formation";
import { Stagiaire } from "./stagiaire";

export class Lancement {
  public static executer(): void {
  console.log("programme principal");
    const cours = Lancement.initCours();
  }
  private static initCours(): Cours {
    const sA = new Stagiaire("Martin", [13, 14, 16]);
    const sB = new Stagiaire("Durand", [17, 15, 18]);
    const sC = new Stagiaire("Petit", [11, 12, 10]);
    const sD = new Stagiaire("Leroy", [15, 16, 14]);
    const stagiaires = [sA, sB, sC, sD];
    const coursInstance = new Cours("Javascript", 3, stagiaires);
  console.log(`moy: ${coursInstance.calculerMoyenneCours().toFixed(2)}`);
    coursInstance.afficherPrenomMax();
    return coursInstance;
  }
}
Lancement.executer();
