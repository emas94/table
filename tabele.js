const newUnitedPlayer = ["Bruno", "Dybala", "SMS", "Maguire"];

newUnitedPlayer.push("UMTITI"); //dodaje na koncy tablicy zwraca długosc tablicy po dokonaniu zmiany
newUnitedPlayer.unshift("James Rodriguez"); //dodaje na poczatku tablicy

newUnitedPlayer.pop(); //usuwa ostatni element i zwraca ten element

newUnitedPlayer.shift(); //usuwa pierwszy element i zwraca ten element


const firstToDelete = newUnitedPlayer.shift(); //przypisany  element z indexu 0 ktory zostal juz skasowany z tabeli 

const lastToDelete = newUnitedPlayer.pop(); //adekwatnie tyle ze ostatni element

const lenghthNewUnitedPlayer = newUnitedPlayer.push("CR7"); //przypisuje dlugosc tablicy po dodaniu na koncu tablicy
const lenghthNewUnitedPlayer1 = newUnitedPlayer.unshift("CR8"); //przypisuje dlugosc tablicy po dodaniu na poczatku tablicy

const oldManUtdPlayer = ["Pogba", "Lindelof", "de Gea", "Lingard"];

const allPlayers = oldManUtdPlayer.concat(newUnitedPlayer); //łaczy tabele tworzac nowa z danymi laczonych tabel jako argument mozna przekazac wiecej danych

//inny sposób operator spread (trzech kropek)
const allPlayersManUtd = [...oldManUtdPlayer, ...newUnitedPlayer, "Rasiak"];

items = ["deska", "nóż", "jedynki", "test"];

items.slice(2); // wyciaga czesc tabeli w tym wypadku od indeksu 2 łacznie do konca

items.slice(); //wycina cala tablice od 0 do konca

const newItems = items.slice(); // kopiuje tablice

items.slice(1, 3); //od 1 indeksu wlacznie do 3 (bez 3)

items.slice(-2); // dwa elementy od konca


const animals = ["dog", "cat", "ryba", "mouse"];

// animals.splice(1, 2); //kasujemy od indeksu 1 dwa elementy. okreslamy od którego indeksu i  ile elementów kasujemy.
// animals.splice(1); //kasuje wszystkie elementy od indeksu 1 do konca. Zwraca to co jest kasowane

animals.splice(3, 1, 'hamster'); //kasuje jeden element od indeksu 3 i zastepujemy go wyrazeniem w '';

animals.splice(2, 0, 'robak'); //na  drugim indeksie dodaje dana wartosc


const newTable = ["przemo", "areg", "rafau", "przemo", "zenek"];

newTable.sort(); //sortuje alfabetycznie 

newTable.indexOf("przemo"); // sprawdza czy wystepuje jak tak to zwraca index jak nie to zwraca -1, pierwszy wystepujacy
newTable.lastIndexOf("przemo"); //szuka od końca

newTable.includes('zenon'); // sprawdza czy zawiera jak tak to true jak nie to false, sprawdza tez typ

newTable.join(); //tworzy stringa z elementów riozdzielajac   przecinkami, zwraca nowego stringa nie zmienajac tabeli
newTable.join(" --- \n"); // zamiast przecinka kreski \n przenosi do nwoejk lini. oddziela elementy, ostatni element nie dostaje 

newTable.reverse(); //metoda destrukcyjna zmienia tabele, odwraca kolejność

const letters = "bal bla1 bla2 bla3 bla4".split(''); //tworzy tablice z kazdego znaku rowniez spacji
const letters1 = "bal bla1 bla2 bla3 bla4".split(' '); //tworzy tablice jak spotka spacje to konczy ciag znaków
const letters2 = "bal bla1 bla2 bla3 bla4".split(' ', 3); //tworzy tablice jak spotka spacje to konczy ciag znaków tworzy 3 elementy drugi arghument ogranicza