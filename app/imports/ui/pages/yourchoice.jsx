import React from 'react';
import MiddleMenu from '../components/MiddleMenu';
import Middle from '../components/Middle';
import BottomMenu from '../components/BottomMenu';

export default class yourchoice extends React.Component {

  render() {
    return (
        <div>
          <MiddleMenu/>
          <Middle/>
          <BottomMenu/>
        </div>
    );
  }
}