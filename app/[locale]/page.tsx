import { getTranslations } from "next-intl/server";

import { Footer, Header } from "@/components/modules";
import { BackToTheTop } from "@/components/elements";
import {
  Presentation,
  Projects,
  Technologies,
  VolunteerWork,
} from "@/components/pages/home";

export async function generateMetadata() {
  const t = await getTranslations("Home");

  return {
    title: `Ryan Web | ${t("home")}`,
    description: t("about"),
  };
}

function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <Technologies />
      <VolunteerWork />
      <Footer />
      <BackToTheTop />
    </>
  );
}

export default Home;
