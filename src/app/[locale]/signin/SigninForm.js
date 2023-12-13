"use client";
import { TextInput, PasswordInput, Paper, Group, Button, Alert, Stack, Image, Text, Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "../components/Logo";
import { useTranslations } from "next-intl";

export function SigninForm() {
  const t = useTranslations("auth");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    // CANBIAR LA VALIDACION DE LA CLAVE a minimo 6 caracteres
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : t("validation.emailFormat")),
      password: (val) => (val.length <= 2 ? t("validation.passwordFormat") : null),
    },
  });

  const signIn = (data) => {
    console.log("signIn data -> ", data);
  };

  return (
    <Container>
      <Stack m={"xl"} p={"xl"} align="center">
        <Paper withBorder shadow="md" px={30} pb={30} radius="md" bg={"gray.1"} w={400}>
          <Group justify="center" py={20}>
            <Logo size={70} />
          </Group>
          <form
            autoComplete="false"
            onSubmit={form.onSubmit((values) => {
              signIn({ email: values.email, password: values.password });
            })}
          >
            <TextInput
              label={t("label.email")}
              placeholder={t("placeholder.email")}
              onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
              error={form.errors.email}
            />
            <PasswordInput
              label={t("label.password")}
              placeholder={t("placeholder.password")}
              autoComplete="off"
              mt="md"
              onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
              error={form.errors.password}
            />

            <Button type="submit" fullWidth mt="xl" loading={loading}>
              {t("button.signIn")}
            </Button>
          </form>
          {error ? (
            <Alert
              mt={"sm"}
              icon={<IconAlertCircle size={16} />}
              title={t("errors.title")}
              color="red"
              variant="filled"
            >
              {error.message}
            </Alert>
          ) : null}

          {/* <Group grow mt={"xl"}>
              <LanguageSelector />
            </Group> */}
        </Paper>

        <Group position="apart" mt={"xl"}>
          <Logo height={16} width={16 * 6.38} image="/logo/zeetrex.png" />
          <Text size={"xs"} weight={500} c="gray">
            {t("label.copyright")}
          </Text>
        </Group>
      </Stack>
    </Container>
  );
}
