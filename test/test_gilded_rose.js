var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose');

// var grose_tests = require('../tests.json'); // Once the Test Cases are created

describe("Gilded Rose", function() {

  // for (const grose_test of grose_tests)
  // {
  //   const [
  //     name,
  //     sellIn,
  //     quality,
  //     outputSellIn,
  //     outputQuality
  //   ] = grose_test;

  //   const description_value = {
  //     name,
  //     sellIn,
  //     quality,
  //     outputSellIn,
  //     outputQuality
  //   };

  //   it(JSON.stringify(description_value), () => {
  //         const gildedRose = new Shop([ new Item(name, sellIn, quality) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].sellIn).to.equal(outputSellIn);
  //         expect(items[0].quality).to.equal(outputQuality);
  //   });

  // }

  'If any new name comes up then add into below const names and execute "npm run test > tests.json" to generate testcases then enable above code lie number 4, 8-33'

  it("generateGRose", function() {

    const tests = [];
    const names = [
      'Aged Brie',
      'Backstage passes to a TAFKAL80ETC concert',
      'Sulfuras, Hand of Ragnaros',
      'conjured items'
    ];
    const [minSellIn, maxSellIn] = [-1, 12];
    const [minQuality, maxQuality] = [0, 51];

    for (const name of names)
    {
      for (let sellIn=minSellIn;sellIn<= maxSellIn;sellIn++)
      {
        for (let quality = minQuality; quality<= maxQuality; quality++)
        {
          const gildedRose = new Shop([ new Item(name, sellIn, quality) ]);
          const items = gildedRose.updateQuality();
          const outputSellIn = items[0].sellIn;
          const outputQuality = items[0].quality;

          tests.push([
            name,
            sellIn,
            quality,
            outputSellIn,
            outputQuality,

          ]);
        }
      }
    }
    console.log(JSON.stringify(tests));
    console.log(tests.length);
  });
});
