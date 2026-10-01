'use client';

import React, { useState } from 'react';

interface ReviewReply {
  text: string;
  time: string;
}

interface Review {
  id: number;
  name: string;
  avatarBg: string;
  meta: string;
  time: string;
  stars: number;
  text: string;
  reply?: ReviewReply;
}

const row1Reviews: Review[] = [
  {
    id: 1,
    name: 'Jasut Gamwal',
    avatarBg: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
    meta: '1 review · Verified Patient',
    time: '2 months ago',
    stars: 5,
    text: 'Most knowledgeable for autism treatment in India, most economical and time-bound result and this is with diet and exercise no therapy and with this my child is perfectly normal with 26 months of treatment. First time I understand PTSD red flag symptoms in autism from this centre.',
  },
  {
    id: 2,
    name: 'Parul Rajdev',
    avatarBg: 'linear-gradient(135deg, #7e22ce, #a855f7)',
    meta: '4 reviews · Verified Patient',
    time: '6 months ago',
    stars: 5,
    text: 'I was struggling with a piles problem, and Dr. Kamal treated it successfully with homeopathic medicines. She is brilliant and truly knowledgeable. Dr. Kamal and her husband, Dr. Ketan, have taken care of many members of our family over the years. Highly recommended!',
    reply: {
      text: "Thank you, Parul Rajdev, for your kind words and trust. We're glad to hear that your treatment was successful. Your appreciation for Dr. Kamal and Dr. Ketan means a lot to us. Wishing you and your family continued health and wellness.",
      time: '6 months ago',
    },
  },
  {
    id: 3,
    name: 'BIREN PATEL',
    avatarBg: 'linear-gradient(135deg, #c2410c, #f97316)',
    meta: '2 reviews · 3 photos',
    time: 'a year ago',
    stars: 5,
    text: "Working with pharma industry and read a lot about autism, about cure, all search results explain there is no cure for autism. After first 4 months of treatment and Dr Patel's protocol I have seen improvement in my son, another 4 months and my child has shown remarkable developmental progress.",
    reply: {
      text: "Thank you, Biren Patel! We truly appreciate your thoughtful feedback. It's wonderful to hear about your son's remarkable progress with Dr. Ketan Patel's treatment protocol. Your dedication and trust inspire us to continue helping more children reach their full potential.",
      time: '10 months ago',
    },
  },
  {
    id: 4,
    name: 'Jaya Pawar',
    avatarBg: 'linear-gradient(135deg, #0f766e, #14b8a6)',
    meta: '11 reviews · 4 photos',
    time: 'a year ago',
    stars: 5,
    text: 'I contacted Dr Ketan Patel in October 2021 as my child had delay developmental milestones like he had no speech , no eye contact , no expressions , he was hyperactive all this was indicative of mild autism. Dr Patel advised me to put my son on constitutional homeopathy, and today he speaks, connects, and expresses joy.',
    reply: {
      text: "We're truly grateful to be part of your child's inspiring journey thank you for trusting Dr. Ketan B Patel.",
      time: 'a year ago',
    },
  },
  {
    id: 5,
    name: 'Heena Singh',
    avatarBg: 'linear-gradient(135deg, #573012, #854d0e)',
    meta: '1 review · Verified Patient',
    time: '9 months ago',
    stars: 5,
    text: 'If you have child with ASD, one opinion of his is must for most time bound result and cost effective treatment with utmost scientific approach. Perfect guidance regarding vitamins, supplements, pre and probiotics and very minimum therapy by Dr. Ketan Patel.',
    reply: {
      text: 'Thank you, Heena Singh, for your valuable feedback. We truly appreciate you sharing your experience and trust. It is encouraging to know that our scientific, individualized approach and careful guidance regarding nutrition and minimal therapy made a positive difference for your child.',
      time: '9 months ago',
    },
  },
  {
    id: 6,
    name: 'md robil king',
    avatarBg: 'linear-gradient(135deg, #be123c, #f43f5e)',
    meta: '1 review · Verified Patient',
    time: '7 months ago',
    stars: 5,
    text: 'Mere bachche ko rare neurological bimari thi sath me kai sari dhikkatw thi, isse achha koi doctor nahi he bahut jaga ghuma, jabhi jarurat padi help kiya, mere bachche ko bahut samaj bhadhai, faxt ek report karane ki jarurat thi vahi karvaya, Allah aap ko sab bachcho achha kare.',
    reply: {
      text: "Thank you so much md robil king for your kind words and trust. We're truly grateful that we could support your child during such a challenging time. Every child is special to us, and we always recommend only what is truly necessary.",
      time: '7 months ago',
    },
  },
  {
    id: 7,
    name: 'Ankur Dave',
    avatarBg: 'linear-gradient(135deg, #9d174d, #ec4899)',
    meta: '8 reviews · Ontario, Canada',
    time: 'a year ago',
    stars: 5,
    text: 'I would love to share my personal experience with Dr ketan patel sir. We came from Canada to india travelling for treatment of my son. We had counselling with sir and were given homeopathic medication and started his gluten free and dairy free diet. Today my son is thriving in school and communication.',
    reply: {
      text: 'THANK YOU for placing your trust in Dr. Ketan Patel and travelling all the way from Canada.',
      time: 'a year ago',
    },
  },
  {
    id: 8,
    name: 'Vinod Labana',
    avatarBg: 'linear-gradient(135deg, #047857, #10b981)',
    meta: '1 review · 1 photo',
    time: '7 months ago',
    stars: 5,
    text: 'Mara gamde thi chhora dakter kane moklya, dava karvane se achha laga, chhore ki magaj ki bimari me bahut fark pada, Paisa kam hua sare paise jo idhar udhar therapy me jana padta tha ho sare bandh ho gaye, badiya daktor chhe.',
    reply: {
      text: 'Thank you so much for your 5-star review, Vinod Labana! We really appreciate your support.',
      time: '7 months ago',
    },
  },
  {
    id: 9,
    name: 'mayank upadhyay',
    avatarBg: 'linear-gradient(135deg, #6d28d9, #8b5cf6)',
    meta: '8 reviews · 4 photos',
    time: '2 years ago',
    stars: 5,
    text: "Dr. Ketan Patel is God for our child, with his treatment and diet plan my son's eye contact got cured within a week. I pray to God to please give him long and healthy life for his humble duty. yes, autism can cured completely...",
    reply: {
      text: 'Thank you for the 5-star rating! We truly appreciate your support!',
      time: 'a year ago',
    },
  },
];

