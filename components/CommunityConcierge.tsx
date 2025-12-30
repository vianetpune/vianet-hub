import React from 'react';

interface Community {
  title: string;
  link: string;
  emoji: string;
  description?: string;
}

const CommunityConcierge: React.FC = () => {
  const communities: Community[] = [
    {
      title: '🛍️ Vianet Pune Products',
      emoji: '🛍️',
      link: 'https://chat.whatsapp.com/HoQoFtCugjs84rhsr8US26',
      description: 'Explore our wide range of tech and gifting products'
    },
    {
      title: '📢 Vianet Tech Channel',
      emoji: '📢',
      link: 'https://whatsapp.com/channel/0029Va97sAR1L7DI36VxY71Y',
      description: 'Stay updated with latest tech trends'
    },
    {
      title: '✨ Vianet Moments',
      emoji: '✨',
      link: '#',
      description: 'Share your moments with us'
    },
    {
      title: '📱 Premium Cases',
      emoji: '📱',
      link: '#',
      description: 'Premium phone cases and accessories'
    },
    {
      title: '⚡ Tech Channel',
      emoji: '⚡',
      link: '#',
      description: 'Latest tech discussions and tips'
    },
    {
      title: '🎯 Catalogues',
      emoji: '🎯',
      link: 'https://bit.ly/4chu430',
      description: 'Browse our complete product catalogs'
    }
  ];

  return (
    <div className="community-section">
      <h2>WhatsApp Communities & Social Links</h2>
      <div className="communities-grid">
        {communities.map((community, index) => (
          <a
            key={index}
            href={community.link}
            target="_blank"
            rel="noopener noreferrer"
            className="community-card"
          >
            <span className="emoji">{community.emoji}</span>
            <h3>{community.title}</h3>
            {community.description && <p>{community.description}</p>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CommunityConcierge;
