import Dragon     from './dragon';
import Goblin     from './goblin';
import Krampus        from './krampus';
import Lich       from './lich';
import Rat        from './rat';
import StoneGolem from './stone-golem';
import Spider from './spider';
import Blob from './blob';
import Wolf from './wolf';
import darkElf from './dark_elf';
import iceTroll from './ice_troll';
import frostGiant from './frost_giant';
import AngryMob from './angryMob';

const monsters = {
  dragon: Dragon,
  blob: Blob,
  wolf: Wolf,
  darkelf: darkElf,
  icetroll: iceTroll,
  frostgiant: frostGiant,
  goblin: Goblin,
  krampus: Krampus,
  lich: Lich,
  rat: Rat,
  spider: Spider,
  angryMob: AngryMob,
  'stone-golem': StoneGolem
};

export default monsters;
