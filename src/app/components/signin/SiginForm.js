import { useTranslation } from "@/app/i18n";
import { TextInput, PasswordInput, Anchor, Paper, Title, Group, Button, Stack } from "@mantine/core";

async function SiginForm() {
  const { t } = await useTranslation("en")

  return (
    <Group p={"xl"} w={"100%"} justify="center">
      <Stack w={400}>
        <Title ta="center">{t("auth.title")}</Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label={t("label.email")} required />
          <PasswordInput label={t("label.password")} required mt="md" />
          <Group justify="space-between" mt="lg">
            <Anchor component="button" size="sm">
              {t("auth.forgotPassword")}
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            {t("button.signIn")}
          </Button>
        </Paper>
      </Stack>
    </Group>
  );
}
export default SiginForm;
