import { FC } from 'react';

const DoubleArrowIcon: FC = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 220.682 220.682"
      className="fill-current text-gray-700"
    >
      <g>
        <polygon
          points={
            '92.695,38.924 164.113,110.341 92.695,181.758 ' +
            '120.979,210.043 220.682,110.341 120.979,10.639'
          }
        />
        <polygon
          points={
            '28.284,210.043 127.986,110.341 28.284,10.639 ' +
            '0,38.924 71.417,110.341 0,181.758'
          }
        />
      </g>
    </svg>
  );
};

export default DoubleArrowIcon;
