<script>
    import NavbarButton from "$lib/components/NavbarButton.svelte";
    import NavbarLink from "$lib/components/NavbarLink.svelte";
    import CompaniesTrusted from "$lib/components/CompaniesTrusted.svelte";
    import CloudSoftCard from "$lib/components/CloudSoftCard.svelte";
</script>

<header class="h-screen bg-header flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat clip-header">
    <nav class="w-full flex flex-row justify-between items-center font-poppins pt-12 px-28">
        <div class="flex justify-center items-center relative">
            <p class="font-bold text-[32px] text-primary tracking-[1.28px] z-10">
                Skilline
            </p>
            <svg class="absolute -left-5" xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 79 79" fill="none">
                <path d="M35.2574 2.24265C37.6005 -0.100494 41.3995 -0.100498 43.7426 2.24265L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7427 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24265 43.7427C-0.100494 41.3995 -0.100498 37.6005 2.24265 35.2574L35.2574 2.24265Z" fill="#65DAFF"/>
            </svg>
        </div>

        <div class="flex flex-row justify-center items-center">
            <NavbarLink content="Home" href="/"/>
            <NavbarLink content="Careers" href="/"/>
            <NavbarLink content="Blog" href="/"/>
            <NavbarLink content="About Us" href="/"/>
            
            <NavbarButton content='Login'/>
            <NavbarButton content='Sign Up' mode="orange"/>
        </div>
    </nav>
    
    <div class="flex flex-row justify-center items-center gap-[76px] px-28">
        <div>
            <p class="font-bold text-[54px] font-poppins text-c-blue">
                <span class="text-c-orange">
                    Studying
                </span>
                Online is now<br>
                much easier
            </p>

            <p class="font-nunito-sans text-c-carbon text-[24px] mt-[34px] mb-[52px]">
                Skilline is an interesting platform that will teach<br>
                you in more an interactive way
            </p>

            <div class="flex flex-row items-center">
                <button on:click class="px-8 py-6 rounded-full text-white bg-c-orange transition-transform duration-300 hover:scale-105">
                    <p class="font-poppins font-semibold text-[24px] tracking-h2">
                        Join for free
                    </p>
                </button>

                <button class="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center mx-8 transition-transform duration-300 hover:scale-105">
                    <img class="ml-1" src='/blue.png' alt='blue'/>
                </button>

                <p class="font-poppins font-semibold text-secondary text-[24px] tracking-h2">
                    Watch how it works
                </p>
            </div>
        </div>
        <img class="w-[640px]" src="/header-pic.png" alt="Header Visual"/>
    </div>
</header>

<main class="w-full h-full flex flex-col">
    <CompaniesTrusted />

    <div class="w-full flex flex-col justify-center items-center mt-32">
        <p class="font-poppins text-c-blue font-bold text-4xl text-center">
            All-In-One <span class="text-c-orange">Cloud Software.</span>
        </p>
        
        <p class="font-poppins text-[#696984] text-[24px] text-center mt-4">
            Skilline is one powerful online software suite that combines all the<br>
            tools needed to run a successful school or office.
        </p>

        <div class="flex flex-row justify-center items-center gap-12 mt-28">
            <CloudSoftCard icon="/icon-cloudsoftware/icon1.svg" bgColor="#5B72EE">
                <svelte:fragment slot="title">
                    Online Billing,<br>
                    Invoicing, & Contracts
                </svelte:fragment>

                <svelte:fragment slot="content">
                    Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                </svelte:fragment>
            </CloudSoftCard>

            <CloudSoftCard icon="/icon-cloudsoftware/icon2.svg" bgColor="#F48C06">
                <svelte:fragment slot="title">
                    Easy Scheduling &<br>
                    Attendance Tracking
                </svelte:fragment>

                <svelte:fragment slot="content">
                    Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                </svelte:fragment>
            </CloudSoftCard>
            
            <CloudSoftCard icon="/icon-cloudsoftware/icon3.svg" bgColor="#29B9E7">
                <svelte:fragment slot="title">
                    Customer Tracking
                </svelte:fragment>

                <svelte:fragment slot="content">
                    Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization 
                </svelte:fragment>
            </CloudSoftCard>
        </div>
    </div>
    
    <div class="w-full flex-col justify-center items-center mt-32">
        <p class="font-poppins text-c-blue font-semibold text-[44px] text-center">
            What is <span class="text-c-orange">Skilline?</span>
        </p>

        <p class="font-poppins text-[#696984] text-[24px] text-center mt-4">
            Skilline is a platform that allows educators to create online classes whereby they can<br>
            store the course materials online; manage assignments, quizzes and exams; monitor<br>
            due dates; grade results and provide students with feedback all in one place.
        </p>

        <div class="flex flex-row justify-center items-center gap-16 mt-28">
            <div class="relative transition-all duration-300 opacity-80 hover:opacity-100">
                <img src="/instructor-visu.png" alt="Instructor visual">
                <div class="w-full h-full absolute z-10 top-0 left-0 flex flex-col justify-center items-center">
                    <p class="font-poppins font-semibold text-white text-[32px]">
                        FOR INSTRUCTORS
                    </p>
                    <button class="bg-transparent border-[1px] border-white px-[38px] py-[24px] rounded-full mt-4 transition-all duration-300 hover:scale-105">
                        <p class="font-poppins font-medium text-[22px] text-white">
                            Start a class today
                        </p>
                    </button>
                </div>
            </div>

            <div class="relative transition-all duration-300 opacity-80 hover:opacity-100">
                <img src="/student-visu.jpg" alt="Instructor visual">
                <div class="w-full h-full absolute z-10 top-0 left-0 flex flex-col justify-center items-center">
                    <p class="font-poppins font-semibold text-white text-[32px]">
                        FOR STUDENTS
                    </p>

                    <button class="bg-[#23BDEE] px-[38px] py-[24px] rounded-full mt-4 transition-all duration-300 hover:scale-105">
                        <p class="font-poppins font-medium text-[22px] text-white">
                            Enter access code
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>

<footer class="w-full flex flex-col items-center justify-between">
    <p class="font-medium font-poppins text-c-gray text-center text-[28px] leading-10 mb-11">Subscribe to get our Newsletter</p>
</footer>;

<style lang="postcss">
    .clip-header {
        clip-path: polygon( 0% 0%,100% 0%,100% 88.551%,100% 88.551%,99.525% 88.872%,98.09% 89.742%,95.677% 91.024%,92.27% 92.581%,87.852% 94.275%,82.405% 95.97%,75.913% 97.527%,68.36% 98.809%,59.728% 99.679%,50% 100%,50% 100%,40.272% 99.679%,31.64% 98.809%,24.087% 97.527%,17.595% 95.97%,12.148% 94.275%,7.73% 92.581%,4.323% 91.024%,1.91% 89.742%,0.475% 88.872%,0% 88.551%,0% 0% );
    }
</style>