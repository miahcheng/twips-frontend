import React from 'react';

const Iframe = (source) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe
                    src="https://clips.twitch.tv/embed?clip=EmpathicArbitraryTomatoChocolateRain-EvNbwcYXU9AWHY7v&parent=localhost"
                    height="720"
                    width="1280"
                    allowFullScreen={true}>
                </iframe>
            </div>
        </div>
    );
};

export default Iframe;