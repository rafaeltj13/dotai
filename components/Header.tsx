import IconLogin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/login.tsx";

export default function Header() {
  return (
    <section class="h-[70px] p-8 flex items-center justify-between">
      <a href="/">
        <h1 class="text-4xl text-red-700 hover:scale-125 transition-transform">
          DOTAi
        </h1>
      </a>
      <ul class="flex items-center gap-8">
        <li class="hover:scale-110 transition-transform">
          <a
            href="/players"
            class="text-white hover:text-red-600 cursor-pointer mx-2 text-xl"
          >
            Leaderboards
          </a>
        </li>
        <li class="hover:scale-110 transition-transform">
          <a
            href="/heroes"
            class="text-white hover:text-red-600 cursor-pointer text-xl"
          >
            Heroes
          </a>
        </li>
        <li class="hover:scale-110 transition-transform">
          <IconLogin class="text-white hover:text-red-600 cursor-pointer" />
        </li>
      </ul>
    </section>
  );
}
