import React from 'react';

import './AboutPage.less';

const AboutPage = React.createClass({
    render() {
        return (
            <div className='AboutPage'>
                <h2 className='title'>
                    This is message application
                </h2>
                <div className='text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio doloremque ducimus error eveniet ex expedita porro quod sit?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet cum cumque deleniti harum impedit iste labore minima sit voluptatibus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam consectetur cum ea in possimus quam quod recusandae repellat unde!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolor ducimus excepturi illo itaque magnam necessitatibus reprehenderit sunt suscipit!</p>
                </div>
            </div>
        );
    }
});

export default AboutPage;