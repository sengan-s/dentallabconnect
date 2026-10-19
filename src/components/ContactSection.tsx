import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Building, Smartphone, FileText, CheckCircle2 } from 'lucide-react';
import { CatalogueItem } from '../data/catalogueData';

interface ContactSectionProps {
  prefilledProduct?: CatalogueItem | null;
  onClearPrefill?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProduct,
  onClearPrefill,
}) => {
  const [clinicName, setClinicName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Update product name when prefilledProduct changes
  useEffect(() => {
    if (prefilledProduct) {
      setProductName(prefilledProduct.name);
      setMessage(
        `Hi Saravana Kumar, I am enquiring about ${prefilledProduct.name} (${prefilledProduct.category}) for my dental clinic.`
      );
    }
  }, [prefilledProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!clinicName.trim()) {
      setFormError('Please enter your Dentist or Clinic Name.');
      return;
    }
    if (!contactNumber.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }

    // Construct formatted WhatsApp message
    const textLines = [
      `*Dental Lab Connect Product Enquiry*`,
      `*Dentist / Clinic:* ${clinicName.trim()}`,
      `*Contact Number:* ${contactNumber.trim()}`,
      productName.trim() ? `*Product Name:* ${productName.trim()}` : `*Product:* General Product Enquiry`,
      message.trim() ? `*Case Requirements:* ${message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/917639664119?text=${encodeURIComponent(textLines)}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE] mb-2">
                <span>Direct Inquiries</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
                Contact Information & Enquiries
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#8E95A2] leading-relaxed font-light">
                Connect directly with our lab coordinator for product clarifications, custom appliance requirements, and case coordination.
              </p>
            </div>

            {/* Direct details card */}
            <div className="bg-[#111317] rounded-xl border border-white/10 p-6 space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 pb-5 border-b border-white/10">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 text-white flex items-center justify-center font-bold text-lg font-['Outfit'] shrink-0">
                  SK
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8E95A2] block">
                    Contact Person
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Saravana Kumar
                  </h3>
                  <span className="text-xs text-[#C0C4CA] font-mono">
                    Dental Lab Connect
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:+917639664119"
                  className="w-full flex items-center justify-between p-3.5 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/5 text-[#C0C4CA] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#8E95A2] block uppercase">
                        Phone Call
                      </span>
                      <span className="text-sm font-bold font-mono text-white group-hover:text-[#E5E7EB]">
                        7639664119
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#C0C4CA] group-hover:text-white">
                    Call Now &rarr;
                  </span>
                </a>

                <a
                  href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20am%20enquiring%20about%20dental%20laboratory%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metallic-button w-full flex items-center justify-between p-3.5 rounded-lg font-semibold transition-all shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-black/10 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-[#08090B]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#08090B]/70 block uppercase">
                        WhatsApp Direct
                      </span>
                      <span className="text-sm font-bold font-mono text-[#08090B]">
                        7639664119
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#08090B] font-semibold">
                    Chat on WhatsApp &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 rounded-xl bg-[#111317] border border-white/5 text-xs text-[#8E95A2] space-y-2 font-light">
              <p className="font-semibold text-white flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#C0C4CA]" />
                <span>Dental Practice Assistance</span>
              </p>
              <p className="leading-relaxed">
                Feel free to state specific impression details, upper/lower requirements, bracket slots, or shade preferences when submitting inquiries.
              </p>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-[#111317] rounded-xl border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold font-['Outfit'] text-white">
                  Send a Product Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#8E95A2] mt-1 font-light">
                  Fill in your details below. Submitting will prepare your message and open WhatsApp with the entered details prefilled for your review.
                </p>
              </div>

              {formError && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800 text-xs text-rose-300 font-medium">
                  {formError}
                </div>
              )}

              {isSubmitted && (
                <div className="p-4 rounded-lg bg-white/5 border border-white/20 text-xs text-[#E5E7EB] space-y-1">
                  <p className="font-semibold flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#C0C4CA] shrink-0" />
                    <span>WhatsApp Enquiry Prepared</span>
                  </p>
                  <p className="text-[#A0A5AE]">
                    WhatsApp has opened in a new tab with your prefilled details. Click &ldquo;Send&rdquo; in WhatsApp to dispatch your message directly to Saravana Kumar.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Clinic / Dentist Name */}
                <div>
                  <label
                    htmlFor="clinicName"
                    className="block text-xs font-mono text-[#A0A5AE] mb-1 uppercase"
                  >
                    Dentist or Clinic Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#646A77]" />
                    <input
                      id="clinicName"
                      type="text"
                      required
                      value={clinicName}
                      onChange={(e) => setClinicName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh / Dental Care Clinic"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#15171B] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#646A77] focus:outline-hidden focus:border-[#C0C4CA]"
                    />
                  </div>
                </div>

                {/* Contact Phone Number */}
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-xs font-mono text-[#A0A5AE] mb-1 uppercase"
                  >
                    Contact Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#646A77]" />
                    <input
                      id="contactNumber"
                      type="tel"
                      required
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#15171B] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#646A77] focus:outline-hidden focus:border-[#C0C4CA]"
                    />
                  </div>
                </div>

                {/* Product Name */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="productName"
                      className="block text-xs font-mono text-[#A0A5AE] uppercase"
                    >
                      Product Name
                    </label>
                    {prefilledProduct && (
                      <button
                        type="button"
                        onClick={() => {
                          setProductName('');
                          if (onClearPrefill) onClearPrefill();
                        }}
                        className="text-[10px] font-mono text-[#646A77] hover:text-white"
                      >
                        Clear prefilled product
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#646A77]" />
                    <input
                      id="productName"
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="e.g. Zirconia Monolithic, Twin Block, Bredent Denture..."
                      className="w-full pl-9 pr-3 py-2.5 bg-[#15171B] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#646A77] focus:outline-hidden focus:border-[#C0C4CA]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#A0A5AE] mb-1 uppercase"
                  >
                    Enquiry Message / Case Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify case specifics, upper/lower arch, wire thickness, shade requirements, or questions regarding availability..."
                    className="w-full p-3 bg-[#15171B] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#646A77] focus:outline-hidden focus:border-[#C0C4CA] resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="metallic-button w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#08090B]" />
                    <span>Prepare WhatsApp Enquiry</span>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-[#646A77] font-light">
                    Note: Submitting this form prepares your message and opens WhatsApp with your enquiry details prefilled. You can review and confirm before dispatching.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
