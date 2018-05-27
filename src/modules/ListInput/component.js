import React from 'react';

export class Component extends React.Component {

  static displayName = 'ListInput'

  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    const {
      handleChange,
      handleSubmit,
      value='',
      placeholder='',
      btnLabel='',
      cssClass=''
    } = this.props;
    return (
      <div className={cssClass}>
        <input  type="text"
                onChange={handleChange}
                placeholder={placeholder}
                value={value}
        />
        <button onClick={handleSubmit}>{btnLabel}</button>
      </div>
    );
  }
}