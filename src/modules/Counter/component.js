import React from 'react';

export class Component extends React.PureComponent {

  static displayName = 'Counter'
  
  render() {
    const { counter, cssClass='' } = this.props;
    return (
      <p className={cssClass}><span>{counter}</span> remaining</p>
    );
  }
}