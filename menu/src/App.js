import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Topbar from './Components/Topbar';
import ActivityInsights from './Components/activityInsights/ActivityInsights.js';
import ActivityList from './Components/activityList/ActivityList';
import AllInsights from './Components/allInsights/AllInsights';

function App() {
  return (
    <div>
      {/* <Sidebar /> */}
      <Topbar />
    <div className="appCols">
      <ActivityInsights />
      <ActivityList />
      <AllInsights />
    </div>
      
      
    </div>
  );
}

export default App;