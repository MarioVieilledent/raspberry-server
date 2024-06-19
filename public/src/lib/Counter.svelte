<script lang="ts">
  let count: number = 0
</script>

<div class="stack">
  <button on:click={() =>  count--}>
    INC {count}
  </button>

  <button on:click={() =>  count++}>
    DEC {count}
  </button>
  
</div>

<style lang="scss">
</style>