'use client';

import { useState } from 'react';
import type { Creator } from '@/data/creators';

interface CreatorCardProps {
  creator: Creator;
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  const [showSocials, setShowSocials] = useState(false);

  const handleContact = () => {
    const subject = encodeURIComponent(`Influencer Collaboration - ${creator.name}`);
    window.location.href = `mailto:contact@camstarnetwork.com?subject=${subject}`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  // Get initials for the avatar
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 shadow-xl relative overflow-hidden">
      
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#b81104] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

      {/* Header Info */}
      <div className="flex items-start gap-4 mb-6 relative z-10">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#b81104] to-red-700 flex items-center justify-center text-xl font-bold text-white shadow-lg border border-red-500/20 flex-shrink-0">
           {getInitials(creator.name)}
        </div>
        <div className="flex flex-col min-w-0 pt-0.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <h3 className="text-xl font-bold text-white tracking-tight truncate">{creator.name}</h3>
            {creator.isVerified && (
              <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.96 5.864L8.03 4.148 5.76 4.79l-.82 2.223-2.127.973-.207 2.36 1.118 2.083-1.118 2.083.207 2.36 2.127.973.82 2.223 2.27.642 1.93-1.716 2.36.207 2.083-1.118L16.48 16.5l2.223-.82.973-2.127 2.36-.207 2.083-1.118-2.083-1.118-2.36-.207-.973-2.127-2.223-.82-2.083 1.118-2.36-.207z" opacity=".2"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            )}
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <p className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {creator.state}
            </p>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-zinc-300 font-medium truncate">{creator.category}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 relative z-10">
        {creator.languages && creator.languages.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {creator.languages.map(lang => (
              <span key={lang} className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full">
                {lang}
              </span>
            ))}
          </div>
        )}

        {/* Followers */}
        <div className="grid grid-cols-3 gap-2 mb-6 pt-5 border-t border-zinc-800/80">
          <FollowerStat 
            platform="instagram" 
            count={creator.followers.instagram} 
            icon={<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />}
          />
          <FollowerStat 
            platform="youtube" 
            count={creator.followers.youtube} 
            icon={<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>}
          />
          <FollowerStat 
            platform="facebook" 
            count={creator.followers.facebook} 
            icon={<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
          />
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3 relative">
          <div className="relative flex-1">
            <button 
              onClick={() => setShowSocials(!showSocials)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg font-medium transition-colors text-sm border border-zinc-700/50 hover:border-zinc-600"
            >
              Socials
              <svg className={`w-3.5 h-3.5 transition-transform ${showSocials ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {showSocials && (
              <div className="absolute bottom-full left-0 w-full mb-2 bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-xl z-20">
                {['instagram', 'youtube', 'facebook'].map((platform) => {
                  const link = creator.socialLinks[platform as keyof typeof creator.socialLinks];
                  if (!link) return null;
                  return (
                    <a 
                      key={platform} 
                      href={link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block px-4 py-3 hover:bg-zinc-700 text-sm text-zinc-200 capitalize border-b border-zinc-700/50 last:border-0"
                    >
                      {platform}
                    </a>
                  );
                })}
                {!creator.socialLinks.instagram && !creator.socialLinks.youtube && !creator.socialLinks.facebook && (
                  <div className="px-4 py-3 text-sm text-zinc-500 text-center">No links available</div>
                )}
              </div>
            )}
          </div>
          
          <button 
            onClick={handleContact}
            className="flex-1 px-4 py-2.5 bg-[#b81104] hover:bg-red-600 text-white rounded-lg font-medium transition-colors text-sm text-center shadow-[0_0_15px_rgba(184,17,4,0.3)] hover:shadow-[0_0_20px_rgba(184,17,4,0.5)]"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  function FollowerStat({ platform, count, icon }: { platform: string, count?: number, icon: React.ReactNode }) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
        <svg className="w-5 h-5 text-zinc-400 mb-1.5" fill="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
        <span className="text-xs font-semibold text-zinc-300">
          {count ? formatNumber(count) : '-'}
        </span>
      </div>
    );
  }
}
