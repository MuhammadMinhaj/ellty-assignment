import { SizeStyles } from './ListItem.types';

/**
 * Defined default styles
 */
export const commonClasses =
  /*tw*/ 'font-normal text-[14px] text-primary flex justify-between items-center';

/**
 * Defined sizes
 */
export const sizeClasses: SizeStyles = /*tw*/ {
  sm: 'pl-[16px] pr-[10px] py-[5px]',
  md: 'pl-[22px] pr-[15px] py-[8px]',
  lg: 'pl-[25px] pr-[18px] py-[10px]'
};

/**
 * Defined divider style
 */
export const dividerClass: string =
  /*tw*/ 'border-b-[1px] border-b-border-gray-main last:border-b-0';
