import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class BottomMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="three">
            <Grid.Column>
              CUSTOMER SERVICE
              <hr/>
              <List>
                <List.Item>Follow your order</List.Item>
                <List.Item>Track your exchange/return</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              SHIPPING
              <hr/>
              <List>
                <List.Item>Standard Shipping</List.Item>
                <List.Item>Express Shipping</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Return
              <hr/>
              <List>
                <List.Item>Enter email address</List.Item>
                <List.Item>SUBSCRIBE TO OUR NEWSLETTER</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}