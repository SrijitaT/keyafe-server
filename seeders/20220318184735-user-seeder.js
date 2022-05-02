'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
   let password1 = await bcrypt.hash("srijita123", 10);
   let password2 = await bcrypt.hash("test123", 10);
   let password3 = await bcrypt.hash("chandan123", 10);
     await queryInterface.bulkInsert('users', [{
        name: 'Srijita Thakur',
        username: 'srijita',
        phone:'9339072217',
        email_id:'srijita.thakur@gmail.com',
        gender:"Female",
        password:password1,
        isRegistered:true,
        role:'admin'
     },
     {
      name: 'Test',
      username: 'test',
      phone:'9439072257',
      email_id:'test@gmail.com',
      gender:"Male",
      password:password2,
      isRegistered:true,
      role:'customer'
   },
   {
    name: 'Chandan Bose',
    username: 'chandan',
    phone:'9674979475',
    email_id:'bosechandan21@gmail.com',
    gender:"Male",
    password:password3,
    isRegistered:true,
    role:'admin'
 }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
