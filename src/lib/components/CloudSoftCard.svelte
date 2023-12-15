<script lang="ts">
    export let icon: string;
    export let bgColor: string;
</script>

<div class="w-[450px] h-[430px] flex flex-col justify-end items-center relative rounded-[20px] pb-[50px] div-shadow">
    <div class="w-[100px] h-[100px] rounded-full flex justify-center items-center absolute top-0 -translate-y-1/2" style="background-color: {bgColor}">
        <img src={icon} alt="Icon">
    </div>

    <p class="font-poppins font-medium text-c-blue text-[30px] text-center pb-6">
        <slot name="title"/>
    </p>
    
    <p class="font-poppins text-c-gray text-[20px] text-center px-8">
        <slot name="content"/>
    </p>
</div>

<style lang="postcss">
    .div-shadow {
        box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
    }
</style>