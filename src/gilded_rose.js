class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Static Items are segregatd and listed

const ItemTypes = {
  BRIE: 'Aged Brie',
  CONCERT: 'Backstage passes to a TAFKAL80ETC concert',
  HAND: 'Sulfuras, Hand of Ragnaros',
  CONJURED: 'Conjured Items',
}

function updateBrie(item)
{
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
}

function updateConcert(item)
{
  if (item.quality < 50) {
    item.quality = item.quality + 1;
    if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
    if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
}

function updateHand(item)
{
}

function updateNormal(item)
{
  if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
        item.quality = item.quality - 1;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {

      switch(item.name){
        case ItemTypes.BRIE:
          updateBrie(item);
          continue;
        case ItemTypes.CONCERT:
          updateConcert(item);
          continue;
        case ItemTypes.HAND:
          updateHand(item);
          continue;
        default:
          updateNormal(item);
          continue;
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
