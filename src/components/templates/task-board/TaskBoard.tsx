'use client';
import { TaskField } from '@/features/task';
import Task from '@/features/task/Task';
import { tasksList } from '@/utils/tasks';
import clsx from 'clsx';
import { ChangeEvent, FC, FormHTMLAttributes } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { TaskBoardForm } from './TaskBoard.types';
// TaskBoard Props
type TaskBoardProps = FormHTMLAttributes<HTMLFormElement> & {
  className?: string;
};

// TaskBoard
const TaskBoard: FC<TaskBoardProps> = ({ className }) => {
  /**
   * Managed tasks state
   */
  const { handleSubmit, control, setValue } = useForm<TaskBoardForm>({
    defaultValues: {
      items: [...tasksList]
    }
  });
  /**
   * Tasks in array fields
   */
  const { fields } = useFieldArray<TaskBoardForm>({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: 'items' // unique name for your Field Array
  });

  /**
   * Select/Deselect tasks based on the `checked` property
   */
  const onChangeSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(
      'items',
      fields.map((field) => ({
        ...field,
        isCompleted: e.target.checked
      }))
    );
  };

  /**
   * Clear all the completed tasks based on the `isCompleted` property
   */
  const onSubmit = (values: TaskBoardForm) => {
    setValue(
      'items',
      values.items.filter((field) => !field.isCompleted)
    );
  };

  return (
    <div className={clsx(className)}>
      <Task onSubmit={handleSubmit(onSubmit)} onChangeSelectAll={onChangeSelectAll}>
        {fields.map((field, i) => (
          <TaskField
            key={field.id}
            id={field.id}
            name={`items.${i}.isCompleted`}
            control={control}
            checkboxProps={{ defaultChecked: field.isCompleted }}
          >
            {field.name}
          </TaskField>
        ))}
      </Task>
    </div>
  );
};

export default TaskBoard;
