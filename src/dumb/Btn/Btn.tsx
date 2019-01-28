import * as React from 'react'

interface IProps {
  onClick: () => void
  label: string
}

class Btn extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    const {
      onClick,
      label
    } = this.props
    return (
      <button
        onClick={onClick}
      >
        {label}
      </button>
    )
  }
}

export {
  Btn
}