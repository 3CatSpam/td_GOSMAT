"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cours = void 0;
var Cours = /** @class */ (function () {
    function Cours(titre, duree, participants) {
        this.titre = titre;
        this.duree = duree;
        this.participants = participants;
    }
    Object.defineProperty(Cours.prototype, "_titre", {
        get: function () { return this.titre; },
        set: function (value) { this.titre = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "_duree", {
        get: function () { return this.duree; },
        set: function (value) { this.duree = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "_participants", {
        get: function () { return this.participants; },
        set: function (value) { this.participants = value; },
        enumerable: false,
        configurable: true
    });
    Cours.prototype.calculerMoyenneCours = function () {
        if (this.participants.length === 0)
            return 0;
        var somme = this.participants.reduce(function (sum, participant) { return sum + participant.calculerMoyenne(); }, 0);
        return somme / this.participants.length;
    };
    Cours.prototype.getIndexMeilleur = function () {
        if (this._participants.length === 0)
            return -1;
        var maxMoyenne = 0;
        var idx = -1;
        for (var i = 0; i < this._participants.length; i++) {
            if (this._participants[i].calculerMoyenne() > maxMoyenne) {
                maxMoyenne = this._participants[i].calculerMoyenne();
                idx = i;
            }
        }
        return idx;
    };
    Cours.prototype.getNoteMinParticipant = function (prenom) {
        var participant = null;
        for (var i = 0; i < this._participants.length; i++) {
            if (this._participants[i]._prenom === prenom) {
                participant = this._participants[i];
                break;
            }
        }
        if (participant) {
            return participant.trouverMin();
        }
        return -1;
    };
    Cours.prototype.afficherPrenomMax = function () {
        var idxMax = this.getIndexMeilleur();
        if (idxMax !== -1) {
            console.log("Le meilleur participant est : ".concat(this._participants[idxMax]._prenom));
        }
        else {
            console.log("Aucun participant dans le cours");
        }
    };
    Cours.prototype.afficherMinMax = function () {
        var idxMax = this.getIndexMeilleur();
        if (idxMax !== -1) {
            var participantMax = this._participants[idxMax];
            console.log("La note minimale du meilleur participant est : ".concat(participantMax.trouverMin()));
        }
        else {
            console.log("Aucun participant dans le cours");
        }
    };
    Cours.prototype.trouverMoyenneParPrenom = function (prenom) {
        var participant = null;
        for (var i = 0; i < this._participants.length; i++) {
            if (this._participants[i]._prenom === prenom) {
                participant = this._participants[i];
                break;
            }
        }
        if (participant) {
            console.log("Moyenne pour ".concat(prenom, ": ").concat(participant.calculerMoyenne().toFixed(2)));
        }
        else {
            console.log("Participant ".concat(prenom, " non trouv\u00E9"));
        }
    };
    return Cours;
}());
exports.Cours = Cours;
