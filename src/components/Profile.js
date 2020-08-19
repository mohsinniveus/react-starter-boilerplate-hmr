import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Profile = () => {
  return (
    <Card>
      <Card.Content>
        <Image size="mini" floated="right" shape="circular" bordered src="" />
        <Card.Header>Mohsin Khan</Card.Header>
        <Card.Description>Niveus Solutions Pvt Ltd.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://twitter.com/atmohsin" target="_blank">
          <Icon name="twitter" />
          Twitter
        </a>{" "}
        <a href="https://github.com/mohsinniveus" target="_blank">
          <Icon name="github" />
          GitHub
        </a>
      </Card.Content>
    </Card>
  );
};

export default Profile;
