import clsx from 'clsx';
import { FC, LiHTMLAttributes } from 'react';
import { commonClasses, dividerClass, sizeClasses } from './ListItem.styles';
import { Size } from './ListItem.types';

// ListItem Props
type ListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  size?: Size;
  divider?: boolean;
};

// ListItem
const ListItem: FC<ListItemProps> = ({
  children,
  className,
  size = 'md',
  divider = false,
  ...rest
}) => {
  // Combined classes
  const classes = /*tw*/ clsx(
    commonClasses,
    sizeClasses[size],
    {
      [dividerClass]: divider
    },
    className
  );

  return (
    <li className={classes} {...rest}>
      {children}
    </li>
  );
};

export default ListItem;
