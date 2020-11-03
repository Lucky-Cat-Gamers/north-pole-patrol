# Roadmap - North Pole Patrol

## What's done
- Replaced outside wall textures
- Replaced ground tiles with temp snowy set
- Change main page background (need to vote)
- Deployed to heroku w auto-updates
- Replaced all witch armor items with elf clothes
- 

## What needs to be done
- New logo
- Change player sprite
  - Mark drawing custom one
- Rewrite all game play menus & messaging
- Replace outside textures
- Adjust Item Detail Screen Contents
- Replace picked up items, what are they for?
- Make healing potions findable & useable
- Change Maps 1-3, will it go to 5?
- Create new monsters to fight
- Change ReadMe to NPP
- Change all border colors
- Change stats bar colors
- New game music
- Fix game music?
- Figure out how to make new portals w different tiles
- change body silhouette for armor equip

## Current To-Do List
- Level 1 Textures

## FILE DIRECTORY
### MAPS
- Excel Spreadsheet with all NPP maps
- <span style="color:orange">src/config/constant.js</span>
  - Map Size: Tile Height & Width
    - Global Sizing, Fix ALL Maps
- <span style="color:orange">src/features/map/map-tile.js</span>
  - Case: Lists All Map Objects Like Floors, Buildings, Etc
- <span style="color:orange">src/data/maps/</span>
  - Each level gets a folder with an index.js with a grid-map and lists the creatures for that level
- <span style="color:orange">public/tiles/</span>
  - PNG files: All objects used in the maps, 40x40px
- <span style="color:orange">src/_tests_/utils/get-surrounding-tiles.js</span>
  - reads/renders the surrounding tiles

### MENUS & DIALOGUE
- <span style="color:orange">src/features/game-menus/index.js</span>
  - Main Screen: On-Screen, shows Stats Bar, Inventory, Settings, Google
- <span style="color:orange">src/features/stats/index.js</span>
  - Stats Bar: On-Screen, shows level, attack, defense, HP, Exp & Gold/Candy
- <span style="color:orange">src/features/dialog-manager/index.js & reducer.js</span>
  - controls actions on main page, game start, opening menus/pages, game pause state
- <span style="color:orange">src/features/dialog-manager/dialogs/main-game-start/index.js</span>
  - First Dialog/Menu "Explore the Town of Pumpkin Falls" after the main start page

### LEADERBOARD
- <span style="color:orange">src/components/leaderboardscreen</span>
  - compiles leaderboard data
- <span style="color:orange">src/features/dialog-manager/dialogs/leaderboard-dialog</span>
  - dialog/menu page that pulls in data from leaderboardscreen component
- <span style="color:orange">src/features/dialog-manager/actions/toggle-leaderboard.js</span>
  
### SETTINGS
- <span style="color:orange">src/features/dialog-manager/index.js & reducer.js</span>
- <span style="color:orange">src/features/dialog-manager/dialogs/settings-dialog/</span>
- <span style="color:orange">src/features/game-menus/game-settings/</span>
  - Settings Icon/Button
- <span style="color:orange">src/features/dialog-manager/actions/toggle-settings.js</span>
  - Opens Settings
- <span style="color:orange">src/features/dialog-manager/actions/close-settings.js</span>
  - Close Button
- <span style="color:orange">src/features/dialog-manager/actions/is-game-paused.js</span>

### ITEMS
- <span style="color:orange">src/data/items/index.js</span>
  - imports in all items and sets them up for random loot generator
- <span style="color:orange">src/components/view-item/index.js</span>
  - Sets case for each item, equip state, Buy & Sell actions for store, & use actions for consumable items
- <span style="color:orange">src/components/equipped-items/index.js</span>
  - Handles everything to do with equipping items
- <span style="color:orange">public/tiles/</span>
  - PNG files: All objects used in the maps, 40x40px
- 
  - 
- 

### GAME SCREEN (VIEWPORT)
- <span style="color:orange">src/_tests_/utils/get-surrounding-tiles.js</span>
  - desc
- 

### MUSIC/SOUND
- <span style="color:orange"><b>src/index.js</b></span> SOUND == SAME
  - sound manager
- <span style="color:orange"><b>features/game-menus/index.js</b></span> original has snackbar, ours has leaderboard
  - imports game music button into main screen
- <span style="color:orange"><b>features/game-menus/reducer.js</b></span> SOUND == SAME
  - sets sound state
- <span style="color:orange"><b>features/game-menus/game-music/index.js</b></span>
  - imports music file, has music and sound settings
- <span style="color:orange"><b>features/game-menus/actions/game-sound-enabled.js</b></span> SOUND == SAME
  - exports sound state
- <span style="color:orange"><b>features/game-menus/actions/set-game-sound.js</b></span> SOUND == SAME
  - exports default sound state


