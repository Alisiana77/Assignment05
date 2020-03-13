//STEP 1
// let myMovies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion"];
// window.console.log("One of my favorite movie is " + myMovies[1] + ".");


//STEP 2
// let movies = new Array(5);
// movies[0] = "John Wick";
// movies[1] = "Malificent";
// movies[2] = "Star wars";
// movies[3] = "Minion";
// movies[4] = "Batman";
// window.console.log("One of my favorite movie is " + movies[0] + ".");

//STEP 3
// let movies = new Array(5);
// movies[0] = "John Wick";
// movies[1] = "Malificent";
// movies[2] = "Star wars";
// movies[3] = "Minion";
// movies[4] = "Batman";
// movies.push("Parasite");
// window.console.log(movies.length);

//STEP 4
// let movies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion"];
// movies.shift(0);
// window.console.log(movies);

//STEP 5
// let i;
// let movies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// for (i = 0; i < movies.length; i += 1) {
//     window.console.log(movies[i]);
// }

//STEP 6
// let name;
// let movies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// for (name in movies) {
//     window.console.log(movies[name]);
// }

//STEP 7
// let name;
// let movies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// movies.sort();
// for (name in movies) {
//     window.console.log(movies[name]);
// }


//STEP 8
// let i;
// let y;
// let movies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// let leastFavMovies = ["Jaws", "Tha Last Airbender", "Glitter"];

// window.console.log("Movies I Like: " + "\n\n");

// for (i = 0; i < movies.length; i += 1) {
//     window.console.log(movies[i]);
// }
// window.console.log("");
// window.console.log("Movies I regret watching: " + "\n\n");

// for (y = 0; y < leastFavMovies.length; y += 1) {
//     window.console.log(leastFavMovies[y]);
// }


//STEP 9
// let i;
// let favMovies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// let leastFavMovies = ["Jaws", "The Last Airbender", "Glitter"];
// let movies = favMovies.concat(leastFavMovies);

// movies.reverse(movies.sort());

// for (i = 0; i < movies.length; i += 1) {
//     window.console.log(movies[i]);
// }



//STEP 10
// let i;
// let favMovies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// let leastFavMovies = ["Jaws", "The Last Airbender", "Glitter"];
// let movies = favMovies.concat(leastFavMovies);

// movies.reverse(movies.sort());
// window.console.log(movies.pop());


//STEP 11

// let favMovies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// let leastFavMovies = ["Jaws", "The Last Airbender", "Glitter"];
// let movies = favMovies.concat(leastFavMovies);

// movies.reverse(movies.sort());
// window.console.log(movies.shift());

//STEP 12  
// let i;
// let favMovies = ["Malificent", "Star wars", "Batman", "John Wick", "Minion", "Avengers", "Spiderman"];
// let leastFavMovies = ["Jaws", "The Last Airbender", "Glitter"];
// let movies = favMovies.concat(leastFavMovies);
// movies.reverse(movies.sort());
// for (i = 0; i < movies.length; i += 1) {
//     window.console.log(movies[i]);
// }
//     window.console.log('');
//     window.console.log(movies.indexOf("Jaws"));
//     window.console.log(movies.indexOf("The Last Airbender"));
//     window.console.log(movies.indexOf("Glitter"));

//  movies.splice(0, 1, "Parasite");   
//  movies.splice(6, 1, "The Pianist");
//  movies.splice(7, 1, "La La Land");
//  window.console.log(movies);

 
//STEP 13
// let employee1 = [];
// employee1["id"] = 1;
// employee1["name"] = "John Wick";
// employee1["title"] = "Executioner";
// employee1["department"] = "Managment";
// employee1["isCurrent"] = true;

// let employee2 = [];
// employee2["id"] = 2;
// employee2["name"] = "Steven Rogers";
// employee2["title"] = "Executioner";
// employee2["department"] = "S.H.E.I.L.D";
// employee2["isCurrent"] = false;

// let employees = [];
// employees[0] = employee1;
// employees[1] = employee2;


//  window.console.log(employees[1]["name"]);


//STEP 14
// let employee1 = [];
// employee1["id"] = 1;
// employee1["name"] = "John Wick";
// employee1["title"] = "Executioner";
// employee1["department"] = "Managment";
// employee1["isCurrent"] = true;

// let employee2 = [];
// employee2["id"] = 2;
// employee2["name"] = "Steven Rogers";
// employee2["title"] = "Executioner";
// employee2["department"] = "S.H.E.I.L.D";
// employee2["isCurrent"] = false;

// let employees = [];
// employees[0] = employee1;
// employees[1] = employee2;
// let i;
// for (i = 0; i < employees.length; i += 1) {
//     window.console.log(employees[i]["name"]);
// }


//STEP 15 ???
// let employee1 = [];
// employee1["id"] = 1;
// employee1["name"] = "John Wick";
// employee1["title"] = "Executioner";
// employee1["department"] = "Managment";
// employee1["isCurrent"] = true;

// let employee2 = [];
// employee2["id"] = 2;
// employee2["name"] = "Steven Rogers";
// employee2["title"] = "Executioner";
// employee2["department"] = "S.H.E.I.L.D";
// employee2["isCurrent"] = true;

// let employee3 = [];
// employee2["id"] = 3;
// employee2["name"] = "Walter White";
// employee2["title"] = "Chemist";
// employee2["department"] = "Education";
// employee2["isCurrent"] = false;

// let employees = [];
// employees[0] = employee1;
// employees[1] = employee2;
// employees[2] = employee3;

// let i;
// for (i = 0; i < employees.length; i += 1) {
//     if ( employees[i]["isCurrent"] === true) {
//         window.console.log(employees[i].name);
//     }
  
// };
// // show only JOhn Wick

//STEP 16 
// let myMovies = [['John Wick', 1], ['Parasite', 2], ['Star wars', 3], ['Avengers', 4], ['Batman', 5]];
// let i;
// for (i = 0; i < myMovies.length; i += 1) {

//     let filteredMovies = myMovies[i].filter(function(name) {
//         return typeof name === "string";
//     });
//    window.console.log(filteredMovies);
// };



//STEP 17  
// let employees = [];
// employees[0] = "Zak";
// employees[1] = "Jessica";
// employees[2] = "Mark";
// employees[3] = "Fred";
// employees[4] = "Sally";
// window.console.log("Employees:" + "\n\n");
// let showEmployee = function (name) {
//     let i;
//     for (i = 0; i < name.length; i +=1) {
        
//         window.console.log(name[i].toUpperCase());
        
//     }

// };

// showEmployee(employees);

//STEP 18 ???
// let array = [58, "abcd", true, null, false, 0];
// let filteredValue = function (array) {

//    let result = array.filter(function(item) {
//         return typeof item === "string" || item === true || item === 58;
// });
// return result;
// }

// window.console.log(filteredValue(array));

//STEP 19 
// let number = [5, 7, 9, 12, 20, 33, 64, 78, 85, 99];
// let random = number[Math.floor(Math.random()*number.length)];
// window.console.log(random);

//STEP 20
// let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//  window.console.log(Math.max(...number));
