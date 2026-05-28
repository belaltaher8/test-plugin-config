interface User {
  id: number;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

function getUserById(users: User[], id: number): User | undefined {
  return users.find((u) => u.id === id);
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const foundUser = getUserById(users, 1);
if (foundUser) {
  console.log(greetUser(foundUser));
}
