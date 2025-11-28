import { motion } from 'framer-motion';
const storyCoupleImage = 'https://res.cloudinary.com/dphjoqgvb/image/upload/v1764341212/hero-section_fplcba.jpg';
import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          OUR LOVE STORY
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">A Decade to Find You: The Sweet Journey Home</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-4 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <p className="font-semibold">Chapter 1: The First Whisper of Fate (2012–2013)</p>
              <p>
                Our story began not with a meeting, but with a whisper of fate. Back in 2012–2013, our paths unknowingly crossed. Anjo was spending time at the seminary, which became a home for him, while Joanna was frequently visiting her high school best friend nearby. We shared the same space, breathed the same air, yet we were simply strangers, two people living parallel lives, waiting for the right moment.
              </p>
              
              <p className="font-semibold">Chapter 2: The Digital Reunion (January 2024)</p>
              <p>
                The waiting ended a decade later. In January 2024, our lives officially collided on social media. After so many years, we finally came across one another, and what followed was a whirlwind of messages. We began to chat, deeply knowing each other's interests, dreams, and histories, realizing the connection was profound.
              </p>

              <p className="font-semibold">Chapter 3: The Spark in Tagaytay (Early 2024)</p>
              <p>
                The inevitable happened soon after: we met in person. Our first real date took us to the refreshing heights of Tagaytay. We enjoyed the view and the ambiance at Bag of Beans Charito, concluding the night with a memorable karaoke session. This was the true ignition point, marking the exciting beginning of a formal courtship.
              </p>

              <p className="font-semibold">Chapter 4: The Official Beginning (June 29, 2024)</p>
              <p>
                A perfect culmination of our courtship arrived on June 29, 2024. Anjo met Joanna at the Lipa City Grand Terminal after her return from a Baguio trip. We stopped at the Dunkin' Donuts along the Star Tollway, near the Balete Exit. There, over sweet donuts and iced coffee, Joanna gave her sweet "Yes." That day became our anniversary.
              </p>

              <p className="font-semibold">Chapter 5: The Promise of Forever (June 29, 2025)</p>
              <p>
                Precisely one year after Joanna said "Yes," on our anniversary, June 29, 2025, Anjo made the ultimate commitment. At the romantic La Belle in Tagaytay City, he popped the question, turning our one-year celebration into a lifetime promise.
              </p>

              <div className="mt-8 pt-8 border-t-2 border-primary/20">
                <p className="text-sm italic text-foreground/80 mb-3">Our Vow</p>
                <p className="text-base italic text-primary font-medium">
                  "Where you go I will go, and where you stay I will stay… May the Lord deal with me, be it ever so severely, if even death separates you and me."
                </p>
                <p className="text-sm text-foreground/70 mt-2">- Ruth 1:16–17</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyCoupleImage}
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
