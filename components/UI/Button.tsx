import { FC } from 'react';

type Props = {
  name: string;
  isDisabled: boolean;
  onClick: () => void;
};

const Button: FC<Props> = ({ name, isDisabled, onClick }) => {
  return (
    <div>
      <button
        type="button"
        className={
          'text-white font-normal tracking-wide py-2 px-3 rounded-lg ' +
          (isDisabled
            ? 'bg-gray-500 opacity-50 cursor-not-allowed'
            : 'transition duration-200 ease-in-out shadow-lg hover:shadow-xl ' +
              'active:opacity-40 ' +
              'bg-red-500 hover:bg-red-600')
        }
        disabled={isDisabled}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
