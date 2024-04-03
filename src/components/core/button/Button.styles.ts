import { SizeStyles, VariationStyles } from './Button.types';

/**
 * Defined default styles
 */
export const commonClasses = /*tw*/ 'font-normal transition';

/**
 * Defined styles based on the variations and colors
 */
export const variationClasses: VariationStyles = /*tw*/ {
  primary: {
    contained: 'bg-primary text-white',
    outlined: 'border border-primary text-primary',
    text: 'text-primary'
  },
  secondary: {
    contained: 'bg-secondary text-primary hover:bg-secondary-light active:bg-secondary',
    outlined:
      'border border-secondary text-secondary hover:border-secondary-light hover:text-secondary-light active:border-secondary active:text-secondary',
    text: 'text-secondary hover:text-secondary-light active:text-secondary'
  },
  'secondary-light': {
    contained: 'bg-secondary-light text-primary hover:bg-secondary active:bg-secondary-light',
    outlined:
      'border border-secondary-light text-secondary-light hover:border-secondary hover:text-secondary active:border-secondary-light active:text-secondary-light',
    text: 'text-secondary-light hover:text-secondary active:text-secondary-light'
  }
};

/**
 * Defined sizes
 */
export const sizeClasses: SizeStyles = /*tw*/ {
  sm: 'px-[10px] py-[5px]',
  md: 'px-[20px] py-[10px]',
  lg: 'px-[30px] py-[15px]'
};

/**
 * Defined fullwidth style
 */
export const fullWidthClass: string = /*tw*/ 'w-full';

/**
 * Defined round style
 */
export const roundedClass: string = /*tw*/ 'rounded-[4px]';

/**
 * Defined shadows style
 */
export const shadowClass: string =
  /*tw*/ 'shadow-[0px_0px_4px_0px_rgba(20,20,20,0.10),0px_8px_15px_0px_rgba(20,20,20,0.12)]';
