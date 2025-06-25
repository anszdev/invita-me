<script lang="ts">
  import { type Component, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import clsx from "clsx";

  import Menu from "@common/icons/Menu.svelte";
  import Instagram from "@common/icons/Instagram.svelte";
  import Whatsapp from "@common/icons/Whatsapp.svelte";
  import Mail from "@common/icons/Mail.svelte";
  import Close from "@common/icons/Close.svelte";
  import { NAV_LINKS } from "@utils/staticData";

  let openMenu = $state(false);

  const toggleMenu = () => {
    openMenu = !openMenu;
  };

  const closeMenu = () => {
    openMenu = false;
  };
</script>

<div class="relative group">
  <button
    class={clsx(
      "flex justify-center items-center gap-1.5 text-lg cursor-pointer py-2.5 px-6 rounded-xl font-medium",
      openMenu ? "-z-10" : "z-10",
    )}
    onclick={toggleMenu}
  >
    Menú <Menu size="32" />
  </button>

  <!-- Open menu -->
  <div
    class={clsx(
      "absolute bottom-0 right-0 rounded-xl transition-all duration-300 ease-in-out-back overflow-hidden",
      openMenu
        ? "z-50 w-auto md:w-[23rem] bg-inv-tertiary origin-bottom-right h-[29.7rem]"
        : "-z-10 w-full bg-inv-tertiary group-hover:scale-[1.10] h-full cursor-pointer",
    )}
  >
    <nav
      class={clsx(
        "text-inv-text-dark transition-opacity p-8 bg-[url('/src/assets/bg-menu.svg')] bg-cover h-full",
        openMenu ? "opacity-100 delay-200" : "opacity-0 pointer-events-none",
      )}
    >
      <header class="flex justify-between items-center">
        <a class="text-2xl font-semibold" href="/">
          🪅Invita.<span class="font-light">me</span>
        </a>
        <button
          class="cursor-pointer hover:bg-inv-bg-dark/10 rounded-xl p-1 transition-colors duration-300 ease-in-out"
          onclick={closeMenu}
        >
          <Close size="32" />
        </button>
      </header>
      <ul class="flex flex-col gap-y-3 my-12 text-5xl font-medium">
        {#each NAV_LINKS as item}
          <li>
            {@render menuItem(item.href, item.label)}
          </li>
        {/each}
      </ul>
      <footer class="flex justify-between items-cente">
        {@render socialIcon(Instagram, "#prices")}
        {@render socialIcon(Whatsapp, "#prices")}
        {@render socialIcon(Mail, "#prices")}
      </footer>
    </nav>
  </div>
</div>
{#if openMenu}
  <div
    transition:fade={{ duration: 200 }}
    onclick={closeMenu}
    class="fixed inset-0 w-dvw h-dvh bg-inv-tertiary/15 backdrop-blur-sm transition-all duration-300 z-20"
  ></div>
{/if}

{#snippet menuItem(href: string, label: string)}
  <a
    class="block hover:ml-3.5 transition-[margin-left] duration-200"
    {href}
    onclick={closeMenu}>{label}</a
  >
{/snippet}

{#snippet socialIcon(icon: Component, href: string)}
  <a
    {href}
    class="cursor-pointer hover:bg-inv-bg-dark/10 rounded-xl p-1.5 transition-colors duration-300 ease-in-out"
  >
    <!-- svelte-ignore svelte_component_deprecated -->
    <svelte:component this={icon} size="32" />
  </a>
{/snippet}
