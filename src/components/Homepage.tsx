import './Homepage.css';

const HomePage = () => {
    return (
      <div className="homePage-container">
        <h1>Sketch Tracker</h1>
        <a href='/lessons' className='link-button'>Lessons</a>
        <a href='/calendar' className='link-button'>Calendar</a>
        <a href='https://drawabox.com/' className='link-button'>Drawabox</a>
      </div>
    );
  };

  export default HomePage;
