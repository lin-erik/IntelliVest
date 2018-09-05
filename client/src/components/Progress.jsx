import React from 'react';
import { Dimmer, Loader, Image } from 'semantic-ui-react';

const Progress = props => {
  if (props.completed) {
    return null;
  } else {
    return (
      <div>
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>

        <Image src="/images/wireframe/short-paragraph.png" />
      </div>
    );
  }
};

export default Progress;
