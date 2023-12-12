import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homePage-container">
      <h1>Sketch Tracker</h1>
      <div className='homePage-container-buttons'>
        <a href='/lessons' className='link-button'>Lessons</a>
        <a href='/calendar' className='link-button'>Calendar</a>
        <a href='https://drawabox.com/' className='link-button'>Drawabox</a>
      </div>
    </div>
  );
};

export default HomePage;
