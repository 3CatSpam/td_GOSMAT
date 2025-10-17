import { Adresse } from "./Adresses";
import { Personne } from "./Personnes";
import { ListePersonnes } from "./ListePersonnes";

export class Main {
    public static main(): void {
    console.log("démarr ex3");
        const liste = Main.initialiserListePersonnes();

    console.log("\n=== tests ===");

        const personneAdam = liste.findByNom("Adam");
    if (personneAdam) console.log(`pers trouv: ${personneAdam.getInfoComplete()}`);

        const hasCodePostal = liste.findByCodePostal("75001");
    console.log(`cp 75001? ${hasCodePostal}`);

        const countParis = liste.countPersonneVille("Paris");
    console.log(`nb addr Paris: ${countParis}`);

    console.log("\navant mod nom:");
        liste.afficherPersonnes();

        liste.editPersonne("Adam", "AdamModifié");
    console.log("\naprès mod nom Adam->AdamMod:");
        liste.afficherPersonnes();

        liste.editPersonneVille("Maxime", "Lyon", "Marseille");
    console.log("\naprès mod ville Maxime Lyon->Marseille:");
        liste.afficherPersonnes();
    }

    private static initialiserListePersonnes(): ListePersonnes {
        const adresse1 = new Adresse("123 Rue de la Paix", "Paris", "75001");
        const adresse2 = new Adresse("456 Avenue des Champs", "Lyon", "69001");
        const adresse3 = new Adresse("789 Boulevard Saint-Germain", "Paris", "75006");
        const adresse4 = new Adresse("321 Rue du Commerce", "Marseille", "13001");

        const personne1 = new Personne("Adam", "H", [adresse1, adresse3]);
        const personne2 = new Personne("Maxime", "H", [adresse2]);
        const personne3 = new Personne("Sophie", "F", [adresse4]);
        const personne4 = new Personne("Marie", "F", [adresse1, adresse2]);

        const personnes = [personne1, personne2, personne3, personne4];
        const liste = new ListePersonnes(personnes);

    console.log("liste init:");
        liste.afficherPersonnes();

        return liste;
    }
}

Main.main();
