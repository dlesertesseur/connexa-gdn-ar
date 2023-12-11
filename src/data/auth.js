import { config } from "@/app/config";

export async function signin(parameters) {
  const apiUrl = `${config.SERVER}:${config.PORT}/${config.API_BASE}/authentication`;

  console.log("signin parameters -> ", parameters);
  console.log("signin apiUrl -> ", apiUrl);

  const body = JSON.stringify({
    email: parameters.email,
    password: parameters.password,
  });

  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };

  const res = await fetch(apiUrl, requestOptions);
  const data = await res.json();
  return data;
}
