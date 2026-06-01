interface Greeting {
  message: string;
  language: string;
}

function formatGreeting(greeting: Greeting): string {
  return `[${greeting.language}] ${greeting.message}`;
}

class Greeter {
  private greeting: Greeting;

  constructor(message: string, language: string) {
    this.greeting = { message, language };
  }

  greet(): string {
    return formatGreeting(this.greeting);
  }
}

const greeter = new Greeter("Hello, world!", "en");
console.log(greeter.greet());
