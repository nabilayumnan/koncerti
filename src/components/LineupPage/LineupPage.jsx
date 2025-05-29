import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './LineupPage.css';

const LineupPage = () => {
  // State for filtering
  const [filterType, setFilterType] = useState('a-z'); // 'a-z' or 'by-day'
  const [activeDay, setActiveDay] = useState('FRIDAY');
  const [activeLetter, setActiveLetter] = useState('all');

  // Artist data
  const artists = [
    { id: 1, name: 'AESPA', image: '/images/aespa.png', day: 'FRIDAY' },
    { id: 2, name: 'ARIANA GRANDE', image: '/images/ariana-grande.png', day: 'FRIDAY' },
    { id: 3, name: 'BILLIE EILISH', image: '/images/billie-eilish.png', day: 'FRIDAY' },
    { id: 4, name: 'BLACKPINK', image: '/images/blackpink.png', day: 'FRIDAY' },
    { id: 5, name: 'BTS', image: '/images/bts.png', day: 'SATURDAY' },
    { id: 6, name: 'CLAIRO', image: '/images/clairo.png', day: 'SATURDAY' },
    { id: 7, name: 'CHARLI XCX', image: '/images/charli-xcx.png', day: 'SATURDAY' },
    { id: 8, name: 'DAY6', image: '/images/day6.png', day: 'SATURDAY' },
    { id: 9, name: 'EXO', image: '/images/exo.png', day: 'SUNDAY' },
    { id: 10, name: 'GRACIE ABRAMS', image: '/images/gracie-abrams.png', day: 'SUNDAY' },
    { id: 11, name: 'JACKSON WANG', image: '/images/jackson-wang.png', day: 'SUNDAY' },
    { id: 12, name: 'JUSTIN BIEBER', image: '/images/justin-bieber.png', day: 'SUNDAY' },
    { id: 13, name: 'LANY', image: '/images/lany.png', day: 'FRIDAY' },
    { id: 14, name: 'LANA DEL REY', image: '/images/lana-del-rey.png', day: 'FRIDAY' },
    { id: 15, name: 'LAUV', image: '/images/lauv.png', day: 'SATURDAY' },
    { id: 16, name: 'MARTIN GARRIX', image: '/images/martin-garrix.png', day: 'SATURDAY' },
    { id: 17, name: 'NIKI', image: '/images/niki.png', day: 'SUNDAY' },
    { id: 18, name: 'SABRINA CARPENTER', image: '/images/sabrina-carpenter.png', day: 'SUNDAY' },
    { id: 19, name: 'SEVENTEEN', image: '/images/seventeen.png', day: 'SUNDAY' },
    { id: 20, name: 'SOMBR', image: '/images/sombr.png', day: 'FRIDAY' },
    { id: 21, name: 'TATE MCRAE', image: '/images/tate-mcrae.png', day: 'SATURDAY' },
    { id: 22, name: 'TAYLOR SWIFT', image: '/images/taylor-swift.png', day: 'SATURDAY' },
    { id: 23, name: 'THE MARIAS', image: '/images/the-marias.png', day: 'SUNDAY' },
    { id: 24, name: 'ZAYN', image: '/images/zayn.png', day: 'SUNDAY' },
  ];

  // Get unique first letters for alphabet filter
  const getUniqueFirstLetters = () => {
    const letters = artists.map(artist => artist.name.charAt(0));
    return [...new Set(letters)].sort();
  };

  const uniqueLetters = getUniqueFirstLetters();

  // Filter artists based on current filters
  const getFilteredArtists = () => {
    if (filterType === 'a-z') {
      if (activeLetter === 'all') {
        return artists.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return artists
          .filter(artist => artist.name.charAt(0) === activeLetter)
          .sort((a, b) => a.name.localeCompare(b.name));
      }
    } else {
      return artists.filter(artist => artist.day === activeDay);
    }
  };

  // Handle filter changes
  const handleFilterChange = (type) => {
    setFilterType(type);
    if (type === 'a-z') {
      setActiveLetter('all');
    } else {
      setActiveDay('FRIDAY');
    }
  };

  return (
    <div className="lineup-page">
      <Header />
      
      <main className="lineup-main">
        <div className="container">
          <h1 className="page-title">Lineup</h1>
          
          {/* Search Bar */}
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search" 
            />
            <button className="search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>
          
          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filterType === 'a-z' ? 'active' : ''}`}
              onClick={() => handleFilterChange('a-z')}
            >
              A-Z
            </button>
            <button 
              className={`filter-tab ${filterType === 'by-day' ? 'active' : ''}`}
              onClick={() => handleFilterChange('by-day')}
            >
              BY DAY
            </button>
          </div>
          
          {/* Secondary Filters */}
          {filterType === 'a-z' ? (
            <div className="alphabet-filter">
              {uniqueLetters.map(letter => (
                <button
                  key={letter}
                  className={`letter-button ${activeLetter === letter ? 'active' : ''}`}
                  onClick={() => setActiveLetter(letter)}
                >
                  {letter}
                </button>
              ))}
              <button
                className={`letter-button ${activeLetter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveLetter('all')}
              >
                ALL
              </button>
            </div>
          ) : (
            <div className="day-filter">
              <button
                className={`day-button ${activeDay === 'FRIDAY' ? 'active' : ''}`}
                onClick={() => setActiveDay('FRIDAY')}
              >
                FRIDAY
              </button>
              <button
                className={`day-button ${activeDay === 'SATURDAY' ? 'active' : ''}`}
                onClick={() => setActiveDay('SATURDAY')}
              >
                SATURDAY
              </button>
              <button
                className={`day-button ${activeDay === 'SUNDAY' ? 'active' : ''}`}
                onClick={() => setActiveDay('SUNDAY')}
              >
                SUNDAY
              </button>
            </div>
          )}
          
          {/* Artist Grid */}
          <div className="artists-grid">
            {getFilteredArtists().map(artist => (
              <div className="artist-card" key={artist.id}>
                <img src={artist.image} alt={artist.name} />
                <h3>{artist.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LineupPage;