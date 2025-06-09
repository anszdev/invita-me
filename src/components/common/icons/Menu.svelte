<script lang="ts">
  import type { IconProps } from "@/types/types";
  let { size = "24", color = "currentColor" }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M10 6h10"></path>
  <path d="M4 12h16"></path>
  <path d="M7 12h13"></path>
  <path d="M4 18h10"></path>
</svg>
