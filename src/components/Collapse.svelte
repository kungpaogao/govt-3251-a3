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
  class="w-full text-left rounded-lg border border-gray-300 p-3 my-1
  shadow-md hover:bg-gray-100 transition-colors"
  on:click={() => {
    isCollapsed = !isCollapsed;
  }}
>
  <img src={icon} alt={title} class="inline-flex h-10" />
  <h3 class="ml-3 inline-flex">{title}</h3>
  {#if isCollapsed}
    <span class="h-10 p-2 inline-flex float-right">
      <ChevronUpIcon />
    </span>
  {:else}
    <span class="h-10 p-2 inline-flex float-right">
      <ChevronDownIcon />
    </span>
  {/if}
</button>

{#if !isCollapsed}
  <div class="p-5">
    {desc}
    <a href={link}>
      Learn more<span class="ml-1 content-center h-4 inline-flex"
        ><ExternalLinkIcon /></span
      >
    </a>
  </div>
{/if}
