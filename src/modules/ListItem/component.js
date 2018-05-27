import React from 'react';

export class Component extends React.Component {

  static displayName = 'ListItem'

  shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text;
  }

  render() {
    const {
      text, onClickDelete, cssClass=''
    } = this.props;
    return (
      <div className={cssClass}>
        {text}
        <span onClick={onClickDelete}>&times;</span>
      </div>
    );
  }

}