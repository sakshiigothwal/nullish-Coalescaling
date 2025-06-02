function formData(data) {
  const name = data.name ?? "N/A";
  const email = data.email ?? "N/A";
  const age = data.age ?? "N/A";

  return { name, email, age };
}

const userInput = { name: "", email: undefined, age: null };
console.log(formData(userInput));
