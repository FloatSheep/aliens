<template>
  <div>
    <h1 class="text">
      I'm <span class="name">{{ name }}</span>
    </h1>
  </div>
</template>

<script>
import siteConfig from '../../site.config'

export default {
  data() {
    return {
      name: '',
      yamlData: null
    }
  },
  mounted() {
    this.loadYamlData()
  },
  methods: {
    async loadYamlData() {
      try {
        this.name = siteConfig.name
      } catch (error) {
        console.error('Failed to load YAML data:', error)
      }
    }
  }
}
</script>
