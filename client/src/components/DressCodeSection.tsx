import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';
const principalSponsorsImage = 'https://res.cloudinary.com/dphjoqgvb/image/upload/v1764341211/for_entourage_aoy1wm.jpg';
import flower9 from '@assets/flower9_1759741371017.png';
import flower3 from '@assets/flower3_1759741371015.png';
const guestsImage = 'https://res.cloudinary.com/dphjoqgvb/image/upload/v1764341210/for_guests_hkzxoa.jpg';

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Beige', color: '#dcc7a8', hex: '#dcc7a8' },
    { name: 'Taupe', color: '#9a8878', hex: '#9a8878' },
    { name: 'Soft Gray', color: '#bfbfbf', hex: '#bfbfbf' },
    { name: 'Cream', color: '#fffdf7', hex: '#fffdf7' }
  ];

  const entourageColors = [
    { name: 'Burgundy', color: '#800020', hex: '#800020' },
    { name: 'Navy Blue', color: '#1a3a52', hex: '#1a3a52' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display font-light italic mb-8 text-[48px] text-[#264d73]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Entourage */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl overflow-hidden hover-elegant transition-all duration-500 h-full flex flex-col">
              {/* Image */}
              <img src={principalSponsorsImage} alt="For Entourage" className="w-full h-64 object-cover" />
              
              <div className="p-8 text-center flex flex-col flex-1">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR ENTOURAGE
                    </h3>
                    <div className="text-left px-4 mb-6">
                      <p className="text-base font-semibold text-foreground mb-3">Kindly wear:</p>
                      <p className="text-sm text-foreground font-medium">Burgundy and Navy Blue attire</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Color Palette for Entourage */}
                <motion.div
                  className="mt-6 pt-6 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 8.7 }}
                >
                  <p className="text-sm font-semibold text-foreground mb-3">Colors</p>
                  <div className="flex justify-center gap-6">
                    {entourageColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-2">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl overflow-hidden hover-elegant transition-all duration-500 h-full flex flex-col">
              {/* Image */}
              <img src={guestsImage} alt="For Guests" className="w-full h-64 object-cover" />
              
              <div className="p-8 text-center flex flex-col flex-1">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <p className="text-sm font-semibold text-foreground mb-4">Semi-Formal Attire</p>
                    <div className="grid grid-cols-2 gap-4 text-left px-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Gentlemen:</p>
                        <p className="text-sm text-foreground">Polo or long sleeves</p>
                        <p className="text-sm text-foreground">with slacks</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Ladies:</p>
                        <p className="text-sm text-foreground">Dresses, skirts, or</p>
                        <p className="text-sm text-foreground">elegant coordinates</p>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/70 italic mt-3">Soft or neutral tones</p>
                  </div>
                </motion.div>

                {/* Suggested Colors for Guests - Inside Container */}
                <motion.div
                  className="mt-6 pt-6 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 8.9 }}
                >
                  <p className="text-sm font-semibold text-foreground mb-3">Suggested Colors</p>
                  <div className="flex justify-center gap-6">
                    {dressCodeColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-2">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Reminders */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-body font-medium text-foreground text-center">
              Additional Guidelines
            </h3>
            <div className="space-y-3 text-sm text-foreground text-center leading-relaxed">
              <div>
                <p className="font-semibold mb-1">No White Colors</p>
                <p>Kindly avoid wearing white, as this color is reserved for the bride.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Respectful Attire</p>
                <p>Kindly ensure your attire is respectful and appropriate for a religious ceremony.</p>
              </div>
              <p className="mt-4 text-foreground/80 italic">Let's celebrate love in style and elegance!</p>
            </div>
          </div>
        </motion.div>


        
      </div>
    </motion.section>
  );
};

export default DressCodeSection;