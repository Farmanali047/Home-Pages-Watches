const PersonalizeButton = ({ dataElement,url,colore }) => {
    return (
        <div
            data-content-type="button-item"
            data-appearance="default"
            aria-label=""
            data-element="main"
            data-pb-style="RT0VU53"
        >
            <a
                className="pagebuilder-button-primary"
                href={url}
                target=""
                data-link-type="default"
                data-element="link"s
                data-pb-style="FKHQ8TJ"
                style={{
                    textDecoration: 'underline', // Ensures the underline is visible
                    textDecorationColor: 'orange', // Changes the underline color to orange
                    textUnderlineOffset: '10px', // Adjusts spacing between the text and underline
                    textDecorationThickness: '0.5px', // Adjusts thickness of the underline
                    color: colore, // Replace 'orange' with the actual variable or value for text color
                    fontSize: '14px',
                    fontFamily: "'Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', serif",
                    marginBottom: '20px'
                }}
                
            >
                {dataElement}
            </a>
        </div>
    );
};

export default PersonalizeButton;
