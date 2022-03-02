import React from 'react';

const Iframe = (source: string) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const tosrc = source;
    return (
                <iframe
                    title={"Twitch Clips!"}
                    src={tosrc}
                    height="720"
                    width="1280"
                    allowFullScreen={true}>
                </iframe>
    );
};

export default Iframe;