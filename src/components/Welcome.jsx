// @flow

import * as React from 'react';

type Props = {
  name: string,
};

export default class Welcome extends React.Component<Props> {
  render() {
    const { name } = this.props;

    return <p className="starter-welcome">Welcome, {name}!</p>;
  }
}
