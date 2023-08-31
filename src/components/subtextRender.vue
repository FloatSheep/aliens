<template>
  <div>
    <h1 class="texter">{{ subtext }}</h1>
  </div>
</template>

<script>
import siteConfig from '../../site.config'

export default {
  data() {
    return {
      subtext: '',
      yamlData: null
    }
  },
  mounted() {
    this.loadYamlData()
  },
  methods: {
    async loadYamlData() {
      try {
        this.subtext = siteConfig.subtext
      } catch (error) {
        console.error('Failed to load YAML data:', error)
      }
    }
  }
}
</script>
