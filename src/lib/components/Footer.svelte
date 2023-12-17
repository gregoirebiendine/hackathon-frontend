<script>
    import LogoFooter from "./LogoFooter.svelte";
</script>

<style>
    nput::placeholder {
        color: #83839A;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.8px;
    }
</style>

<footer class="w-full flex flex-col items-center justify-between mt-32 bg-[#252641]">
    <div class="mt-[83px] border-r border-white"></div>
    <div class="flex items-center space-x-[41px]">
        <LogoFooter />
        <div class="border-r border-white"></div>
        <div class="w-[1px] h-[83px] bg-[#626381]"></div>
        <div class="border-r border-white"></div>
        <div>
            <p class="text-white text-[22px] font-bold font-poppins leading-normal tracking-[0.88px]">Virtual Class</p>
            <p class="text-white text-[22px] font-bold font-poppins leading-normal tracking-[0.88px]">for Zoom</p>
        </div>
    </div>
    <div class="mb-[103px] border-r border-white"></div>
    <p class="font-poppins text-[#B2B3CF] text-center text-[26px] font-medium leading-normal tracking-[1.04px] mb-11">
        Subscribe to get our Newsletter
    </p>
    <div class="flex justify-center gap-5">
        <input type="email" placeholder="Your Email" class="w-[400px] h-[60px] flex-shrink-0 rounded-full border border-[#83839A] pl-7 bg-[#252641] text-[#83839A] text-[20px] font-normal font-poppins leading-normal tracking-[0.8px]" />        <button on:click class="px-8 py-6 rounded-full text-white transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-[#545AE7] to-[#393FCF] w-[170px] h-[60px] flex items-center justify-center">
            <p class="font-poppins font-semibold text-[24px] tracking-h2">
                Subscribe
            </p>
        </button>
    </div>
    <div class="mt-[86px] flex justify-center gap-5 items-center text-[#B2B3CF] text-center text-[22px] font-normal font-poppins leading-normal tracking-[0.88px]">
        <p>Careers</p>
        <div class="w-[1px] h-[17px] bg-[#626381]"></div>
        <p>Privacy Policy</p>
        <div class="w-[1px] h-[17px] bg-[#626381]"></div>
        <p>Terms and Conditions</p>
    </div>
    <p class="mt-5 text-[#B2B3CF] text-center text-[22px] font-normal font-poppins leading-normal tracking-[0.88px]">
    © 2021 Class Technologies Inc.
</p>
<div class="mb-[40px]"></div>
</footer>