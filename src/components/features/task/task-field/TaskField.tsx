import { Checkbox, CheckboxProps } from '@/core/checkbox';
import { Control, Controller } from 'react-hook-form';

import { ListItem } from '@/core/list';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

// TaskFieldProps
export type TaskFieldProps = {
  id: string;
  children?: ReactNode;
  className?: string;
  checkboxProps?: CheckboxProps;
  control?: unknown;
  name?: string;
};

// TaskField
const TaskField: FC<TaskFieldProps> = ({
  id,
  children,
  className,
  name,
  checkboxProps,
  control
}) => {
  return (
    <ListItem className={clsx('group', className)}>
      <label htmlFor={id} className="flex-1 select-none">
        {children}
      </label>
      {control ? (
        <Controller
          name={name || checkboxProps?.name || 'checkbox'}
          control={control as Control}
          render={({ field }) => (
            <Checkbox id={id} enableGroupEffect {...checkboxProps} {...field} />
          )}
        />
      ) : (
        <Checkbox id={id} enableGroupEffect {...checkboxProps} />
      )}
    </ListItem>
  );
};

export default TaskField;
