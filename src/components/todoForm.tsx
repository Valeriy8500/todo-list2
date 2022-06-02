import React from 'react';

interface ITodoFormProps {
  onAdd: (title: string) => void;
}

/**
 * В компоненте представленны 2 варианта его реализации: через useState и useRef
 */
export const TodoForm: React.FC<ITodoFormProps> = ({ onAdd }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        id='title'
        placeholder='Введите название дела'
      />
      <label htmlFor="title" className='active'>
        Введите название дела
      </label>
    </div>
  )
};
