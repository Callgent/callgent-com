import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const BotFlow = () => {

    return (
        <section id="3-steps-start-up" style={{maxWidth: '1000px'}} className="pt-6 mx-auto md:pt-14 lg:pt-18 border-b border-body-color/[.15]">
            <div className="text-center">
                <h1 className="mb-14 md:mb-14 lg:mb-16 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Start up in just 3 steps
                </h1>
            </div>
            <div className="container">
                <div className="pb-14 dark:border-white/[.15]">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle
                                title="Step 1: Create a botlet"
                                paragraph="A botlet lets you chat with a service just like a friend;<br/>Or lets system invoke a user just like a service seamlessly."
                                titleSize="text-xl"
                                mb="44px"
                            />
                        </div>
                        <div className="w-full px-1 lg:w-1/2">
                            <div className="relative mx-auto aspect-[25/11] max-w-[700px] lg:mr-0">
                                <Image
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    src="/images/steps/step1-w.png"
                                    alt="create-botlet"
                                    fill
                                    className="mx-auto max-w-full drop-shadow-md dark:hidden lg:mr-0"
                                />
                                <Image
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    src="/images/steps/step1.png"
                                    alt="create-botlet"
                                    fill
                                    className="mx-auto hidden max-w-full drop-shadow-md dark:block lg:mr-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
            <div className="container">
                <div className="pb-14 pt-14 dark:border-white/[.15]">
                    <div className="-mx-4 flex flex-wrap items-center flex-col-reverse lg:flex-row">
                        <div className="w-full px-1 lg:w-1/2">
                            <div className="relative mx-auto aspect-[25/11] max-w-[700px] lg:mr-0">
                                <Image
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    src="/images/steps/step2-w.png"
                                    alt="connecting-to-botlet-owner"
                                    fill
                                    className="mx-auto max-w-full  drop-shadow-md dark:hidden lg:mr-0"
                                />
                                <Image
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    src="/images/steps/step2.png"
                                    alt="connecting-to-botlet-owner"
                                    fill
                                    className="mx-auto hidden max-w-full drop-shadow-md dark:block lg:mr-0"
                                />
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 flex lg:justify-end">
                            <SectionTitle
                                titleSize="text-xl"
                                title="Step 2: Configure an owner for the botlet"
                                paragraph="Connect the botlet to task owner, through `Receiver Endpoints`: Email, SMS, Slack channel, Twitter account, or your own API services...<br/>So that the tasks can be delivered to anywhere to be handled."
                                mb="44px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
            <div className="container">
                <div className="pb-14 pt-14 dark:border-white/[.15]">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle
                                titleSize="text-xl"
                                title="Step 3: Send a request to the botlet"
                                paragraph="Now the botlet is ready to work, by accepting task requests from anywhere through `Calling Endpoints` in any form: API, Email, Web page, Slack...<br/>The CORE philosophy of Botlet.IO, is to break the silos between users and systems, with AI empowered `Semantical` and `Progressive` invocation techniques."
                                mb="44px"
                            />
                        </div>
                        <div className="w-full px-1 lg:w-1/2">
                            <div className="relative mx-auto aspect-[25/11] max-w-[700px] lg:mr-0">
                                <Image
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    src="/images/steps/step3-w.png"
                                    alt="calling-botlet"
                                    fill
                                    className="mx-auto max-w-full drop-shadow-md dark:hidden lg:mr-0"
                                />
                                <Image
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    src="/images/steps/step3.png"
                                    alt="calling-botlet"
                                    fill
                                    className="mx-auto hidden max-w-full drop-shadow-md dark:block lg:mr-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BotFlow;
