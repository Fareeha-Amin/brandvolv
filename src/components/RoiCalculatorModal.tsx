import React, { useState } from 'react';
import { X, Calculator, ArrowRight, TrendingUp, DollarSign, Users, Target } from 'lucide-react';

interface RoiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookCall,
}) => {
  const [adSpend, setAdSpend] = useState<number>(2500);
  const [dealValue, setDealValue] = useState<number>(3500);
  const [serviceType, setServiceType] = useState<string>('realty');

  if (!isOpen) return null;

  // Approximate cost per lead by service sector with BrandVolv system optimization
  const cplMap: Record<string, number> = {
    realty: 14,
    renovation: 18,
    b2b: 15,
    coaching: 12,
    healthcare: 16,
  };

  const expectedCpl = cplMap[serviceType] || 15;
  const estimatedLeads = Math.round(adSpend / expectedCpl);
  // Conservative conversion rate of qualified leads to closed deals: ~7%
  const estimatedDeals = Math.max(1, Math.round(estimatedLeads * 0.07));
  const estimatedRevenue = estimatedDeals * dealValue;
  const roas = (estimatedRevenue / adSpend).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-[#0c1020] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono-num uppercase tracking-wider text-blue-400 font-semibold mb-1">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span>Lead Volume & ROI Simulator</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white tracking-tight">
            Estimate Your Meta Ads Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Based on BrandVolv's historical benchmarks across USA service businesses.
          </p>
        </div>

        {/* Input Controls */}
        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Select Your Industry
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                { id: 'realty', label: 'Real Estate' },
                { id: 'renovation', label: 'Home Services' },
                { id: 'b2b', label: 'B2B Services' },
                { id: 'coaching', label: 'Coaching' },
                { id: 'healthcare', label: 'Healthcare' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    serviceType === item.id
                      ? 'bg-blue-600 border-blue-500 text-white font-semibold'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-semibold uppercase tracking-wider text-slate-400">
                Monthly Meta Ad Spend Budget
              </span>
              <span className="font-mono-num font-bold text-blue-400 text-sm">
                ${adSpend.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="15000"
              step="250"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono-num mt-1">
              <span>$500</span>
              <span>$5,000</span>
              <span>$10,000</span>
              <span>$15,000+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-semibold uppercase tracking-wider text-slate-400">
                Average Value Per Closed Client / Deal
              </span>
              <span className="font-mono-num font-bold text-emerald-400 text-sm">
                ${dealValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="20000"
              step="500"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono-num mt-1">
              <span>$500</span>
              <span>$5,000</span>
              <span>$10,000</span>
              <span>$20,000</span>
            </div>
          </div>
        </div>

        {/* Calculation Result Cards */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 font-mono-num">
          <div className="p-3 rounded-xl bg-white/[0.02]">
            <div className="text-[10px] uppercase text-slate-500 font-semibold flex items-center gap-1">
              <Target className="w-3 h-3 text-blue-400" />
              Target CPL
            </div>
            <div className="text-xl font-bold text-white mt-1">${expectedCpl}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Estimated cost / lead</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02]">
            <div className="text-[10px] uppercase text-slate-500 font-semibold flex items-center gap-1">
              <Users className="w-3 h-3 text-blue-400" />
              Monthly Leads
            </div>
            <div className="text-xl font-bold text-blue-400 mt-1">{estimatedLeads}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Qualified inquiries</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02]">
            <div className="text-[10px] uppercase text-slate-500 font-semibold flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-emerald-400" />
              Projected Revenue
            </div>
            <div className="text-xl font-bold text-emerald-400 mt-1">${estimatedRevenue.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">From ~{estimatedDeals} closed deals</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02]">
            <div className="text-[10px] uppercase text-slate-500 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-purple-400" />
              Pipeline Multiple
            </div>
            <div className="text-xl font-bold text-purple-300 mt-1">{roas}x</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Projected ROAS return</div>
          </div>
        </div>

        {/* Action */}
        <div className="space-y-3">
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
          >
            <span>Lock In These Projections on Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] text-slate-400">
            *Projections based on conservative 7% close rate of qualification-filtered Meta leads.
          </p>
        </div>
      </div>
    </div>
  );
};
