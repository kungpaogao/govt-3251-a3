<script>
  import {
    ChevronDownIcon,
    ChevronUpIcon,
    ExternalLinkIcon
  } from "svelte-feather-icons";

  export let icon;
  export let title;
  export let desc;
  export let link;

  let isCollapsed = true;
</script>

<button
  class="w-full text-left rounded-lg border border-gray-300 p-3 my-2
  shadow-md hover:bg-gray-100 transition-colors flex items-center"
  on:click={() => {
    isCollapsed = !isCollapsed;
  }}
>
  <img src={icon} alt={title} class="inline-flex h-10" />
  <h3 class="ml-3 inline-flex flex-1">{title}</h3>
  {#if isCollapsed}
    <ChevronUpIcon class="w-5 h-5" />
  {:else}
    <ChevronDownIcon class="w-5 h-5" />
  {/if}
</button>

{#if !isCollapsed}
  <div class="p-5">
    {desc}
    <a href={link}>
      Learn more<span class="ml-1 content-center inline-flex"
        ><ExternalLinkIcon class="h-4 w-4" /></span
      >
    </a>
  </div>
{/if}
