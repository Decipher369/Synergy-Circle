
import React, { useState } from 'react';

interface FormState {
  fullName: string;
  email: string;
  startupName: string;
  vision: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  startupName?: string;
  vision?: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    startupName: '',
    vision: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.startupName.trim()) {
      newErrors.startupName = "Startup name is required";
    }

    if (!formData.vision.trim()) {
      newErrors.vision = "Please describe your vision";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="apply" className="py-24 md:py-40 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border-8 border-white/10 rounded-[64px] p-12 md:p-24 text-center shadow-2xl animate-in zoom-in duration-700">
            <div className="w-24 h-24 bg-blue-50 text-[#005bb7] rounded-3xl flex items-center justify-center mx-auto mb-10 rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Vision Received!</h2>
            <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed">
              Thanks, {formData.fullName.split(' ')[0]}. We'll review <span className="text-[#005bb7] font-black">{formData.startupName}</span> and reach out to you very soon.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#005bb7] transition-all"
            >
              Submit Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 md:py-40 bg-[#fcfcfc] textured-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white border border-slate-100 rounded-[64px] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#005bb7]/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div className="flex flex-col justify-center">
              <div className="mono text-[#005bb7] mb-8 font-black uppercase tracking-[0.5em]">Phase 01</div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                Register Your <br />
                <span className="text-[#005bb7]">Startup Vision.</span>
              </h2>
              <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
                Join the 2026 cohort of innovators. Bridging the gap between <span className="text-slate-900">imagination</span> and <span className="text-slate-900 font-bold">execution</span>.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: "01", text: "Submit basic info & vision" },
                  { step: "02", text: "Attend the Mastery Workshop" },
                  { step: "03", text: "Pitch to the grand jury" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-[#005bb7] group-hover:text-white transition-all duration-300">
                      <span className="mono text-xs font-black">{item.step}</span>
                    </div>
                    <p className="text-slate-900 font-black uppercase text-xs tracking-widest">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50/50 p-8 md:p-12 rounded-[48px] border border-slate-100">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={`w-full px-6 py-5 bg-white border ${errors.fullName ? 'border-red-300' : 'border-slate-100 focus:border-[#005bb7]'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-bold shadow-sm`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@sliit.lk"
                  className={`w-full px-6 py-5 bg-white border ${errors.email ? 'border-red-300' : 'border-slate-100 focus:border-[#005bb7]'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-bold shadow-sm`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 ml-1">Startup Name</label>
                <input 
                  type="text" 
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleChange}
                  placeholder="Nexus Flow"
                  className={`w-full px-6 py-5 bg-white border ${errors.startupName ? 'border-red-300' : 'border-slate-100 focus:border-[#005bb7]'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-bold shadow-sm`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 ml-1">The Vision</label>
                <textarea 
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  rows={3}
                  placeholder="The problem you solve..."
                  className={`w-full px-6 py-5 bg-white border ${errors.vision ? 'border-red-300' : 'border-slate-100 focus:border-[#005bb7]'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-bold shadow-sm resize-none`}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-70' : 'hover:bg-[#005bb7] hover:scale-[1.02] shadow-2xl shadow-slate-900/10'}`}
              >
                {isSubmitting ? 'Processing...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
