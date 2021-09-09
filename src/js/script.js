import cloneDeep from "lodash-es";

console.log("bambambgam");

const obj = {
  cart: [
    {
      prod: "bla",
      quant: 2,
    },
    {
      prod: "bli",
      quant: 6,
    },
  ],
};

const copia = cloneDeep(obj);

console.log(copia);

console.log("dana hermosa");

const thatnigga = function () {
  console.log("skere");
};

thatnigga();
