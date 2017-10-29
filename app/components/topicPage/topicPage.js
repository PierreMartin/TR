import React from 'react';

const TopicPage = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    blha blah...
  </div>
);

export default TopicPage;