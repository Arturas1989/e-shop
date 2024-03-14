import { useState, type ReactNode } from 'react';
import { ExpandControlIcon } from './ExpandControlIcon';

type QuestionProps = {
  children: ReactNode;
};

export const Question = ({ children }: QuestionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="question">
      <div className="colapsed">
        <p>{children}</p>
        {isExpanded ? (
          <ExpandControlIcon
            className="bi bi-chevron-up"
            setIsExpanded={setIsExpanded}
          />
        ) : (
          <ExpandControlIcon
            className="bi bi-chevron-down"
            setIsExpanded={setIsExpanded}
          />
        )}
      </div>
      {isExpanded && (
        <p data-testid="expanded-answer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, at
          qui nostrum officia natus perferendis neque unde eveniet, quo eius
          optio soluta quae dicta ea autem dolorum minus voluptatibus tempora?
        </p>
      )}
    </div>
  );
};
