<script lang="ts">
    export let mode: "white" | "orange" = 'white';
    export let content: string;
</script>

<button on:click class="mx-4 px-10 py-3 rounded-full {mode == 'white' ? 'text-c-gray2 bg-white' : 'text-white bg-c-orange'} transition-transform duration-300 hover:scale-105">
    <p class="font-poppins font-medium text-[22px] tracking-h2">
        {content}
    </p>
</button>