### MISC
- <span style="color:orange"><b>src/config/constant.js</b></span>
  - Sight Radius: Adjusts visible map area
  - Sprite_Size = 40 (tile is 40px x 40px
  - Map_Padding_Distance - addt'l tiles around edges
  - 
- <span style="color:orange"><b>src/config/store.js</b></span>
  - Stats: Holds state and stat for everything (player, weapons, monsters, inventory, etc)
- <span style="color:orange"><b>src/features/stats/reducer.js</b></span>
  - Initial State: Player's starting off stats
  - Defines Cases: get gold, lose gold, equip & unequip, healing, damage, get exp & RESET
- <span style="color:orange"><b>src/features/dialog-manager/actions/close-dialog.js</b></span>
  - action code to make close button work. pulled into src/features/dialog-manager/reducer.js

### TEXTURES/TILES - GROUND AND WALLS
- <span style="color:orange">src/features/map/map-padding.js</span>
- <span style="color:orange">src/features/map/map-tile.js</span>
- <span style="color:orange"><b>src/features/map/index.js</b></span> - wallType = getWallType(map.tiles); MapPadding uses wallType - sets all wall obstacles
- <span style="color:orange">src/_tests_/utils/get-surrounding-tiles.js</span>
- <span style="color:orange"><b>src/utils/attach-meta-to-tiles.js</b></span> - sets # of tiles (variation) in a set for ground and walls

## CHANGES/TESTING
- src/config/constant.js - map-padding-distance changed from 5 to 3 - changed back, broke map
- src/index.scss - changed background color to white, changed background image, changed white border to #405685, button outline color to #aliceblue
- public/assets/style.css - changed footer background color to #ffffff
- src/components/viewport/viewport.scss - changed border to #b3000c


## EVERYTHING WITH A WHITE BORDER
- src/index.scss - has .white-border in css
- src/components/backpack-items/index.js 
- src/components/button/styles.scss - changed to red #b3000c


## MENU & DIALOG BOX CHANGES
- "Are you sure you want to quit" box - src/components/confirm-dialog/styles.scss - changed background to white & text to #f21313, box-shadow to #2953a5
- 'enter' button on main page, color background - src/components/button/styles.scss - button box changed to #87CEFA, main background changed to #6082B6
- src/features/dialog-manager/dialogs/game-text-dialog/styles.scss - changed background color to limegreen
- 'Chest Loot' menu - src/components/micro-dialog/styles.scss - added background image candy cane border, changed background to white
- 'Chest Loot' contents - src/features/dialog-manager/dialogs/chest-loot/styles.scss - changed title color to #b3000c & moved down below border, changed padding for all contents
- Global stuff - src/index.scss - changed main font to Grandstander - https://fonts.google.com/specimen/Grandstander?category=Sans+Serif,Display&sidebar.open=true&selection.family=Grandstander:wght@300
- src/components/button/styles.scss - loot & level continue/close buttons, main screen inventory button
- - src/components/dialog/styles.scss - background changed to #ffffff

## MONSTERS - ORIGINAL & WITCHFALL
- spider - hp 12  damage 1   defence 2
- dragon - hp 60  damage 15  defence 8
- goblin - hp 12  damage 4   defence 3
- imp    - hp 40  damage 10  defence 2
- lich   - hp 100 damage 22  defence 12
- rat    - hp 8   damage 2   defence 0
- stone-golem  - hp 30  damage 8   defence 5

## MONSTERS - NPP
- krampus -     hp 12  damage 1   defence 2
- dark elf -    hp 60  damage 15  defence 8
- frost giant - hp 0
- ice troll -   hp
- wolf -        hp 
- goblin -      hp 12  damage 4   defence 3
- ice spider -  hp
- blob -        hp


## WEAPONS
- wand - melee - damage 2
- snowball gun - damage 10

## ARMOR
- elf hat - armor - defense 2
- santa hat - armor - defense 6
- elf boots - armor - defense 4
- elf jacket - armor - defense 5
- mittens - armor - defense 3

## HEALING POTIONS
- candy cane - hp 10    value 10
- gingerbread - hp 20    value 20
- plum pudding - hp 30  value 40

## LANDSCAPE
- reindeer - 11
- bunny - 35
- squirrel - 36
- northpolesign - 13
- sleigh - 14
- lamp1 - 15
- lamp2 - 19
- snowglobe1 - 16
- snowglobe2 - 30
- snowglobe3 - 31
- snowglobe4 - 32
- snowman1 - 18
- snowman2 - 25
- snowman3 - 26
- snowman4 - 27
- teddybear = 28
- mailbox - 29
- train1 - 38
- train2 - 39
- train3 - 40
- xmastree1 - 12
- xmastree2 - 22
- xmastree3 - 24
- xmastree4 - 37
- snowcottage - 21
- candycottage - 23
- cottage1 - 33
- cottage3 - 34
- tower - 17
- ground(var) - 0
- stairs-down - 2
- stairs-up - 3
- chest - 4
- chest-open - -2
- snow(var) - 5
X- ornate-wall(var) - 6
X- blue-wall(var) - 7
X- skull-wall(var) - 8
X- shop - 9
X- shrine - 10
X- blood-splatter - -1

