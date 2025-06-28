<script lang="ts">
  import clsx from "clsx";

  let hidden = $state(false);

  $effect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (!hidden && scrollY > 100) hidden = true;
      else if (hidden && scrollY <= 100) hidden = false;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<a
  href="/"
  class={clsx(
    "opacity-0 pointer-events-none text-2xl md:text-4xl hover:scale-[1.15] transition-all ease-in-out duration-200 will-change-transform",
    hidden ? "pointer-events-none md:opacity-0" : "md:opacity-100"
  )}
  aria-label="Invita.me Home"
  title="Invita.me Home"
  id="logo"
>
  <h1 class="font-semibold">
    🪅Invita.<span class="font-light">me</span>
  </h1>
</a>
