const UpgradeSwitch = ({ open = false, onToggle = () => {} }) => {
    return (
        <>
        <div>
            <hr className="border-t border-[#e1e7ea]" />
            <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-5 text-left">
                <span className="text-[18px] font-semibold text-[#032b41]">Can I switch subscriptions from monthly to yearly, or yearly to monthly?</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#032b41] transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <polyline points="6 9 12 15 18 9" />
                </svg>
                </button>
                <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: open ? 400 : 0, opacity: open ? 1 : 0 }}>
                    <div className="min-h-0">
                        <p className="pb-5 text-[16px] leading-7 text-[#394547]">While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.</p>
                    </div>
                </div>
                        </div>
        </>
    )
}

export default UpgradeSwitch