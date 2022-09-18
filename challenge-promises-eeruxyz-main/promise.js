const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async emosi => {
      try {
        const theaterixx = await promiseTheaterIXX();
        const theatervgc = await promiseTheaterVGC();

        const hasil = theaterixx
            .map(item => item.hasil)
            .concat(theatervgc.map(item => item.hasil));

        emosi = hasil.filter(hasil => hasil === emosi);

        return emosi.length;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
  promiseOutput,
};
