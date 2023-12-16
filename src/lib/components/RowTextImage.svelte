<script lang="ts">
    let propClass: string = "";

    export let reverse: boolean = false;
    export { propClass as class }

    const valign = propClass.includes('items-') ? '' : 'items-center';
</script>

<div class="w-[80%] flex justify-between mx-auto {propClass} {valign} {reverse ? 'flex-row-reverse' : 'flex-row '}">
    <slot name="text"/>
    <slot name="image"/>
</div>