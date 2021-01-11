import React from 'react';
import { Button } from './Button';
import './HomeSection.css';
import { Link } from 'react-router-dom';

function HomeSection() {
    return (
        <>
            <div className='home'>
                <div className='home__container'>
                    <div className='home__section-text-wrapper'>
                        <h1 className='headLine'>Welcome To The Library</h1>
                        <p className='description'>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters</p>
                        <Link to='/bookshelf'>
                            <Button buttonSize='btn--wide' buttonColor='secondary'>Go To Library</Button>
                        </Link>
                    </div>
                    <div className='home__section-text-wrapper'>
                        <h2 className='topLine'>Read 'Em & Weep</h2>
                        <p className='description'>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
                        <Link to='/addbook'>
                            <Button buttonSize='btn--wide' buttonColor='secondary'>Add A Book</Button>
                        </Link>
                    </div>
                </div>
            </div>    
        </>
    )
}
export default HomeSection;