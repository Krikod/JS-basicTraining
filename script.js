/*
https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre3_exercice3.js

Complétez ce programme pour afficher l'heure qu'il sera dans une seconde.

Attention, ce programme est moins simple qu'il en a l'air : validez votre solution en la testant avec les entrées suivantes. Vous devez obtenir les résultats indiqués.

    14h17m59s => 14h18m0s
    6h59m59s => 7h0m0s
    23h59m59s => 0h0m0s (minuit)
*/

let heures = 6; // Faire varier cette variable entre 0 et 23
let minutes = 59; // faire varier cette variable entre 0 et 59
let secondes = 59; // faire varier cette variable entre 0 et 59

// Proposition de réponse
let finalH = "";

if (secondes >= 0 && minutes >= 0 && secondes >= 0) {
    if (secondes === 59) {
        if (minutes === 59) {
            if (heures === 23) {
                heures = 0;
                minutes = 0;
                secondes = 0;
            } else {
                secondes = 0;
                minutes = 0;
                heures++;
            }
        } else {
            minutes++;
            secondes = 0;
        }
    } else {
        secondes++;
    }
}

finalH = `${heures}h${minutes}m${secondes}s.`;

if (finalH === "0h0m0s.") {
    console.log("Dans 1 seconde, il sera minuit");
} else if (secondes < 0 || minutes < 0 || heures < 0) {
    console.log("Heure non correcte");
} else {
    console.log(`Dans 1 seconde, il sera ${finalH}`);
}

/*
// Correction 'Seconde suivante'

let heures = 14; // Faire varier cette variable entre 0 et 23
let minutes = 17; // faire varier cette variable entre 0 et 59
let secondes = 59; // faire varier cette variable entre 0 et 59

// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
    (secondes >= 0) && (secondes <= 59)) {
    secondes++; // On incrémente les secondes
    if (secondes === 60) {
        // Il faut mettre les secondes à 0 et passer à la minute suivante
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            // Il faut mettre les minutes à 0 et passer à l'heure suivante
            minutes = 0;
            heures++;
            if (heures === 24) { // L'heure suivante est minuit
                heures = 0;
            }
        }
    }
    console.log(`Dans une seconde, il sera ${heures} heures, ${minutes} minutes et ${secondes} secondes`);
} else {
console.log("Erreur : heure incorrecte !");
*/

// FizzBuzz

console.log("FizzBuzz avec 'while':");
let i = 1;

while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
    i++;
}
console.log("\n FizzBuzz avec 'for':");

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

//compte bancaire

const compte = {
    titulaire: "Alex",
    solde: 0,


    crediter(montant) {

        this.solde += montant;
    },

    decrire() {
        return `Le compte est celui d'${this.titulaire}, son solde est de ${this.solde}, mais nous l'avons crédité et il est de ${this.crediter(10)}`;
    }
};

console.log(compte.decrire());


/* correction:
 * // Modélisation d'un compte bancaire

const compte = {
  titulaire: "Alex",
  solde: 0,

  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  },

  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
};

// "titulaire: Alex, solde: 0"
console.log(compte.decrire());

compte.crediter(250);
compte.crediter(-80);

// "titulaire: Alex, solde: 170"
console.log(compte.decrire());
*/

// Les Trois Mousquetaires

const mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les Trois Mousquetaires:");
for (let i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");
console.log("Ils sont quatre à présent:");
mousquetaires.forEach(mousquetaire => {
    console.log(mousquetaire);
})
;

mousquetaires.splice(2, 1);
console.log("Le pauvre Aramie est mort...");
for (const mousquetaire of mousquetaires) {
    console.log(mousquetaire);
}

// Calculer et afficher la somme des valeurs du tbleau
const nombres = [11, 3, 7, 2, 9, 10];

let total = 0;

for (let i = 0; i < nombres.length; i++) {
    total += nombres[i];
}
console.log(total);

// Maximum d'un tableau

const valeurs = [3, 11, 7, 2, 9, 10];

// On initialise la maximum avec le 1er élément du tableau
let max = valeurs[0];

// On commence la recherche au second élément (indice 1)
for (let i = 1; i < valeurs.length; i++) {
    // Si la valeur courante est supérieure au maximum actuel...
    if (valeurs[i] > max) {
        // ... Elle devient le nouveau maximum
        max = valeurs[i];
    }
}

console.log(max);

/* OU tout simplement:
const valeurs = [3, 11, 7, 2, 9, 10];
console.log(Math.max(...valeurs)
)
; // 11

for (let i = 0; i < monTableau.length; i++) {

// monTableau[i] permet d'accéder à l'élément courant du tableau

}


monTableau.forEach(monElement => {

// monElement permet d'accéder à l'élément courant du tableau

}
)
;


for (const monElement of monTableau) {

// monElement permet d'accéder à l'élément courant du tableau

}

 La méthode  push()  ajoute un nouvel élément à la fin du tableau. La méthode  unshift()   ajoute l'élément au début du tableau.
Les méthodes  pop()  et  splice()   permettent de supprimer un élément du tableau..

*/

// Compter voyelles:
function compterVoyelles(input) {
    let nb = input.match(/[aeiou]/gi);
    return nb === null ? 0 : nb.length;
    /* g makes it search the whole string, i makes it case-insensitive
     * OR:
     * if (nb === null) {
      return 0;
    }
    return nb.length;
    */
}

console.log(compterVoyelles("RadAr")); // 2
console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7
//Corrigé:
function compterVoyelles(mot) {
    let nbVoyelles = 0;
    for (const lettre of mot) {
        const lettreMin = lettre.toLowerCase();
        if (
            lettreMin === "a" ||
            lettreMin === "e" ||
            lettreMin === "i" ||
            lettreMin === "o" ||
            lettreMin === "u" ||
            lettreMin === "y"
        ) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

console.log(compterVoyelles("RadAr")); // 2
console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7

// Leet speach (convertir certaines lettres d'une chaîne
function convertirMotLeet(toConvert) {
    let result =
        toConvert.replace(/a/gi, '4')
            .replace(/b/gi, '8')
            .replace(/e/gi, '3')
            .replace(/l/gi, '1')
            .replace(/o/gi, '0')
            .replace(/s/gi, '5');
    return result;
};
console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"
// Leet Speak: corrigé
// Renvoie l'équivalent "leet speak" d'une lettre
function convertirLettreLeet(lettre) {
    // Par défaut, la lettre ne change pas
    let lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
        case "a":
            lettreLeet = "4";
            break;
        case "b":
            lettreLeet = "8";
            break;
        case "e":
            lettreLeet = "3";
            break;
        case "l":
            lettreLeet = "1";
            break;
        case "o":
            lettreLeet = "0";
            break;
        case "s":
            lettreLeet = "5";
            break;
        case "t":
            lettreLeet = "7";
            break;
    }
    return lettreLeet;
}

// Renvoie un mot converti en "leet speak"
function convertirMotLeet(mot) {
    let motLeet = "";
    for (const lettre of mot) {
        motLeet += convertirLettreLeet(lettre);
    }
    return motLeet;
}

console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"
/***********************************
 * Palindrome
 * */

function estPalindrome(mot) {
    const tabMot = Array.from(mot);
    const rev = tabMot.reverse();
    const rev2 = rev.join('');
    const rev3 = rev2.toLowerCase();
    const mot3 = mot.toLowerCase();
    return (rev3 === mot3 ? true : false);
    // if (rev3 === mot3) {
    //     return true;
    // } else {
    //     return false;
    // }
};
console.log(estPalindrome("RadAr")); // true
console.log(estPalindrome("KAYAk")); // true
console.log(estPalindrome("Bora-Bora")); // false
/* Correction: ??
 Palindrome

// Renvoie l'inverse du mot passé en paramètre
const inverser = mot =>
{
    let motInverse = "";

    // Solution 1 : ajouter chaque lettre au début du mot inversé
    for (const lettre of mot) {
        motInverse = lettre + motInverse;
    }
    // Solution 2 : parcourir le mot de la fin vers le début
    /* for (let i = mot.length - 1; i >= 0; i--) {
      motInverse = motInverse + mot[i].toLowerCase();
    }
    return motInverse;
}
;
// Renvoie vrai si le mot est un palindrome, faux sinon
const estPalindrome = mot =>
{
    // On compare les chaînes en minuscules
    return inverser(mot).toLowerCase() === mot.toLowerCase();
}
;
console.log(estPalindrome("RadAr")); // true
console.log(estPalindrome("KAYAk")); // true
console.log(estPalindrome("Bora-Bora")); // false
*/
// Classe Chien
class Chien {
    constructor(nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    }

    // Renvoie l'aboiement du chien
    aboyer() {
        if (this.taille > 50) return "Grrr ! Grrr !";
        return "Wouaf ! Wouaf !";
    }

    // Renvoie la description du chien
    decrire() {
        return `${this.nom} est un ${this.race} mesurant ${this.taille} cm`;
    }
}

const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(crockdur.decrire());
// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${crockdur.nom} aboie : ${crockdur.aboyer()}`);

const milou = new Chien("Milou", "fox-terrier", 26);
// "Milou est un fox-terrier mesurant 26 cm"
console.log(milou.decrire());
// "Tiens, un chat ! Milou aboie : Wouaf ! Wouaf !"
console.log(`Tiens, un chat ! ${milou.nom} aboie : ${milou.aboyer()}`);

// Gestion de l'inventaire

class Personnage {
    constructor(nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0; // Toujours 0 au début
        // l'inventaire est géré sous la forme d'un objet ayant deux propriétés
        this.inventaire = {
            or: 10,
            cles: 1
        };
    }

    // Attaque une cible
    attaquer(cible) {
        if (this.sante > 0) {
            const degats = this.force;
            console.log(
                `${this.nom} attaque ${
                    cible.nom
                    } et lui inflige ${degats} points de dégâts`
            );
            cible.sante -= degats;
            if (cible.sante > 0) {
                console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
            } else {
                cible.sante = 0;
                const bonusXP = 10;
                console.log(
                    `${this.nom} a tué ${
                        cible.nom
                        } et gagne ${bonusXP} points d'expérience, ${
                        cible.inventaire.or
                        } pièces d'or et ${cible.inventaire.cles} clé(s)`
                );
                this.xp += bonusXP;
                // L'inventaire de la victime est transféré à son vainqueur
                this.inventaire.or += cible.inventaire.or;
                this.inventaire.cles += cible.inventaire.cles;
            }
        } else {
            console.log(
                `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
            );
        }
    }

    // Renvoie la description du personnage
    decrire() {
        return `${this.nom} a ${this.sante} points de vie, ${
            this.force
            } en force et ${this.xp} points d'expérience, ${
            this.inventaire.or
            } pièces d'or et ${this.inventaire.cles} clé(s)`;
    }
}

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
const aurora = new Personnage("Aurora", 150, 25);

console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());

// Lister des comptes bancaires
class Compte {
    constructor(titulaire) {
        this.titulaire = titulaire;
        this.solde = 0;
    }

    crediter(montant) {
        this.solde += montant;
    }

    decrire() {
        return `Titulaire: ${this.titulaire} \n Solde: ${this.solde}`;
    }
}

const listeComptes = [];

listeComptes.push(new Compte("Alex"));
listeComptes.push(new Compte("Clovis"));
listeComptes.push(new Compte("Marco"));


listeComptes.forEach(compte => {
    compte.crediter(1000);
console.log(`${compte.titulaire}:`);
console.log(compte.decrire());
}
)
;
