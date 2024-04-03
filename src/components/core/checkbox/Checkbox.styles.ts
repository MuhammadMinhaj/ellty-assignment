/**
 * Defined root styles
 */
export const rootClasses = /*tw*/ 'relative w-[25px] h-[25px]';

/**
 * Defined label styles
 */
export const labelClasses =
  /*tw*/ 'absolute top-0 left-0 z-10 cursor-pointer w-full h-full flex items-center justify-center [&>*]:opacity-0 border-[1px] border-border-gray-main hover:border-border-gray-deep hover:text-border-gray-light hover:[&>*]:!opacity-100';

/**
 * Group-Hover: Defined label styles
 */
export const labelGroupHoverClasses =
  /*tw*/ 'group-hover:border-border-gray-deep group-hover:text-border-gray-light group-hover:[&>*]:!opacity-100';

export const labelGroupActiveClasses =
  /*tw*/ 'group-active:border-border-gray-deep group-active:text-text-gray group-active:[&>*]:opacity-100 group-active:shadow-[0px_0px_0px_3px_rgba(36,105,246,0.10)]';

/**
 * Defined input classes
 * */
export const inputClasses =
  /*tw*/ 'opacity-0 [&:checked+label>*]:opacity-100 [&:checked+label]:bg-accent [&:checked+label]:border-0 [&:checked+label]:text-white [&:checked+label]:after:opacity-100 [&:checked:hover+label]:bg-accent-light [&:checked:hover+label]:shadow-[0px_0px_0px_3px_rgba(36,105,246,0.10)] [&:checked:active+label]:!bg-transparent [&:checked:active+label]:!shadow-none [&:checked:active+label]:!border-[1px]  [&:checked:active+label]:!text-border-gray-light [&:active+label]:border-border-gray-deep [&:active+label]:text-text-gray [&:active+label>*]:opacity-100 [&:active+label]:shadow-[0px_0px_0px_3px_rgba(36,105,246,0.10)]';

/**
 * Rounded classes
 */
export const roundedClass = 'rounded-[6px]';
