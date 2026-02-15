
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
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Name is too short";
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
    } else if (formData.vision.length < 20) {
      newErrors.vision = "Tell us a bit more (min 20 chars)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="apply" className="py-24 md:py-40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-slate-100 rounded-[50px] p-12 md:p-20 text-center shadow-2xl animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Application Received!</h2>
            <p className="text-slate-500 text-lg mb-8">
              Thanks, {formData.fullName.split(' ')[0]}. Our board will review your vision for <span className="font-bold text-slate-900">{formData.startupName}</span> and reach out within 48 hours.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
            >
              Back to form
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white border border-slate-100 rounded-[50px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full -mr-20 -mt-20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                Register Your <br />
                <span className="text-emerald-500">Startup Vision.</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8">
                Join the 2024 cohort of innovators. Fill out the details to begin your journey through Phase 01.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                    <span className="text-emerald-500 font-bold">1</span>
                  </div>
                  <p className="text-slate-700 font-medium text-sm italic">Submit basic info & vision</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                    <span className="text-emerald-500 font-bold">2</span>
                  </div>
                  <p className="text-slate-700 font-medium text-sm italic">Attend the Masterclass</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                    <span className="text-emerald-500 font-bold">3</span>
                  </div>
                  <p className="text-slate-700 font-medium text-sm italic">Pitch to the grand jury</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.fullName ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-emerald-500'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-medium`}
                />
                {errors.fullName && <p className="text-xs font-bold text-red-500 ml-1">{errors.fullName}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-emerald-500'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-medium`}
                />
                {errors.email && <p className="text-xs font-bold text-red-500 ml-1">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">Startup Name</label>
                <input 
                  type="text" 
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleChange}
                  placeholder="Nexus Flow"
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.startupName ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-emerald-500'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-medium`}
                />
                {errors.startupName && <p className="text-xs font-bold text-red-500 ml-1">{errors.startupName}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">Project Vision</label>
                <textarea 
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  rows={3}
                  placeholder="What problem are you solving?"
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.vision ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-emerald-500'} rounded-2xl outline-none transition-all placeholder:text-slate-300 font-medium resize-none`}
                />
                {errors.vision && <p className="text-xs font-bold text-red-500 ml-1">{errors.vision}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10'}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Submit Application'}
              </button>
              
              <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                Limited seats available for Phase 02
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
