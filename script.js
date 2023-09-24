"use strict"
// crétion des variables
let pvtueur=100
let caractéristique=["musclé","discret","grand","rapide","agile"]
let prenoms = ["Tom", "Bastien", "Dimitri", "Martin", "Sébastien"];                                                                                   // Tableau où sera ajouté les objets Personnage.
let survivantsMorts = [];

// création d'un système de probabilité
Action(){

while (true) {
    let compétance = Math.floor(Math.random()*3);
    switch (compétance) {
        case 0:
            if (Math.random() > this.Damage_chance) {
            pvtueur -= 10
            console.log(this.prenoms+" a attaqué, HP restant : "+pvtueur)
            return;
            }
        case 1:
            if (Math.random() > this.Damage_chance) {
            this.Alive = false
            console.log("Jason a tué "+this.prenoms)
            return;
            }
        default:
            if (Math.random() > this.Damage_chance) {
                pvtueur-=15
                this.Alive 
                console.log(this.prenoms+" est mort mais a attaqué, HPrestant : "+pvtueur)
              
            }
       
        }
    }
}
// pas fini