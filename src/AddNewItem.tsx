import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem: React.FC<AddNewItemProps> = ({
  onAdd,
  toggleButtonText,
  dark
}) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    ///
  }

  return (
    <AddItemButton
      dark={dark}
      onClick={() => setShowForm(true)}
    >
      {toggleButtonText}
    </AddItemButton>
  )
};