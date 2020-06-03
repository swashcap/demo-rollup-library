import React from 'react';
import classNames from 'classnames';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...rest }, ref) => (
    <button
      className={classNames(
        'button',
        variant === 'primary' && 'button--primary',
        variant === 'secondary' && 'button-secondary',
        className
      )}
      ref={ref}
      {...rest}
    />
  )
);
