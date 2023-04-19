import { Head } from "$fresh/runtime.ts";
import Header from "../../components/Header.tsx";

export default function Players() {
  return (
    <>
      <Head>
        <title>Dota 2 Leaderboards</title>
      </Head>
      <div class="bg-gradient-to-t from-[#1e293b] to-[#0f172a] h-[100vh] overflow-y-auto">
        <Header />
        <section class="p-4 mx-auto max-w-screen-lg">
          <p class="text-white">Leaderboards</p>
        </section>
      </div>
    </>
  );
}
