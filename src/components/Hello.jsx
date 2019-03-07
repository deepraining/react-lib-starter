// @flow

import * as React from 'react';

type Props = {
  name: string,
};

export default class Hello extends React.Component<Props> {
  render() {
    const { name } = this.props;

    return <p className="starter-hello">Hello, {name}!</p>;
  }
}
