import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column: React.FC<React.PropsWithChildren<ColumnProps>> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate App" />
      <Card text="Learn TypeScript" />
      <Card text="Use DB" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};