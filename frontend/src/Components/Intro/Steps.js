const Steps = () => {

    return (
        <div id="steps" class="min-h-screen py-6 flex flex-col justify-center sm:py-12 pt-8">
            <h2 className="text-center font-bold text-5xl py-4">Steps To Book a Ride...</h2>
            <div class="py-12 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
                <div class="relative text-purple-900 antialiased text-lg font-semibold">
                    <div class="hidden sm:block w-3 bg-purple-900 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                    <div class="mt-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-start w-full mx-auto items-center">
                                <div class="w-full sm:w-2/3 sm:pr-8 -translate-x-28">
                                    <div class="p-8 bg-white rounded-lg shadow">
                                        If you are a driver, go to Driver Login page and you are done.
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-full bg-purple-900 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <span className="text-white">1</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-end w-full mx-auto items-center">
                                <div class="w-full sm:w-2/3 sm:pl-8 translate-x-28">
                                    <div class="p-8 bg-white rounded-lg shadow">
                                        If you are a user, go to user page.
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-full bg-purple-900 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <span className="text-white">2</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-start w-full mx-auto items-center">
                                <div class="w-full sm:w-2/3 sm:pr-8 -translate-x-28">
                                    <div class="p-8 bg-white rounded-lg shadow">
                                        Enter your journey details and pick one of available drivers.
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-full bg-purple-900 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <span className="text-white">3</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-0">
                        <div class="flex flex-col sm:flex-row items-center">
                            <div class="flex justify-end w-full mx-auto items-center">
                                <div class="w-full sm:w-2/3 sm:pl-8 translate-x-28">
                                    <div class="p-8 bg-white rounded-lg shadow">
                                        Enter driver's Transaction Id and amount to be paid and it's done.
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-full bg-purple-900 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <span className="text-white">4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;