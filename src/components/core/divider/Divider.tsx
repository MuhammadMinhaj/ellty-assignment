import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import { commonClasses, horizontalClasses, verticalClasses } from './Divider.styles';

// Divider Props
type DividerProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  direction?: 'horizontal' | 'vertical';
};

// Divider
const Divider: FC<DividerProps> = ({ className, children, direction = 'horizontal', ...rest }) => {
  const combinedClasses = /*tw*/ clsx(
    commonClasses,
    {
      [horizontalClasses]: direction === 'horizontal',
      [verticalClasses]: direction === 'vertical'
    },
    className
  );
  return (
    <div className={combinedClasses} {...rest}>
      {children}
    </div>
  );
};

export default Divider;
