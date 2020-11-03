import React from 'react';

import Flame           from '../../components/flame';
import { SPRITE_SIZE } from '../../config/constants';

const MapTile = ({ tile, index, sightBox }) => {

  let inSight = false;
  // if you need to render the sightBox
  if(sightBox) {
    // check the sight box tiles
    sightBox.forEach(sightValue => {
      // if the current tile is in range
      if(JSON.stringify(sightValue) === JSON.stringify(index)) {
        // remove the overlay
        return inSight = true;
      }
    });
  }
  // case for rendering animated flame tile
  if(tile.value === 20) {
    return (
      <GroundTile variation={tile.variation}>
        <Flame position={index}>
          <FogTile explored={tile.explored} inSight={inSight} />
        </Flame>
      </GroundTile>
    );
  }
  // case for rendering normal tiles
  return (
    <GroundTile variation={tile.variation}>
      <div style={{
        backgroundImage: `url(/tiles/${getTileSprite(tile.value, tile.variation)}.png)`,
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}>
        <FogTile explored={tile.explored} inSight={inSight} />
      </div>
    </GroundTile>
  );
};

export function getTileSprite(type, variation) {
  switch(type) {
    case -2:
      return 'chest-open';
    case -1:
      return 'blood-splatter';
    case 0:
      return `ground-${variation}`;
    case 2:
      return 'stairs-down';
    case 3:
      return 'stairs-up';
    case 4:
      return 'chest';
    case 5:
      return `snow-${variation}`;
    case 6:
      return `ornate-wall-${variation}`;
    case 7:
      return `blue-wall-${variation}`;
    case 8:
      return `skull-wall-${variation}`;
    case 9:
      return 'shop';
    case 10:
      return 'shrine';
    case 11:
      return 'reindeer';
    case 12:
      return 'xmastree1';
    case 13:
      return 'northpolesign';
    case 14:
      return 'sleigh';
    case 15:
      return 'lamp1';
    case 16:
      return 'snowglobe1';
    case 17:
      return 'tower';
    case 18:
      return 'snowman1';
    case 19:
      return 'lamp2';
    case 21:
      return 'snowcottage';
    case 22:
      return 'xmastree2';
    case 23:
      return 'candycottage';
    case 24:
      return 'xmastree3';
    case 25:
      return 'snowman2';
    case 26:
      return 'snowman3';
    case 27:
      return 'snowman4';
    case 28:
      return 'teddybear';
    case 29:
      return 'mailbox';
    case 30:
      return 'snowglobe2';
    case 31:
      return 'snowglobe3';
    case 32:
      return 'snowglobe4';
    case 33:
      return 'cottage1';
    case 34:
      return 'cottage3';
    case 35:
      return 'bunny';
    case 36:
      return 'squirrel';
    case 37:
      return 'xmastree4';
    case 38:
      return 'train1';
    case 39:
      return 'train2';
    case 40:
      return 'train3';
                    
    default:
  }
}

export const FogTile = ({ inSight, explored }) => {
  // show the tile by default
  let opacity = '0';
  // if the tile is out of sight, show faded
  if(!inSight) opacity = '0.5';
  // if the tile is unexplored, hide it
  if(!explored) opacity = '1';
  // render fog tiles
  return (
    <div style={{
      backgroundColor: '#000',
      opacity,
      display: 'inline-flex',
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
      transition: 'opacity .5s linear'
    }} />
  );
};

const GroundTile = ({ variation, children }) => {
  return (
    <div style={{
      backgroundImage: `url('/tiles/ground-${variation}.png')`,
      display: 'inline-flex',
      height: SPRITE_SIZE,
      width: SPRITE_SIZE
    }}>
      { children }
    </div>
  );
};

export default MapTile;