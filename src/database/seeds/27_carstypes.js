module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('carstypes', [
      {
        id: 1,
        type: 'Caminhão',
      },
      {
        id: 2,
        type: 'Caminhonente',
      },
      {
        id: 3,
        type: 'Micro-ônibus',
      },
      {
        id: 4,
        type: 'Motocicleta',
      },
      {
        id: 5,
        type: 'Ônibus',
      },
      {
        id: 6,
        type: 'Passeio',
      },
      {
        id: 7,
        type: 'Reboque',
      },
      {
        id: 8,
        type: 'Trator',
      },
      {
        id: 9,
        type: 'Van',
      },
    ], {});
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
