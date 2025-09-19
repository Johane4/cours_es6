/************************************* 1. Destructuring (déstructuration) *****************************************/
// Le destructuring permet d'extraire des valeurs d'un tableau ou des propriétés d'un objet
// et de les assigner à des variables en une seule ligne.

// Exemple avec un tableau
const fruits = ["pomme", "banane", "orange"];
// Ici, chaque élément du tableau est assigné à une variable distincte
const [fruit1, fruit2, fruit3] = fruits;

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

// du coup pon aurait const fruits1 qui équivaut à const fruits1 = fruits[0]
document.getElementById(
	"destructuring-array",
).innerHTML = `Fruits: ${fruit1}, ${fruit2}, ${fruit3}`;

// Exemple avec un objet
const personne = {
	nom: "Alice",
	age: 25,
	ville: "Paris",
};

// du coup on aurait pu avoir const nom = personne.nom et ainsi de suite
// On extrait les propriétés de l'objet et on les assigne à des variables du même nom
const { nom, age, ville } = personne;
document.getElementById(
	"destructuring-object",
).innerHTML = `Nom: ${nom}, Age: ${age}, Ville: ${ville}`;

// Destructuring d'objets imbriqués
// On peut également déstructurer des objets à l'intérieur d'autres objets
const employe = {
	nom: "Bob",
	details: {
		position: "Développeur",
		entreprise: "TechCorp",
	},
};
//On extrait les propriétés imbriquées en accédant directement à l'intérieur de l'objet
const {
	nom: employeNom,
	details: { position, entreprise },
} = employe;

document.getElementById(
	"destructuring-nested",
).innerHTML = `Employé: ${employeNom}, Position: ${position}, Entreprise: ${entreprise}`;

/************************************* 2. Spread Operator (opérateur de propagation) *****************************************/
// L'opérateur spread (...) permet d'étaler ou de copier les éléments d'un tableau ou d'un objet
// dans un autre tableau, un autre objet, ou même en tant qu'arguments d'une fonction.

// Exemple avec un tableau
const autresFruits = ["fraise", ...fruits];
// Ici, 'fraise' est ajouté au début du nouveau tableau suivi de tous les éléments de 'fruits'
document.getElementById(
	"spread-array",
).innerHTML = `Autres Fruits: ${autresFruits.join(", ")}`;

// Combinaison de plusieurs objets
// L'opérateur spread permet aussi de fusionner des objets ou de cloner un objet avec des modifications
const adresse = { adresse: "5 rue Jules Verne", pays: "France" };

const nouvellePersonne = { ...personne, ...adresse, age: 30 }; // Ici, l'âge est modifié
document.getElementById(
	"spread-object",
).innerHTML = `Nouvelle Personne: ${nouvellePersonne.nom}, ${nouvellePersonne.age} ans, ${nouvellePersonne.adresse}, ${nouvellePersonne.pays}`;

// Utilisation dans une fonction
// L'opérateur spread peut être utilisé pour passer les éléments d'un tableau en tant qu'arguments individuels
function somme(x, y, z) {
	return x + y + z;
}

const nombres = [1, 2, 3];

const resultatSomme = somme(...nombres); // Chaque élément du tableau 'nombres' est passé comme un argument séparé
document.getElementById(
	"spread-function",
).innerHTML = `Somme des nombres: ${resultatSomme}`;

// EXO CONCRET
// Étape 1 : Créer les objets personne et contact
const personnes = {
	nom10 : "Ahmed",
	prenom : "Abir",
	age : 10
}

const contact = {
	numero : "+3305050505",
	mail : "abir@prince.com"
}

// Étape 2 : Utiliser le spread operator pour fusionner les objets
const coordonnees = { ...personnes, ...contact};
console.log(coordonnees);

// Étape 3 : Utiliser le destructuring pour extraire des propriétés spécifiques
const { nom10, prenom, numero } = coordonnees;

// Étape 4 : Afficher les propriétés extraites dans la console
console.log(nom10, prenom, numero );

/************************************* 3. Map() *****************************************/
// La méthode map() applique une fonction à chaque élément d'un tableau et retourne un nouveau tableau
const nombresMultipliés = nombres.map((nombre) => nombre * 9);
document.getElementById(
	"map",
).innerHTML = `Nombres multipliés: ${nombresMultipliés}`;

// /************************************* 4. Reduce() *****************************************/
// // La méthode reduce() combine tous les éléments d'un tableau en une seule valeur en appliquant une fonction


const sommeTotale = nombres.reduce(
	(accumulateur, nombre) => accumulateur + nombre, 0,
);


// initiale 0 et actuelle 1
// accumulateur c'est 0+1  donc 1 et le chiffre actuel c'est 2
// accumulateur c'est 1 + 2 soit 3 et le chiffre actuel c'est 3
// accumulateur cest 3 + 3 soit 6
document.getElementById(
	"reduce",
).innerHTML = `Somme des nombres: ${sommeTotale}`;

/************************************* 5. Ternaire *****************************************/
// L'opérateur ternaire est une version abrégée d'une condition if-else
const ageTernaire = 16;
// Si c'est VRAI  ?  ALORS INSTRUCTIONS    :    OU ALORS AUTRE INSTRUCTIONS
const estMajeur = ageTernaire >= 18 ? "Oui" : "Non";



// équivaut à faire ça
// if (ageTernaire >= 18) {
// 	document.getElementById("ternaire").innerHTML = `Est majeur: ${estMajeur}`;

// } else {
// 	document.getElementById("ternaire").innerHTML = `N'est pas majeur: ${estMajeur}`;
// }

// const display = ageTernaire >= 18 ? 
// document.getElementById("ternaire").innerHTML = `Est majeur: ${estMajeur}`: document.getElementById("ternaire").innerHTML = `Trop mineur le boug !!`;

document.getElementById("ternaire").innerHTML = `Est majeur: ${estMajeur}`;

/************************************* 6. Shorthand Property Names (noms de propriétés abrégés) *****************************************/
// Quand on veut créer un objet avec des propriétés qui ont le même nom que des variables existantes,
// on peut écrire ces propriétés plus rapidement en utilisant une syntaxe raccourcie.

// Imaginons qu'on a ces deux variables :
const name = "Charlie";
const notes = [15, 14, 18];

// Au lieu d'écrire :
const newStudent = { name: name, notes: notes };

console.log(newStudent);

// On peut écrire simplement :
//const newStudent = { name, notes }; // C'est la même chose, mais plus court !

// Le résultat est le même :
console.log(newStudent);
document.getElementById("shorthand").innerHTML = `Nouvel étudiant : ${
	newStudent.name
}, Notes : ${newStudent.notes.join(", ")}`;

/************************************* 7. Classes *****************************************/
// Les classes en JavaScript sont un moyen de créer des objets avec des propriétés et des méthodes partagées

class User {
	// le constructeur construit les propriétés dont l'objet a besoin
	constructor(firstname, lastname, age, address = "Gonesse") {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.address = address;
	}

	introduce() {
		return `Bonjour je m'appelle ${this.firstname} ${this.lastname}`;
	}
	
	where() {
		return `Je vis à ${this.address}`
	}
}

// Ici on instancie notre objet pour créer un nouvel utilisateur
const user = new User("Abir", "Ahmed", 10);
console.log(user.where());
console.log(user.age);


const user1 = new User("Abigail", "Luxor", 8, "Rome");
console.log(user1.introduce() + " et " + user1.where());
console.log(user1.age);




