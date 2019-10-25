import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Menu.Item> MEN </Menu.Item>
            <Menu.Item> WOMEN </Menu.Item>
            <Menu.Item> KIDS </Menu.Item>
            <Menu.Item> COLLECTIONS </Menu.Item>
            <Menu.Item> #D2LIFE </Menu.Item>
            <Menu.Item> RESORT SS20 </Menu.Item>
          </Grid>
        </Menu>
    );
  }
}