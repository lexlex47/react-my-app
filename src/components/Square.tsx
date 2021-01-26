import React from 'react';

type Props = {
  value: string | null;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  key: string;
 }

function Square(props: Props) {

      return (
        <button 
            className="square" 
            onClick={props.onClick}
        >
          {props.value}
        </button>
      );
  }

  export default Square;