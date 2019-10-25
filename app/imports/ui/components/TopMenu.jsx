import React from 'react';
import { Container, Menu, Icon, Dropdown, itemStyle, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item style={itemStyle}><Icon size="small" inverted name="phone"/>SIGH IN: US</Menu.Item>
            <Menu.Item style={itemStyle}><Icon size="large" inverted name="mail"/>STORE LOCATOR</Menu.Item>
            <Image position='centered' src="https://www.dsquared2.com/ytos/resources/DSQUARED/release2017/images/logo.svg"/>
            <Menu.Item position="right">SEARCH</Menu.Item>
            <Menu.Item >SIGH IN / REGISTER</Menu.Item>
            <Menu.Item >BAG</Menu.Item>
          </Container>
        </Menu>
    );
  }
}