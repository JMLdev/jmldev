import React from 'react';
import ReactDOM from 'react-dom';
import {TweenLite, Back, Linear, Power1} from 'gsap/TweenMax';
import {Row, Col} from 'reactstrap';

export default class TopNav extends React.Component {
    constructor() {
        super();
        this.sparksWrap = React.createRef();
        this.initialHeight = 32;
        this.initialWidth = 120;
        this.elementPosition = 0;
        this.state = {
            style: {
                width: "120px",
                height: "32px"
            },
            windowHeight: window.innerHeight,
            test: 'test',
            density: 130,
            speed: 3,
            start: {
                yMin: this.initialHeight - 32,
                yMax: this.initialHeight - 32,
                xMin: 10,
                xMax: 20,
                scaleMin: 0.1,
                scaleMax: 0.25,
                scaleXMin: 0.1,
                scaleXMax: 1,
                scaleYMin: 1,
                scaleYMax: 2,
                opacityMin: 0.1,
                opacityMax: 0.4
            },
            mid: {
                yMin: this.initialHeight + 480,
                yMax: this.initialHeight + 500,
                xMin: 200,
                xMax: 250,
                scaleMin: 0.2,
                scaleMax: 0.8,
                opacityMin: 0.5,
                opacityMax: 1
            },
            end: {
                yMin: this.initialHeight + 700,
                yMax: this.initialHeight + 730,
                xMin: -600,
                xMax: 800,
                scaleMin: 0.1,
                scaleMax: 1,
                opacityMin: 0.4,
                opacityMax: 0.7
            }
        }
    }
    
    componentDidMount() {
        this.udpateStartingHeight();
        this.createParticle(this.sparksWrap.current);
    }
    
    udpateStartingHeight = () => {
        this.elementPosition = window.innerHeight - this.sparksWrap.current.getBoundingClientRect().top;
    }

    range = (map, prop) => {
        var min = map[prop + 'Min'],
            max = map[prop + 'Max'];
        return min + (max - min) * Math.random();
    }
    
    randomEase = (easeThis, easeThat) => {
        if (Math.random() < 0.5) {
            return easeThat;
        }
        return easeThis;
    }
    
    spawn = (particle) => {
        var wholeDuration = (10 / this.state.speed) * (0.7 + Math.random() * 0.4),
        // var wholeDuration = 1,
            delay = wholeDuration * Math.random(),
            partialDuration = (wholeDuration + 1) * (0.2 + Math.random() * 0.3);
        TweenLite.set(particle, {
            y: this.range(this.state.start, 'y'),
            x: this.range(this.state.start, 'x'),
            scaleX: this.range(this.state.start, 'scaleX'),
            scaleY: this.range(this.state.start, 'scaleY'),
            scale: this.range(this.state.start, 'scale'),
            opacity: this.range(this.state.start, 'opacity'),
            visibility: 'hidden'
        });
        // Moving upward
        TweenLite.to(particle, partialDuration, {
            delay: delay,
            y: this.range(this.state.mid, 'y'),
            ease: this.randomEase(Linear.easeOut, Back.easeInOut)
        });
        TweenLite.to(particle, wholeDuration - partialDuration, {
            delay: partialDuration + delay,
            y: this.range(this.state.end, 'y'),
            ease: Back.easeIn
        });
        //Moving on axis X
        TweenLite.to(particle, partialDuration, {
            delay: delay,
            x: this.range(this.state.mid, 'x'),
            ease: Power1.easeOut
        });
        TweenLite.to(particle, wholeDuration - partialDuration, {
            delay: partialDuration + delay,
            x: this.range(this.state.end, 'x'),
            ease: Power1.easeIn
        });
        //opacity and scale
        partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
        TweenLite.to(particle, partialDuration, {
            delay: delay,
            scale: this.range(this.state.mid, 'scale'),
            autoAlpha: this.range(this.state.mid, 'opacity'),
            ease: Linear.easeNone
        });
        TweenLite.to(particle, wholeDuration - partialDuration, {
            delay: partialDuration + delay,
            scale: this.range(this.state.end, 'scale'),
            autoAlpha: this.range(this.state.end, 'opacity'),
            ease: Linear.easeNone,
            onComplete: this.spawn,
            onCompleteParams: [particle]
        });
    }
    
    createParticle = (parentItem) => {
        var i, particleSpark;
        for (i = 0; i < this.state.density; i += 1) {
            particleSpark = document.createElement('div');
            particleSpark.classList.add('spark');
            parentItem.appendChild(particleSpark);
            particleSpark.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
            this.spawn(particleSpark);
        }
    }
    
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <div style={this.state.style} ref={this.sparksWrap}></div>
                </Col>
            </Row>
        )
    }
}