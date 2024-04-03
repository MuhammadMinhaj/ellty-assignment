import { Button } from '@/components/core/button';
import { Divider } from '@/components/core/divider';
import { List } from '@/components/core/list';
import clsx from 'clsx';
import { ChangeEventHandler, FC, FormHTMLAttributes, ReactNode } from 'react';
import {
  bodyWrapperClasses,
  buttonWrapperClasses,
  dividerWrapperClasses,
  rootClasses,
  shadowClass
} from './Task.styles';
import { TaskField } from './task-field';

// Task Props
type TaskProps = FormHTMLAttributes<HTMLFormElement> & {
  className?: string;
  children?: ReactNode;
  isSelectAll?: boolean;
  shadow?: boolean;
  onChangeSelectAll?: ChangeEventHandler<HTMLInputElement>;
};

// Task
const Task: FC<TaskProps> = ({
  children,
  className,
  isSelectAll,
  shadow = true,
  onChangeSelectAll,
  ...rest
}) => {
  return (
    <form
      className={clsx(rootClasses, className, {
        [shadowClass]: shadow
      })}
      {...rest}
    >
      <List>
        <TaskField
          id="selectAll"
          checkboxProps={{
            name: 'selectAll',
            defaultChecked: isSelectAll,
            onChange: onChangeSelectAll
          }}
        >
          All Tasks
        </TaskField>
      </List>
      <div className={clsx(dividerWrapperClasses)}>
        <Divider />
      </div>
      <List className={clsx(bodyWrapperClasses)}>{children}</List>
      <div className={clsx(dividerWrapperClasses)}>
        <Divider />
      </div>
      <div className={buttonWrapperClasses}>
        <Button type="submit" color="secondary" size="md" rounded fullWidth>
          Done
        </Button>
      </div>
    </form>
  );
};

export default Task;
