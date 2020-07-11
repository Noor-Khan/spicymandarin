<template>
  <div id="About">
    <PageHeader />
    <Features />
    <AboutCompany />
    <Teachers />
    <Callout />
    <Testimonials />
    <Partners />
  </div>
</template>
<script>
import PageHeader from "../components/Header";
import Features from "../components/about/Features";
import AboutCompany from "../components/about/AboutCompany";
import Teachers from "../components/about/Teachers";
import Callout from "../components/about/Callout";
import Partners from "../components/about/Partners";
import Testimonials from "../components/about/Testimonials";
export default {
  components: {
    PageHeader,
    Features,
    AboutCompany,
    Teachers,
    Callout,
    Partners,
    Testimonials
  },
  data() {
    return {
      features: [
        {
          iconUrl: "/images/icons/feature.svg",
          heading: "easy way to use"
        }
      ]
    };
  }
};
</script>
