import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import {
  inputClasses,
  labelClasses,
  labelGroupActiveClasses,
  labelGroupHoverClasses,
  rootClasses,
  roundedClass
} from './Checkbox.styles';

// Checkbox Props
export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  rounded?: boolean;
  rootClassName?: string;
  labelClassName?: string;
  enableGroupEffect?: boolean;
};

// Checkbox
const Checkbox: FC<CheckboxProps> = ({
  className,
  rootClassName,
  labelClassName,
  rounded = true,
  enableGroupEffect = false,
  id = 'checkbox',
  ...rest
}) => {
  /**
   * Parent classes
   */
  const combinedRootClasses = /*tw*/ clsx(rootClasses, rootClassName);

  /**
   * Label classes
   * */
  const combinedLabelClasses = /*tw*/ clsx(labelClasses, labelClassName, {
    [roundedClass]: rounded,
    [labelGroupHoverClasses]: enableGroupEffect,
    [labelGroupActiveClasses]: enableGroupEffect
  });

  /**
   * Input classes
   * */
  const combinedInputClasses = /*tw*/ clsx(inputClasses, className);

  return (
    <div className={combinedRootClasses}>
      <input type="checkbox" id={id} className={combinedInputClasses} {...rest} />
      <label htmlFor={id} className={combinedLabelClasses}>
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
            stroke="currentColor"
            stroke-linecap="round"
          />
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
