<template>
  <div>
    <h1 class="texter">{{ subtext }}</h1>
  </div>
</template>

<script>
import yaml from 'js-yaml';

export default {
  data() {
    return {
      subtext: '',
      yamlData: null,
    };
  },
  mounted() {
    this.loadYamlData();
  },
  methods: {
    async loadYamlData() {
      try {
        const response = await fetch('../../config/config.yaml');
        const text = await response.text();
        this.yamlData = yaml.load(text);
        this.subtext = this.yamlData.subtext;
      } catch (error) {
        console.error('Failed to load YAML data:', error);
      }
    },
  },
};
</script>