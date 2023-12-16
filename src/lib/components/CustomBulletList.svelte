<script lang="ts">
    export let icon: string;
    export let content: string;
</script>

<div class="flex flex-row justify-left items-center gap-10 py-5">
    <div class="w-[60px] h-[60px] flex justify-center items-center bg-[#FBFBFB] rounded-full dropshadow">
        <img src={icon} alt="Icon">
    </div>
    <p class="font-poppins text-c-gray text-[22px] tracking-h2">
        {@html content}
    </p>
</div>

<style lang="postcss">
    .dropshadow {
        box-shadow: 0px 15px 44px 0 rgba(13, 15, 28, 0.12);
    }
</style>