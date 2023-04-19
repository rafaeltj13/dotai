import { Head } from "$fresh/runtime.ts";
import Header from "../../components/Header.tsx";
import HeroList from "../../islands/Herolist.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { HeroStats } from "../../types/heroes.tsx";

export const handler: Handlers<HeroStats[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api.opendota.com/api/heroStats`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const heroes: HeroStats[] = await resp.json();
    return ctx.render(heroes);
  },
};

export default function Heroes({ data }: PageProps<HeroStats[] | null>) {
  const heroList = data?.length ? data : [];

  return (
    <>
      <Head>
        <title>Dota 2 Heroes</title>
      </Head>
      <div class="bg-gradient-to-t from-[#1e293b] to-[#0f172a] h-[100vh] overflow-y-auto font-bold">
        <Header />
        <HeroList heroList={heroList} />
      </div>
    </>
  );
}
