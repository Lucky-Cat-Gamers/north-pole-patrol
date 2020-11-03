import React       from 'react';
import { connect } from 'react-redux';

import Button        from '../../../../components/button';
import Dialog        from '../../../../components/dialog';
import backToSelect  from '../../actions/back-to-select';
import startMainGame from '../../../world/actions/start-main-game';

import './styles.scss';

const MainGameStart = ({ startMainGame, backToSelect }) => {
  return(
    <Dialog
      goBack={backToSelect}
      onKeyPress={startMainGame}>

      <span className='flex-row game-start__title'>
        {'Your Assignment:'}
      </span>

      <span className='flex-column game-start__text'>
        {"Help Merryweather, one of Santa's elves, search for Santa. You will find useful items in the presents!"}
      </span>

      <div className='flex-column game-start__button'>
        <Button
          onClick={startMainGame}
          icon='snowflake'
          title={'Start Search'} />
      </div>

    </Dialog>
  );
};

const actions = { backToSelect, startMainGame };

export default connect(null, actions)(MainGameStart);
