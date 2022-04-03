import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Studios.css';
import StudioPosts from './StudioPosts';
const Studios = () =>{
return(
    <div>
    <Navbar/>
        <div className="studio-page">
            <div className="studio-page-header">
                <h1>Studio Announcements</h1>
            </div>
            <div className="studio-page-feed">
                <div className="studio-page-feed-options">
                    <h2>options</h2>
                </div>
                <div className="studio-page-feed-data">
                    <StudioPosts/>
                    <StudioPosts/>
                    <StudioPosts/>
                    <StudioPosts/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Studios