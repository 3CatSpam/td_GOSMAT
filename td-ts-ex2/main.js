"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lancement = void 0;
var formation_1 = require("./formation");
var stagiaire_1 = require("./stagiaire");
var Lancement = /** @class */ (function () {
    function Lancement() {
    }
    Lancement.executer = function () {
        console.log("programme principal");
        var cours = Lancement.initCours();
    };
    Lancement.initCours = function () {
        var participantA = new stagiaire_1.Participant("Martin", [13, 14, 16]);
        var participantB = new stagiaire_1.Participant("Durand", [17, 15, 18]);
        var participantC = new stagiaire_1.Participant("Petit", [11, 12, 10]);
        var participantD = new stagiaire_1.Participant("Leroy", [15, 16, 14]);
        var participants = [participantA, participantB, participantC, participantD];
        var coursInstance = new formation_1.Cours("Javascript", 3, participants);
        console.log("Moyenne: ".concat(coursInstance.calculerMoyenneCours().toFixed(2)));
        coursInstance.afficherPrenomMax();
        return coursInstance;
    };
    return Lancement;
}());
exports.Lancement = Lancement;
Lancement.executer();
