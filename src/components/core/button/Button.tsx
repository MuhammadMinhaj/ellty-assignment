import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
import {
  commonClasses,
  fullWidthClass,
  roundedClass,
  shadowClass,
  sizeClasses,
  variationClasses
} from './Button.styles';
import { Color, Size, Variant } from './Button.types';

// Button Props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  color?: Color;
  size?: Size;
  fullWidth?: boolean;
  rounded?: boolean;
  shadow?: boolean;
};

// Button
const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'contained',
  color = 'secondary',
  size = 'md',
  fullWidth = false,
  rounded = false,
  shadow = false,
  ...rest
}) => {
  // Combined classes
  const classes = /*tw*/ clsx(
    commonClasses,
    variationClasses[color][variant],
    sizeClasses[size],
    {
      [fullWidthClass]: fullWidth,
      [roundedClass]: rounded,
      [shadowClass]: shadow
    },
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
