import React from 'react';
import HomeContent from './HomeContent'
export default () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Welcome</h1>
      <p className="lead">"I'm an enthused full-stack developer, voracious reader, and basketball geek. I primarily use React but I'll learn anything that strikes my fancy. I believe in connecting people through code. I'm super interested in anything that can save a buck. Collecting data from ebay for the best prices, or repurposing existing commercial hardware to suit private enterprise needs.

"</p>
      <hr className="my-4" />
      <HomeContent />
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#d" role="button">Learn more</a>
      </p>
    </div>

  )
}