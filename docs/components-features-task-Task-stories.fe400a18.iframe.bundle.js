"use strict";(self.webpackChunkellty_assignment=self.webpackChunkellty_assignment||[]).push([[117],{"./src/components/features/task/Task.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_utils_tasks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/tasks.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_Task__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/features/task/Task.tsx"),_task_field__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/features/task/task-field/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Features/Task",component:_Task__WEBPACK_IMPORTED_MODULE_3__.A,subcomponents:{TaskField:_task_field__WEBPACK_IMPORTED_MODULE_4__.Q},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{className:"min-w-[370px]",onSubmit:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},items=[..._utils_tasks__WEBPACK_IMPORTED_MODULE_1__.p],Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_3__.A,{...args,children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_task_field__WEBPACK_IMPORTED_MODULE_4__.Q,{id:item.id,children:item.name},item.id)))}),args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  render: args => <Task {...args}>\r\n      {items.map(item => <TaskField key={item.id} id={item.id}>\r\n          {item.name}\r\n        </TaskField>)}\r\n    </Task>,\n  args: {}\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]}}]);