const row2Reviews: Review[] = [
  {
    id: 10,
    name: 'Priya Shirke',
    avatarBg: 'linear-gradient(135deg, #0369a1, #0ea5e9)',
    meta: '1 review · Verified Patient',
    time: '11 months ago',
    stars: 5,
    text: 'One of the best doctor for autism, taken care of my child in very good way, saved my money, other doctor told me that your son is having difficult autism and not curable but he is almost normal.',
    reply: {
      text: "Thank you, Priya Shirke! We truly appreciate your heartfelt feedback. We're so glad to know your child has shown such wonderful progress.",
      time: '10 months ago',
    },
  },
  {
    id: 11,
    name: 'Martin Binoy',
    avatarBg: 'linear-gradient(135deg, #4338ca, #6366f1)',
    meta: '4 reviews · Verified Patient',
    time: '5 years ago',
    stars: 5,
    text: 'My son has completed 5 months treatment under Dr. Ketan and he has already shown great progress from his initial days. I wish I could access him earlier. But I have full faith that he will turn around my son completely.',
    reply: {
      text: 'Thank you for the 5-star rating! We truly appreciate your support!',
      time: 'a year ago',
    },
  },
  {
    id: 12,
    name: 'Ravina Patil',
    avatarBg: 'linear-gradient(135deg, #9f1239, #e11d48)',
    meta: '1 review · Verified Patient',
    time: 'a year ago',
    stars: 5,
    text: 'My daughter is having cerebral palsy, not able to hold head, legs and arms are weak, no power, difficulties in holding things, after 2 years of treatment started walking, speech is normal now, started writing slowly, doctor told speed will increase in few months, thank you doctor ketan for your help.',
    reply: {
      text: "Thank you, Ravina Patil! We're truly happy to hear about your daughter's wonderful progress. Your trust and consistency, along with Dr. Ketan Patel's treatment, have brought such inspiring results.",
      time: '10 months ago',
    },
  },
  {
    id: 13,
    name: 'Rinku Patidar',
    avatarBg: 'linear-gradient(135deg, #115e59, #0d9488)',
    meta: '4 reviews · Verified Patient',
    time: '2 years ago',
    stars: 5,
    text: 'Achieved cure in one child among twins with ASD, remaining one is also improved but little slow, results are better than expected. Dr Ketan Patel helped us very well in all best possible way, Thank you Dr Ketan for your help.',
    reply: {
      text: 'Thank you for the 5-star rating! We truly appreciate your support!',
      time: 'a year ago',
    },
  },
  {
    id: 14,
    name: 'Anu Gogia',
    avatarBg: 'linear-gradient(135deg, #1e40af, #2563eb)',
    meta: '2 reviews · Verified Patient',
    time: '11 months ago',
    stars: 5,
    text: 'Ye doctor me knowledge autism ki bimari ke bare me hai, meri beti ko speech maturity ke sath socialization aa gaya, koi therapi maine nahi karvai, sirf running karvaya uske sath sath Gluten free Casein free sugar khana khilaya, shukriya dr ketan.',
    reply: {
      text: "Thank you, Anu Gogia! We're so glad to hear about your daughter's amazing progress. Your trust in Dr. Ketan Patel's treatment and consistent care truly made a difference.",
      time: '10 months ago',
    },
  },
  {
    id: 15,
    name: 'Prasad Tarunkishore',
    avatarBg: 'linear-gradient(135deg, #c2410c, #fb923c)',
    meta: '2 reviews · Verified Patient',
    time: '2 years ago',
    stars: 5,
    text: 'After 2 years & 9 months I found complete recovery from ASD to normal child with the help & guidance of Dr. Ketan Patel. We have very heated arguments about number of things, but now I have understand this helps my child to recover completely out from ASD. And I will say he guided me just to make my child perfect.',
    reply: {
      text: 'Thank you for the 5-star rating! We truly appreciate your support!',
      time: 'a year ago',
    },
  },
  {
    id: 16,
    name: 'Asha',
    avatarBg: 'linear-gradient(135deg, #075985, #0284c7)',
    meta: '1 review · Verified Patient',
    time: '2 years ago',
    stars: 5,
    text: 'My granddaughter is under the treatment of dr ketan patel... By 3 month and 20days Not complete improve but she started responding by her name, started Eye contact and interaction. Thank you Dr. Ketan.',
    reply: {
      text: "Thank you. It's all your efforts I have just guided you.",
      time: '2 years ago',
    },
  },
  {
    id: 17,
    name: 'chandan poddar',
    avatarBg: 'linear-gradient(135deg, #1e1b4b, #3730a3)',
    meta: 'Local Guide · 25 reviews · 3 photos',
    time: '7 years ago',
    stars: 5,
    text: "I feel blessed that i can found someone within a week of my 2.9 years old daughters autism diagnosis who can tell me 'it takes aprox 2 years but your daughter will be cure to some extent 80-90% or even 100%' and deliver real recovery results.",
    reply: {
      text: 'Thank you for the 5-star rating! We truly appreciate your support!',
      time: 'a year ago',
    },
  },
  {
    id: 18,
    name: 'pratim goswami',
    avatarBg: 'linear-gradient(135deg, #831843, #db2777)',
    meta: '1 review · Kolkata',
    time: '11 months ago',
    stars: 5,
    text: 'Eastern part of India Kolkata to Ahmedabad, distance is long but all goes smooth, my trust in Dr ketan is fulfilled, my son came out from Autism with two and half years of treatment, final medication received, tough days are over now.',
    reply: {
      text: "Thank you, Pratim Goswami! We're truly delighted to hear about your son's incredible recovery journey. Your trust, dedication, and consistent follow-through made a big difference.",
      time: '10 months ago',
    },
  },
  {
    id: 19,
    name: 'Nitin Pardeshi',
    avatarBg: 'linear-gradient(135deg, #15803d, #22c55e)',
    meta: '5 reviews · Verified Patient',
    time: '8 years ago',
    stars: 5,
    text: 'I think he is the only ray of hope for Parents of autistic children. I have twin daughters with Autism and all doctors always told me that there is no permanent cure for this and therapy is needed for lifetime. However with just 6 months under Dr. Ketan Patel we saw dramatic transformation.',
    reply: {
      text: 'Thank you for the 5-star rating! We truly appreciate your support!',
      time: 'a year ago',
    },
  },
];

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" style={{ flexShrink: 0, display: 'block' }}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div
      className="gr-stars"
      aria-label={`${count} out of 5 stars`}
      style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="#FBBC04"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0, display: 'inline-block' }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const initial = review.name.trim().charAt(0).toUpperCase();
  const isLong = review.text.length > 185;
  const displayText = expanded || !isLong ? review.text : review.text.slice(0, 180) + '...';

  return (
    <div
      className="gr-card"
      style={{
        width: '420px',
        minWidth: '420px',
        maxWidth: '420px',
        flex: '0 0 420px',
        background: '#ffffff',
        border: '1.5px solid #edf2f7',
        borderRadius: '20px',
        padding: '24px 26px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        boxShadow: '0 4px 20px -2px rgba(10, 31, 68, 0.05), 0 2px 6px -1px rgba(10, 31, 68, 0.03)',
      }}
    >
      {/* Header with avatar, user info, and Google badge */}
      <div
        className="gr-card-head"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
        }}
      >
        <div
          className="gr-user-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            minWidth: 0,
          }}
        >
          {/* Avatar guaranteed strict circular dimensions */}
          <div
            className="gr-avatar"
            style={{
              width: '46px',
              height: '46px',
              minWidth: '46px',
              minHeight: '46px',
              maxWidth: '46px',
              maxHeight: '46px',
              borderRadius: '50%',
              background: review.avatarBg,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontWeight: 700,
              fontSize: '1.15rem',
              boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            {initial}
          </div>
          <div className="gr-user-meta" style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <h4
              className="gr-user-name"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#0f172a',
                lineHeight: 1.3,
                margin: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {review.name}
            </h4>
            <span
              className="gr-user-sub"
              style={{
                fontSize: '0.78rem',
                color: '#64748b',
                marginTop: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              {review.meta}
            </span>
          </div>
        </div>
        <div
          className="gr-badge"
          title="Verified Google Review"
          style={{
            flexShrink: 0,
            padding: '6px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GoogleIcon />
        </div>
      </div>

      {/* Star rating and time */}
      <div
        className="gr-rating-row"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '14px',
        }}
      >
        <StarRating count={review.stars} />
        <span
          className="gr-time"
          style={{
            fontSize: '0.78rem',
            color: '#94a3b8',
            fontWeight: 500,
          }}
        >
          {review.time}
        </span>
      </div>

      {/* Review Text */}
      <p
        className="gr-text"
        style={{
          fontSize: '0.92rem',
          lineHeight: 1.65,
          color: '#334155',
          margin: 0,
          flex: 1,
        }}
      >
        &ldquo;{displayText}&rdquo;
        {isLong && (
          <button
            type="button"
            className="gr-more-btn"
            style={{
              background: 'none',
              border: 'none',
              color: '#008C8C',
              fontWeight: 600,
              fontSize: '0.86rem',
              cursor: 'pointer',
              padding: 0,
              marginLeft: '6px',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? ' Show Less' : ' More'}
          </button>
        )}
      </p>

      {/* Doctor Owner Reply Box */}
      {review.reply && (
        <div
          className="gr-reply-box"
          style={{
            marginTop: '16px',
            padding: '12px 16px',
            background: 'rgba(0, 140, 140, 0.04)',
            borderLeft: '3.5px solid #008C8C',
            borderRadius: '0 14px 14px 0',
          }}
        >
          <div
            className="gr-reply-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '6px',
              flexWrap: 'wrap',
            }}
          >
            <div
              className="gr-reply-avatar"
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#008C8C',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <span
              className="gr-reply-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.82rem',
                color: '#0f172a',
              }}
            >
              Dr. Ketan Patel (Owner)
            </span>
            <span
              className="gr-reply-time"
              style={{
                fontSize: '0.74rem',
                color: '#94a3b8',
              }}
            >
              {review.reply.time}
            </span>
          </div>
          <p
            className="gr-reply-text"
            style={{
              fontSize: '0.82rem',
              color: '#475569',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {review.reply.text}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ReviewsAutoScroll() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`gr-wrapper ${paused ? 'is-paused' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Top Google summary stats bar */}
      <div className="gr-summary-bar">
        <div className="gr-sum-left">
          <GoogleIcon />
          <span className="gr-sum-score">4.9</span>
          <StarRating count={5} />
          <span className="gr-sum-count">Based on 160+ Verified Google Reviews</span>
        </div>
        <div className="gr-sum-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#008C8C">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          100% Authentic Patient Experiences
        </div>
      </div>

      {/* Row 1: Smooth Auto-Scroll Left */}
      <div className="gr-marquee-row">
        <div className="gr-track gr-track-left">
          {row1Reviews.concat(row1Reviews).map((review, idx) => (
            <ReviewCard key={`r1-${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2: Smooth Auto-Scroll Right */}
      <div className="gr-marquee-row">
        <div className="gr-track gr-track-right">
          {row2Reviews.concat(row2Reviews).map((review, idx) => (
            <ReviewCard key={`r2-${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}