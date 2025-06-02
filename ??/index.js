function hey(user) {
  const name = user.name ?? "xyz";
  console.log(`Hey, ${name}!`);
}

hey({ name: "Sakshi" });
hey({ name: null });     
hey({});                

const count = 0;
console.log(count || 10);   
console.log(count ?? 10);  
