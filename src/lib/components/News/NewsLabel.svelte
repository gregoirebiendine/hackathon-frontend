<script lang="ts">

    export let type: "news" | "press" = "news";
    export let little: boolean = false;

    let propClass: string = "";
    export { propClass as class }

    const t = type == "news" ? "NEWS" : "PRESS RELEASE";
</script>

<div class="flex justify-center items-center bg-[#F4C467] rounded-[80px] {type == "news" ? 'px-8' : 'px-3'} {propClass}">
    <p class="font-poppins font-medium text-secondary tracking-h2 py-1 {little ? 'text-[18px]' : 'text-[20px]'}">
        {t}
    </p>
</div>