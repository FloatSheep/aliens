<template>
  <footer>
    <span class="copyright">{{ copyright }}</span>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <span class="copyright">基于 <code>Redish101</code> 仿造（?</span>
  </footer>
</template>

<script>
import yaml from 'js-yaml';

export default {
  data() {
    return {
      copyright: '',
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
        this.copyright = this.yamlData.copyright;
      } catch (error) {
        console.error('Failed to load YAML data:', error);
      }
    },
  },
};
</script>