module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('carstypes', [
      {
        id: 1,
        type: 'CAMINHÃO',
      },
      {
        id: 2,
        type: 'CAMINHONETE',
      },
      {
        id: 3,
        type: 'MICRO-ÔNIBUS',
      },
      {
        id: 4,
        type: 'MOTOCICLETA',
      },
      {
        id: 5,
        type: 'ÔNIBUS',
      },
      {
        id: 6,
        type: 'PASSEIO',
      },
      {
        id: 7,
        type: 'REBOQUE',
      },
      {
        id: 8,
        type: 'TRATOR',
      },
      {
        id: 9,
        type: 'VAN',
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
