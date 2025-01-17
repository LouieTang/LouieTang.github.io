import { ReactNode } from 'react';

interface HighlightProps {
    data: {
        title: string;
        organization: string;
        location: string | null;
        externalLink: string | null;
        duration: string;
        highlights: string[];
    }
}

function Highlight({ data }: HighlightProps) {
    return (
        <>
            <h3>{data.title}</h3>
            <div>
                <p>{data.organization}</p>
                {data.location && <p>{data.location}</p>}
                {data.externalLink && <p><a href={data.externalLink} target="_blank" rel="noopener noreferrer">{data.externalLink}</a></p>}
                <p>{data.duration}</p>
                <ul>
                    {data.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            </div>

        </>
    );
}

export default Highlight;