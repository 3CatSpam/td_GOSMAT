"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
var Participant = /** @class */ (function () {
    function Participant(prenom, resultats) {
        this.prenom = prenom;
        this.resultats = resultats;
    }
    Object.defineProperty(Participant.prototype, "_prenom", {
        get: function () { return this.prenom; },
        set: function (value) { this.prenom = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "_resultats", {
        get: function () { return this.resultats; },
        set: function (value) { this.resultats = value; },
        enumerable: false,
        configurable: true
    });
    Participant.prototype.calculerMoyenne = function () { if (this.resultats.length === 0)
        return 0; var somme = this.resultats.reduce(function (a, b) { return a + b; }, 0); return somme / this.resultats.length; };
    Participant.prototype.trouverMax = function () { return Math.max.apply(Math, this.resultats); };
    Participant.prototype.trouverMin = function () { return Math.min.apply(Math, this.resultats); };
    return Participant;
}());
exports.Participant = Participant;
