import satchelUpgrade   from './other/satchel-upgrade';
import DiamondRing      from './rings/diamond-ring';
import AmethystRing     from './rings/amethyst-ring';
import OldRing          from './rings/old-ring';
import HpPotion         from './other/hp-potion';
import GreatHpPotion    from './other/great-hp-potion';
import witchGloves      from './armor/witch-gloves';
import witchHat         from './armor/witch-hat';
import santaHat         from './armor/santa-hat';
import witchBoots       from './armor/witch-boots';
import witchCape        from './armor/witch-cape';
import staff            from './weapons/staff';
import snowballGun      from './weapons/snowballgun';
import bell             from './ingredients/bell';
import bow              from './ingredients/bow';
import candle           from './ingredients/candle';
import candyCane        from './ingredients/candycane';
import gingerBread      from './ingredients/gingerbread';
import button           from './ingredients/button';


const items = {
  weapons: {
    staff,
    snowballGun
  },
  armor: {
    witchCape,
    witchBoots,
    witchGloves,
    witchHat,
    santaHat
  },
  rings: {
    AmethystRing,
    DiamondRing,
    OldRing
  },
  other: {
    candyCane,
    HpPotion,
    gingerBread,
    GreatHpPotion,
    satchelUpgrade
  },
ingredients: {
    bell,
    button,
    bow,
    candle
  }
};

export const randomItemsT1 = [
  bell,
  bow,
  button,
  candle,
  candyCane,
  gingerBread,
  HpPotion,
  snowballGun,
  witchBoots,
  witchCape,
  witchGloves,
  witchHat
];

 export const randomItemsT2 = [
  ...randomItemsT1,
  AmethystRing,
  DiamondRing
 ];

export default items;
