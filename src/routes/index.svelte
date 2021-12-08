<script context="module">
  export const prerender = true;
</script>

<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import Collapse from "../components/Collapse.svelte";

  import { html as intro } from "../content/intro.md";
  import { html as environment } from "../content/environment.md";
  import { html as future } from "../content/future.md";
  import { html as references } from "../content/references.md";

  import { sdohData } from "../content/sdohData";
  import { mapData } from "../content/mapData";

  import "../app.css";

  let scrollPosition = 0;
  let innerHeight, navHeight;
  $: isScrolledPastHeader = scrollPosition > innerHeight + navHeight + 20;

  function handleScroll(event) {
    scrollPosition = event.target.scrollingElement.scrollTop;
  }

  const getImageSrc = (id) => `/map-${id}.png`;
  let scrollerImageSrc = getImageSrc("diabetes");

  let index, offset, progress, count;
  $: if (index !== undefined && index !== null) {
    scrollerImageSrc = getImageSrc(mapData[index].id);
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<svelte:window bind:innerHeight on:scroll={handleScroll} />

<header class="h-screen bg-gray-300 text-5xl flex flex-col justify-end">
  <img class="h-full w-full object-cover absolute" src="/bronx.jpg" alt="" />
  <div class="z-10 bg-gradient-to-t from-black to-transparent h-3/5 relative">
    <h1
      class="lg:w-1/2 lg:mx-auto p-7 text-white absolute bottom-28 left-0 right-0"
    >
      The systemic causes behind a simple case of diabetes
    </h1>
  </div>
</header>

<nav
  class:sticky={isScrolledPastHeader}
  class:border-b={isScrolledPastHeader}
  class:shadow={isScrolledPastHeader}
  class:p-5={isScrolledPastHeader}
  class="lg:z-10 lg:sticky lg:shadow-none lg:border-none lg:float-left p-7 mt-5 top-0
bg-white lg:bg-transparent border-gray-300"
>
  <div class="h-full" bind:clientHeight={navHeight}>
    <h2 class:hidden={isScrolledPastHeader} class="text-2xl mb-3 lg:block">
      Contents
    </h2>
    <ul class:flex={isScrolledPastHeader} class="lg:block">
      <li class="mr-5">
        1. <a href="#problem">Problem</a>
      </li>
      <li class="mr-5">2. <a href="#cause">Cause</a></li>
      <li class="mr-5">3. <a href="#future">Future</a></li>
      <!-- <li class="mr-5">4. <a href="#references">references</a></li> -->
    </ul>
  </div>
</nav>

<section class="lg:w-1/2 mx-auto text-lg p-7">
  <h2 class="text-2xl" id="problem">Problem</h2>
  <div class="md">
    {@html intro}
  </div>
</section>

<section class="bg-gray-200">
  <div class="lg:w-1/2 mx-auto p-7">
    <h2 class="text-2xl">Social determinants of health</h2>
    <p class="mt-5">
      The U.S. Department of Health and Human Services defines the social
      determinants of health as "the conditions in the environments where people
      are born, live, learn, work, play, worship, and age that affect a wide
      range of health, functioning, and quality-of-life outcomes and risks."
      They are grouped into five domains—click to learn the goal of each SDOH.
    </p>
    <div class="bg-white rounded-xl p-3 mt-7">
      {#each sdohData as { icon, title, goal, link }}
        <Collapse {icon} {title} desc={goal} {link} />
      {/each}
    </div>
  </div>
</section>

<section class="lg:w-1/2 mx-auto text-lg p-7">
  <h2 class="text-2xl" id="cause">Cause</h2>
  <div class="md">
    {@html environment}
  </div>
</section>

<section>
  <Scroller bind:index bind:offset bind:progress bind:count>
    <div slot="background">
      <div class="h-screen bg-gray-200">
        <img
          class="lg:w-1/2 w-full h-full object-cover mx-auto"
          src={scrollerImageSrc}
          alt="title"
        />
      </div>
    </div>
    <div slot="foreground">
      {#each mapData as { id, title, caption }}
        <section class="h-screen relative">
          <div>
            <img
              class="xl:w-1/12 md:w-1/6 w-1/4 absolute right-0 top-1/2"
              src={`/map-${id}-key.png`}
              alt={`Map key for ${title}`}
            />
          </div>
          <div
            class="xl:left-24 bg-white md:w-1/2 p-7 shadow-md absolute top-3/4 left-0 right-0"
          >
            <h3 class="font-bold">{title}</h3>
            <p class="mt-3">{caption}</p>
          </div>
        </section>
      {/each}
    </div>
  </Scroller>
</section>

<section class="lg:w-1/2 mx-auto text-lg p-7">
  <h2 class="text-2xl" id="future">Future</h2>
  <div class="md">
    {@html future}
  </div>
</section>

<!-- <section class="lg:w-1/2 mx-auto text-lg p-7">
  <h2 class="text-2xl" id="references">References</h2>
  <div class="md">
    {@html references}
  </div>
</section> -->
