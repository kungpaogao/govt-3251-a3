<script context="module">
  export const prerender = true;
</script>

<script>
  import Collapse from "../components/Collapse.svelte";

  import { html as intro } from "../content/intro.md";
  import { html as environment } from "../content/environment.md";
  import { html as future } from "../content/future.md";
  import "../app.css";

  const sdohData = [
    {
      icon: "/sdoh-econ.svg",
      title: "Economic Stability",
      goal: "Help people earn steady incomes that allow them to meet their health needs.",
      link: "https://health.gov/healthypeople/objectives-and-data/browse-objectives/economic-stability"
    },
    {
      icon: "/sdoh-educ.svg",
      title: "Education Access and Quality",
      goal: "Increase educational opportunities and help children and adolescents do well in school.",
      link: "https://health.gov/healthypeople/objectives-and-data/browse-objectives/education-access-and-quality"
    },
    {
      icon: "/sdoh-heal.svg",
      title: "Health Care Access and Quality",
      goal: "Increase access to comprehensive, high-quality health care services.",
      link: "https://health.gov/healthypeople/objectives-and-data/browse-objectives/health-care-access-and-quality"
    },
    {
      icon: "/sdoh-neig.svg",
      title: "Neighborhood and Built Environment",
      goal: "Create neighborhoods and environments that promote health and safety.",
      link: "https://health.gov/healthypeople/objectives-and-data/browse-objectives/neighborhood-and-built-environment"
    },
    {
      icon: "/sdoh-soci.svg",
      title: "Social and Community Context",
      goal: "Increase social and community support.",
      link: "https://health.gov/healthypeople/objectives-and-data/browse-objectives/social-and-community-context"
    }
  ];

  let scrollPosition = 0;
  $: isScrolledPastHeader = scrollPosition > 420;

  function handleScroll(event) {
    scrollPosition = event.target.scrollingElement.scrollTop;
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<svelte:window on:scroll={handleScroll} />

<div class="h-64 bg-gray-300 text-5xl flex flex-col justify-end">
  <h1 class="lg:w-1/2 lg:mx-auto p-7">
    The systemic causes behind a simple case of diabetes
  </h1>
</div>

<nav
  class="p-7 mt-5 top-0 bg-white border-gray-300"
  class:sticky={isScrolledPastHeader}
  class:border-b={isScrolledPastHeader}
  class:shadow={isScrolledPastHeader}
  class:p-5={isScrolledPastHeader}
>
  <h2 class="text-2xl mb-3" class:hidden={isScrolledPastHeader}>Contents</h2>
  <ul class:flex={isScrolledPastHeader}>
    <li class="mr-5"><a href="#heading1">the problem</a></li>
    <li class="mr-5"><a href="#heading2">the cause</a></li>
    <li class="mr-5"><a href="#heading3">the future</a></li>
  </ul>
</nav>

<section class="lg:w-1/2 mx-auto text-lg p-7">
  <h2 class="text-2xl" id="heading1">Problem</h2>
  {@html intro}
</section>

<section class="bg-gray-200 p-7">
  <h2 class="text-2xl">Social determinants of health</h2>
  <p>
    The U.S. Department of Health and Human Services defines the social
    determinants of health as "the conditions in the environments where people
    are born, live, learn, work, play, worship, and age that affect a wide range
    of health, functioning, and quality-of-life outcomes and risks." They are
    grouped into five domains—click to learn the goal of each SDOH.
  </p>
  <div class="bg-white rounded-xl p-3 mt-7">
    {#each sdohData as { icon, title, goal, link }, i}
      <Collapse {icon} {title} desc={goal} {link} />
    {/each}
  </div>
</section>

<section class="lg:w-1/2 mx-auto text-lg p-7">
  <h2 class="text-2xl" id="heading2">Cause</h2>
  {@html environment}
</section>

<section class="lg:w-1/2 mx-auto text-lg p-7">
  <h2 class="text-2xl" id="heading3">Future</h2>
  {@html future}
</section>
