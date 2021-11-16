import { useButton } from "../../hooks/useButton";
import { Button } from "../Button";
import { Container, Content, HeaderCotent } from "./styles";

const mapsButton = [
  { key: 1, label: "JANEIRO", icon: "mês:" },
  { key: 2, label: "FEVEREIRO", icon: "mês:" },
  { key: 3, label: "MARÇO", icon: "mês:" },
  { key: 4, label: "ABRIL", icon: "mês:" },
  { key: 5, label: "MAIO", icon: "mês:" },
  { key: 6, label: "JUNHO", icon: "mês:" },
  { key: 7, label: "JULHO", icon: "mês:" },
  { key: 8, label: "AGOSTO", icon: "mês:" },
];

const contentButton = [
  { key: 1, content: "adasda" },
  { key: 2, content: "25323" },
  { key: 3, content: "content 3" },
  { key: 4, content: "content 4" },
  { key: 5, content: "content 5" },
  { key: 6, content: "content 6" },
  { key: 7, content: "content 7" },
  { key: 8, content: "content 8" },
];

export function Teste() {
  const { list } = useButton();

  const verifyContent = () => {
    console.log(list);
    const myFilter = contentButton.find((element) => element.key === list.key);

    console.log(contentButton.find((element) => element.key === list.key));
    return <Content>{myFilter?.content}</Content>;
  };

  return (
    <Container>
      <HeaderCotent>
        {mapsButton.map(({ key, icon, label }) => (
          <>
            <Button key={key} id={key} label={label} icon={icon} />
          </>
        ))}
      </HeaderCotent>

      {verifyContent()}
    </Container>
  );
}
