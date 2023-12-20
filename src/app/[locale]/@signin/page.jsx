import { SigninForm } from "../components/signin/SigninForm";
import React from "react";

const page = ({ params }) => {
  const locale = params.locale;
  return <SigninForm locale={locale} />;
};

export default page;
