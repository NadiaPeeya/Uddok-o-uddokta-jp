import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Top from './../Home/Top/Top';
import Footer from './../Shared/Footer/Footer';
import BoardMembers from './BoardMembers/BoardMembers';

const BoardAndTeam = () => {
    return (
        <div>
            <Top></Top>
          <Navigation></Navigation>
          <BoardMembers></BoardMembers>
          <Footer></Footer>
        </div>
    );
};

export default BoardAndTeam;