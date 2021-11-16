import { useButton } from "../../hooks/useButton";
import { Container } from "./styles";

interface ButtonProps {
  label: string;
  icon: string;
  id: number;
}

export function Button({ label, icon, id }: ButtonProps) {
  const { modifyList } = useButton();
  function resetButton() {
    modifyList({ key: id });
  }
  return (
    <>
      <Container onClick={resetButton}>
        {icon} {label}
      </Container>
    </>
  );
}
