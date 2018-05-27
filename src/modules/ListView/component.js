import React from 'react';

export class Component extends React.Component {

  static displayName = 'ListView'

  shouldComponentUpdate(nextProps) {
    return this.props.items !== nextProps.items;
  }

  render() {
    const {
      items=[], renderItem, renderEmpty, cssClass=''
    } = this.props;
    return (
      <div>
        { items.length ?
          items.map((item, index) => renderItem(item, index)) :
          renderEmpty()
        }
      </div>
    );
  }
}