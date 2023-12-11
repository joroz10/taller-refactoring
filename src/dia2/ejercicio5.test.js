const users = [
  {
    userName: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: [],
  },
  {
    userName: "norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    userName: "mfowler",
    firstName: "Martin",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    userName: "kent",
    firstName: "Kent",
    lastName: "Beck",
    likes: ["TDD", "wikis", "Design Patterns"],
  },
];

const lookup = (userName, property) => {
  const user = users.find((user) => user.userName === userName);

  if (!user) {
    throw new Error("Could not find user");
  }

  if (!user[property]) {
    throw new Error("Could not find property");
  }

  return user[property];
};
