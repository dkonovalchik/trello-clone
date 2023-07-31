import { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm: React.FC<NewItemFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            onAdd(text);
          }
        }}
      />
      <NewItemButton
        onClick={() => onAdd(text)}
      >
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};