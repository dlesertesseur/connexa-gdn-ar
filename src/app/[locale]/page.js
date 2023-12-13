import { Title } from "@mantine/core";


export default function Home({params}) {
  return <Title>{`HOME -> ${params.locale}`}</Title>;
}
