interface FooterProps {
    metadata: {
        aboutMe: string,
        career: string,
        portfolio: string,
        server: string,
        website: string
    }
}

function Footer({metadata}: FooterProps) {
    return (
        <>
            <p>About Me Last Updated On: {new Date(metadata.aboutMe).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            <p>Career Last Updated On: {new Date(metadata.career).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} </p>
            <p>Portfolio Last Updated On: {new Date(metadata.portfolio).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} </p>
            <p>Server Last Deployed On: {new Date(metadata.server).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} </p>
            <p>Latest Website Version Published On (<a href="https://github.com/LouieTang/LouieTang.github.io">GitHub Pages</a>): {new Date(metadata.website).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} </p>
        </>
    );
};

export default Footer;