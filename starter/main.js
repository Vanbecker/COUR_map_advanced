const users = getUsers();

async function getUsers() {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?nat=fr&results=50"
        );

        const data = await response.json();
        console.log(data.results)
    } catch (error) {
        console.log(error);
    }
}

// a. afficher le dernier élément du tableau
// b. afficher l'age le plus élevé
// c. afficher le nombre d'homme et le nombre de femmes

// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}
// 2. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}
// 3. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}
// 4. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}