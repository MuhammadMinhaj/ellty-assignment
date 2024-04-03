import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { commonClasses, dividerClasses, roundedClass, shadowClass } from './List.styles';
import { ListItem } from './list-item';

// List Props
type ListProps = HTMLAttributes<HTMLUListElement> & {
  rounded?: boolean;
  shadow?: boolean;
  divider?: boolean;
  children?: ReactNode | typeof ListItem;
};

// List
const List: FC<ListProps> = ({
  children,
  className,
  divider = false,
  rounded = false,
  shadow = false,
  ...rest
}) => {
  // Combined classes
  const classes = /*tw*/ clsx(
    commonClasses,
    {
      [dividerClasses]: divider,
      [shadowClass]: shadow,
      [roundedClass]: rounded
    },
    className
  );

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};

export default List;
