<script lang="ts">
    import NewsLabel from "./NewsLabel.svelte";

    export let img: string;
    export let title: string;
    export let content: string;
    export let type: "news" | "press";
</script>

<div class="inline-flex justify-start items-start gap-[40px] my-4">
    <div class="relative">
        <img class="w-[280px] h-[200px]" src={img} alt="News">
        <NewsLabel class="absolute bottom-2 right-2" {type} little/>
    </div>
    <div class="w-fit">
        <p class="font-poppins font-medium text-[22px] text-secondary">
            {@html title}
        </p>
        <p class="font-poppins text-c-gray text-[20px] tracking-h2 leading-[1.8] mt-4">
            {@html content}
        </p>
    </div>
</div>