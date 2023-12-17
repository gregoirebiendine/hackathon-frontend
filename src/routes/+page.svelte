<script>
    import NavbarButton from "$lib/components/NavbarButton.svelte";
    import NavbarLink from "$lib/components/NavbarLink.svelte";
    import CompaniesTrusted from "$lib/components/CompaniesTrusted.svelte";
    import CloudSoftCard from "$lib/components/CloudSoftCard.svelte";
    import RowTextImage from "$lib/components/RowTextImage.svelte";
    import CustomBulletList from "$lib/components/CustomBulletList.svelte";
    import NewsLabel from "$lib/components/News/NewsLabel.svelte";
    import NewsRow from "$lib/components/News/NewsRow.svelte";
    import Footer from "$lib/components/Footer.svelte";
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
    
    <div class="w-full flex flex-col justify-center items-center mt-32">
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

        <RowTextImage class="mt-32">
            <div class="font-poppins relative" slot="text">
                <div class="relative z-10">
                    <p class="font-medium text-c-blue text-[36px] leading-[1.8]">
                        Everything you can do in a physical<br>
                        classroom, <span class="text-c-orange">you can do with Skilline</span>
                    </p>
                    <p class="text-c-gray text-[24px] leading-[1.8] py-6">
                        Skilline’s school management software helps traditional<br>
                        and online schools manage scheduling, attendance,<br>
                        payments and virtual classrooms all in one secure<br>
                        cloud-based system.
                    </p>
                    <a href="/" class="text-c-gray text-[24px]">
                        <u>Learn more</u>
                    </a>
                </div>
                <div class="w-[73px] h-[73px] rounded-full bg-[#F4B767] absolute -top-3 -left-6"></div>
                <div class="w-[30px] h-[30px] rounded-full bg-[#F4B767] absolute top-[60%] -right-6"></div>
            </div>
            <div class="relative m-4" slot="image">
                <img src="/classroom.png" alt="Classroom" class=" relative min-w-[705px] w-[705px] z-10 cursor-pointer">
                <div class="w-[138px] h-[138px] rounded-[20px] bg-[#23BDEE] absolute -top-4 -left-4"></div>
                <div class="w-[231px] h-[231px] rounded-[20px] bg-[#F3AC50] absolute -bottom-4 -right-4"></div>
            </div>
        </RowTextImage>
    </div>

    <div class="w-full flex flex-col justify-center items-center mt-32">
        <p class="font-poppins text-c-blue font-bold text-[36px] text-center">
            Our <span class="text-c-orange">Features</span>
        </p>

        <p class="font-poppins text-[#696984] text-[24px] text-center mt-4">
            This very extraordinary feature, can make learning activities more efficient
        </p>

        <RowTextImage class="mt-32" reverse>
            <div class="font-poppins relative" slot="text">
                <p class="font-semibold text-c-blue text-[40px] leading-[1.6]">
                    A <span class="text-c-orange">user interface</span> designed<br>
                    for the classroom
                </p>
                <CustomBulletList icon="/bullet-icons/icon1.svg" content="Teachers don’t get lost in the grid view<br>and have a dedicated Podium space."/>
                <CustomBulletList icon="/bullet-icons/icon2.svg" content="TA’s and presenters can be moved to<br>the front of the class."/>
                <CustomBulletList icon="/bullet-icons/icon3.svg" content="Teachers can easily see all students<br>and class data at one time."/>
            </div>
            <div class="relative" slot="image">
                <img src="/call-visu.png" alt="Call" class=" relative min-w-[956px] w-[956px]">
            </div>
        </RowTextImage>

        <RowTextImage class="mt-32">
            <div class="font-poppins relative" slot="text">
                <p class="font-semibold text-c-blue text-[40px] leading-[1.6]">
                    <span class="text-c-orange">Tools</span> For Teachers<br>
                    And Learners
                </p>
                <p class="text-c-gray text-[22px] leading-[1.8] py-6">
                    Class has a dynamic set of teaching tools built to<br>
                    be deployed and used during class. Teachers can<br>
                    handout assignments in real-time for students to<br>
                    complete and submit.
                </p>
            </div>
            <div class="relative" slot="image">
                <img src="/student.png" alt="Student" class="relative min-w-[637px] w-[637px]">
            </div>
        </RowTextImage>

        <RowTextImage class="mt-32" reverse>
            <div class="font-poppins relative" slot="text">
                <p class="font-semibold text-c-blue text-[40px] leading-[1.6]">
                    Assessments,<br>
                    <span class="text-c-orange">Quizzes</span>, Tests<br>
                </p>
                <p class="text-c-gray text-[22px] leading-[1.8] py-6">
                    Easily launch live assignments, quizzes, and<br>
                    tests. Student results are automatically entered in<br>
                    the online gradebook.
                </p>
            </div>
            <div class="relative" slot="image">
                <img src="/assessment.png" alt="Student" class="relative min-w-[670px] w-[670px]">
            </div>
        </RowTextImage>

        <RowTextImage class="mt-32">
            <div class="font-poppins relative" slot="text">
                <p class="font-semibold text-c-blue text-[40px] leading-[1.6]">
                    <span class="text-c-orange">Class Management</span><br>
                    Tools for Educators
                </p>
                <p class="text-c-gray text-[22px] leading-[1.8] py-6">
                    Class provides tools to help run and manage the class<br>
                    such as Class Roster, Attendance, and more. With the<br>
                    Gradebook, teachers can review and grade tests and<br>
                    quizzes in real-time.
                </p>
            </div>
            <div class="relative" slot="image">
                <img src="/gradebook.png" alt="Student" class="relative min-w-[881px] w-[881px]">
            </div>
        </RowTextImage>
        
        <RowTextImage class="mt-32" reverse>
            <div class="font-poppins relative" slot="text">
                <p class="font-semibold text-c-blue text-[40px] leading-[1.6]">
                    One-on-One<br>
                    <span class="text-c-orange">Discussions</span>
                </p>
                <p class="text-c-gray text-[22px] leading-[1.8] py-6">
                    Teachers and teacher assistants can talk with<br>
                    students privately without leaving the Zoom<br>
                    environment.
                </p>
            </div>
            <div class="relative" slot="image">
                <img src="/call-end.png" alt="Student" class="relative min-w-[761px] w-[761px]">
            </div>
        </RowTextImage>

        <button class="bg-transparent rounded-full border-[1px] border-c-orange px-[38px] py-[24px] mt-20 transition-all duration-300 hover:scale-105">
            <p class="font-nunito-sans text-[24px] text-c-orange">
                See more features
            </p>
        </button>

        <RowTextImage class="mt-32" reverse>
            <div class="" slot="text">
                <div class="inline-flex items-center gap-6 mb-4">
                    <hr class="w-[80px] border-[#525596]">
                    <p class="font-nunito-sans text-[20px] text-[#525596]">
                        INTEGRATIONS
                    </p>
                </div>
                <p class="font-nunito-sans font-bold text-c-blue text-[36px] leading-[1.6]">
                    200+ educational tools and<br>
                    platform <span class="text-c-orange">integrations</span>
                </p>
                <p class="font-nunito-sans text-c-gray text-[24px] leading-[1.8] py-6">
                    Schoology has every tool your classroom needs and comes<br>
                    pre-integrated with more than 200+ tools, student information<br>
                    systems (SIS), and education platforms.
                </p>
                <button class="bg-transparent rounded-full border-[1px] border-c-orange px-[38px] py-[24px] mt-4 transition-all duration-300 hover:scale-105">
                    <p class="font-nunito-sans text-[22px] text-c-orange">
                        See All Integrations
                    </p>
                </button>
            </div>

            <div class="flex flex-col w-[468px] gap-[83px]" slot="image">
                <div class="flex flex-row justify-between items-end">
                    <img src="platforms/onedrive.png" alt="OneDrive" class="align-middle">
                    <img src="platforms/dropbox.png" alt="DropBox" class="align-middle">
                </div>
                <div class="flex flex-row justify-end items-start gap-[102px]">
                    <img src="platforms/gdrive.png" alt="Google Drive" class="align-middle">
                    <img src="platforms/teams.png" alt="Teams" class="align-middle">
                </div>
            </div>
        </RowTextImage>

        <RowTextImage class="mt-32 items-start">
            <div class="" slot="text">
                <div class="inline-flex items-center gap-6 mb-4">
                    <hr class="w-[80px] border-[#525596]">
                    <p class="font-nunito-sans text-[20px] text-[#525596]">
                        INTEGRATIONS
                    </p>
                </div>
                <p class="font-nunito-sans font-bold text-c-blue text-[60px]">
                    What They Say?
                </p>
                <p class="font-poppins text-c-gray text-[26px] tracking-h2 leading-[1.6] pt-4 pb-3">
                    Skilline has got more than 100k positive<br>
                    ratings from our users around the world.
                </p>
                <p class="font-poppins text-c-gray text-[26px] tracking-h2 leading-[1.6] py-3">
                    Some of the students and teachers were<br>
                    greatly helped by the Skilline.
                </p>
                <p class="font-poppins text-c-gray text-[26px] tracking-h2 leading-[1.6] pt-3 pb-6">
                    Are you too? Please give your assessment
                </p>
                <button class="w-[403px] h-[80px] rounded-full bg-transparent border-[1px] border-c-orange mt-4 transition-all duration-300 hover:scale-105">
                    <div class="w-full inline-flex justify-between items-center pl-[38px]">
                        <p class="font-poppins text-[22px] text-c-orange">
                            Write your assessment
                        </p>
                        <div class="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-transparent border-[1px] border-r-[0px] border-c-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                                <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F48C06"/>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>

            <div slot="image">
                <img src="/testimonial.png" alt="Testimonial" class="min-w-[749px] w-[749px]">
            </div>
        </RowTextImage>
    </div>

    <div class="w-full flex flex-col justify-center items-center mt-32">
        <p class="font-nunito-sans text-c-blue font-bold text-[36px] text-center">
            Lastest News and Resources
        </p>
        <p class="font-nunito-sans text-[#696984] text-[24px] text-center mt-4">
            See the developments that have occurred to Skillines in the world
        </p>

        <RowTextImage class="mt-24">
            <div class="flex flex-col justify-center items-start" slot="text">
                <img class="min-w-[640px] w-[640px]" src="/news/main-news.png" alt="Main News">
                <NewsLabel class="my-8"/>
                <p class="font-poppins font-medium text-[26px] text-secondary">
                    Class adds $30 million to its balance sheet for<br>
                    a Zoom-friendly edtech solution
                </p>
                <p class="font-poppins text-c-gray text-[20px] tracking-h2 leading-[1.8] py-6">
                    Class, launched less than a year ago by Blackboard<br>
                    co-founder Michael Chasen, integrates exclusively...
                </p>
                <a href="/" class="font-poppins text-c-gray text-[20px] tracking-h2">
                    <u>Read more</u>
                </a>
            </div>
            <div class="w-fit flex flex-col" slot="image">
                <NewsRow img="news/second-news1.png" type="press" title="Class Technologies Inc. Closes $30 Million<br>Series A Financing to Meet High Demand" content="Class Technologies Inc., the company that<br>created Class,..."/>
                <NewsRow img="news/second-news2.png" type="news" title="Zoom’s earliest investors are betting<br>millions on a better Zoom for schools" content="Zoom was never created to be a consumer<br>product. Nonetheless, the..."/>
                <NewsRow img="news/second-news2.png" type="news" title="Former Blackboard CEO Raises $16M to<br>Bring LMS Features to Zoom Classrooms" content="This year, investors have reaped big<br>financial returns from betting on Zoom..."/>
            </div>
        </RowTextImage>
    </div>
</main>

<Footer />

<style lang="postcss">
    .clip-header {
        clip-path: polygon( 0% 0%,100% 0%,100% 88.551%,100% 88.551%,99.525% 88.872%,98.09% 89.742%,95.677% 91.024%,92.27% 92.581%,87.852% 94.275%,82.405% 95.97%,75.913% 97.527%,68.36% 98.809%,59.728% 99.679%,50% 100%,50% 100%,40.272% 99.679%,31.64% 98.809%,24.087% 97.527%,17.595% 95.97%,12.148% 94.275%,7.73% 92.581%,4.323% 91.024%,1.91% 89.742%,0.475% 88.872%,0% 88.551%,0% 0% );
    }
</style>