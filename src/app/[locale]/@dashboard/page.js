import { Title } from "@mantine/core";

export default function Dashboard({params}) {
  
  return <Title>{`DASHBOARD HOME -> ${params.locale}`}</Title>;
}
