const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const mainDiv = document.getElementById("root");

  const header1 = document.createElement("h1");
  const list = document.createElement("ul");

  users.map((user) => {
    let listItem = document.createElement("li");

    listItem.append(`Name:${user.name}, Age:${user.age},  Occupation: ${user.occupation}`);

    return list.append(listItem)
  });

  header1.append("FREELANCERS");
  mainDiv.append(header1, list);
  
}

//call the main function
main();