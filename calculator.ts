export type Operation = "multiply" | "add" | "divide";

export const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case "add":
      return a + b;

    case "multiply":
      return a * b;

    case "divide":
      return a / b;

    default:
      throw new Error("Operation is not multiply,divide or add.");
  }
};

try {
  console.log(calculator(1, 2, "multiply"));
} catch (error: unknown) {
  let errorMessage = "Something went wrong";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
