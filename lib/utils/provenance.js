const PROVENANCE_ENABLED_REGISTRIES = [
  'https://registry.npmjs.org/',
]

const isRegistryProvenanceEnabled = (registry) => {
  return PROVENANCE_ENABLED_REGISTRIES.includes(registry)
}

module.exports = {
  isRegistryProvenanceEnabled,
}
