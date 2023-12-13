"use client";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Alert,
  Stack,
  Text,
  Container,
  Title,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAlertCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { useUserContext } from "@/app/context/UserContext";

export function SigninForm({locale}) {
  const t = useTranslations("auth");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState(locale);
  const [localeSelected, setLocaleSelected] = useState(null);

  const {authenticate} = useUserContext();
  
  const languages = [
    { value: "es", label: "Español" },
    { value: "en", label: "English" },
  ];

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : t("validation.emailFormat")),
      password: (val) => (val.length <= 2 ? t("validation.passwordFormat") : null),
    },
  });

  const onSignIn = async (data) => {
    await authenticate(data);
  };

  useEffect(() => {
    if (localeSelected) {
      console.log("locale -> ", `/${localeSelected}`);
      redirect(`/${localeSelected}`);
    }
  }, [localeSelected]);

  return (
    <Container>
      <Stack m={"xl"} p={"xl"} align="center">
        <Group justify="center" py={20}>
          <Title>{t("title")}</Title>
        </Group>
        <Paper withBorder shadow="md" px={30} pb={30} radius="md" bg={"gray.1"} w={400}>
          <Group justify="center" py={20}>
            <Logo size={70} />
          </Group>
          <form
            autoComplete="false"
            onSubmit={form.onSubmit((values) => {
              onSignIn({ email: values.email, password: values.password });
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

            <Select
              mt="md"
              label={t("label.language")}
              value={language}
              onChange={(e) => {
                setLanguage(e);
                setLocaleSelected(e);
              }}
              data={languages}
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
