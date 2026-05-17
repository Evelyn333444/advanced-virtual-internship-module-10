const UpgradeSwitch = () => {
    return (
        <>
        <div>
            <hr class="border-t border-[#e1e7ea]">
            <button type="button" class="flex w-full items-center justify-between py-5 text-left">
                <span class="text-[18px] font-semibold text-[#032b41]">Can I switch subscriptions from monthly to yearly, or yearly to monthly?</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" class="shrink-0 text-[#032b41] transition-transform duration-200" style="transform:rotate(0deg)">
                <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                </button>
                <div class="grid overflow-hidden transition-all duration-300 ease-in-out grid-rows-[0fr] opacity-0">
                    <div class="min-h-0">
                        <p class="pb-5 text-[16px] leading-7 text-[#394547]">While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.</p>
                        </div>
                        </div>
                        </div>
        </>
    )
}

export default UpgradeSwitch