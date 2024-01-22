<script setup>
import { reactive, ref, watch, onMounted, computed } from "vue";
import FullImage from "./component/FullImage.vue";
import GridCard from "./component/GridCard.vue";
import Collapse from "./component/Collapse.vue";
import Footer from "./component/Footer.vue";
import Header from "./component/Header.vue";
import Face from "./component/Face.vue";
import Card from "./component/Card.vue";
</script>

<template>
  <div class="">
    <Header />
    <Face />
    <Card />
    <GridCard />
    <FullImage />
    <Collapse />
    <Footer />
  </div>
</template>
