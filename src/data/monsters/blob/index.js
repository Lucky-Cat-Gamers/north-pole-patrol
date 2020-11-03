import blobSprite from './blob.png';
//spiders would damage you for 1 if touched by adjacent square, otherwise
// eslint-disable-next-line to the line before.
const Blob = {
  hp: 30,
  maxHp: 30,
  damage: 2,
  defence: 2,
  exp: 400,
  type: 'blob',
  sprite: blobSprite
};

export default Blob;