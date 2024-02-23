import bcrypt from "bcryptjs";

export const seed = async (knex) => {
  // Deletes ALL existing entries
  // await knex('users').del();


  const password =  await bcrypt.hash('123123123', 12);
  
  // Inserts seed entries
  await knex('users').insert([
    { email: 'mr.shoaibmuneer.ahmed@gmail.com', password: password, name: 'Shoaib Ahmed'},
  ]);
};
