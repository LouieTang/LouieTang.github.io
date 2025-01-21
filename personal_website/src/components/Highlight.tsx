import "../styles/Highlight.css";

interface HighlightProps {
    data: {
        image: string | null;
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
        <div className="highlight-container">
            {data.image && <img src={data.image} alt={data.title} className="highlight-image" />}
            <div className="highlight-info">
                <h3>{data.title}</h3>
                <p>{data.organization}</p>
                {data.location && <p>{data.location}</p>}
                {data.externalLink && <p><a href={data.externalLink} target="_blank" rel="noopener noreferrer">{data.externalLink}</a></p>}
                <p>{data.duration}</p>
                <ul>
                    {data.highlights.map((highlight, index) => (
                        <li className="highlight-list" key={index}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Highlight;