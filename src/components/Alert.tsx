import React from 'react';
import classNames from 'classnames';

export type AlertVariant = 'error' | 'warning' | 'success';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * `Alert` displays a close button when this property is passed. Response to user-initiated closes by adding an event handler.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * The alert's visual variant, representing the meaning of the alert.
   *
   * @default 'success'
   */
  variant?: AlertVariant;
}

export default class Alert extends React.Component<AlertProps> {
  private buttonRef = React.createRef<HTMLButtonElement>();

  static defaultProps = {
    variant: 'success',
  };

  /**
   * Focus the Alert's button if present.
   *
   * @public
   */
  focusButton(options?: FocusOptions) {
    if (this.buttonRef.current) {
      this.buttonRef.current.focus(options);
    }
  }

  render() {
    const { children, className, onClose, variant, ...rest } = this.props;

    return (
      <div
        className={classNames(
          'alert',
          variant === 'error' && 'alert--error',
          variant === 'success' && 'alert--success',
          variant === 'warning' && 'alert--warning',
          className
        )}
        role="alert"
        {...rest}
      >
        <div className="alert__content">{children}</div>
        {!!onClose && (
          <button
            aria-label="Close"
            className="alert__button"
            onClick={onClose}
            ref={this.buttonRef}
            type="button"
          >
            ✕
          </button>
        )}
      </div>
    );
  }
}
