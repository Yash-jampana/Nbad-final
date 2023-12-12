import React, { useEffect, useRef,useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Chart from 'chart.js/auto'
import * as d3 from 'd3';

function HomePage() {
    const buttonStyle = {
        fontSize: '14px',
        padding: '10px 20px',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    
        
    
    return (
        <main  className="center" id="main" aria-label="main">
            
                <div className="page-area">    
                    <article style={{ backgroundColor: '#f9e79f', padding: '20px' }}>
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
                
        
                
                <article style={{ backgroundColor: '#82e0aa', padding: '20px' }}>
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
                
        
                
                <article style={{ backgroundColor: '#85c1e9', padding: '20px' }}>
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
                
        
                
    
                <article style={{ backgroundColor: '#f5b7b1', padding: '20px' }}>
                    
                    <h1>Free</h1>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </article>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <Link to="/login">
          <button className='menuButton' style={{ fontSize: '14px', padding: '10px 10px' }}>Login as an Existing User</button>
        </Link>

        <Link to="/signup">
          <button className='menuButton' style={{ fontSize: '14px', padding: '10px 10px' }}>Create Account and Track Budget</button>
        </Link>
        </div>
                
            {/* <section className="chart-container">
            <article className="chart">
                <h1>Chart</h1>
                    <p>
                        <canvas ref={chartRef} />
                    </p>
             
            </article>
    
            <article className="chart">
                <h1>D3JS Chart</h1>
                <svg ref={svgRef}></svg>
                
                
            </article>
        </section>        */}
        
                
        
                
                 
        </div>  
        </main>
        
     

    );
    
    
  }
  
  export default HomePage;