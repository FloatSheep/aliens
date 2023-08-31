<template>
  <div>
    <h1 class="text">I'm <span class="name">{{ name }}</span></h1>

  </div>
</template>

<script>
import yaml from 'js-yaml';

export default {
  data() {
    return {
      name: '',
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
        this.name = this.yamlData.name;
      } catch (error) {
        console.error('Failed to load YAML data:', error);
      }
    },
  },
};
</script>
