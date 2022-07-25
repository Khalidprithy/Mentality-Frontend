import React from 'react';

const States = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-4'>
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-title text-neutral">On average, there are</div>
                    <div class="stat-value text-secondary">132</div>
                    <div class="stat-desc">suicides per day</div>
                </div>
            </div>
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-title">Men die by suicide</div>
                    <div class="stat-value text-secondary">3.53x</div>
                    <div class="stat-desc">more often than women</div>
                </div>
            </div>
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-title">Most commit suicide</div>
                    <div class="stat-value text-red-600">20-30</div>
                    <div class="stat-desc">age, and mostly are men</div>
                </div>
            </div>
        </div>
    );
};

export default States;