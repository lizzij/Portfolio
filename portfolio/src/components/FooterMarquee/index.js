import React from 'react';
import './styles.css';


const FooterMarquee = () => {
    const minorBlurbs = ["special thx to my doggo", "credits to my rubber duck", "Brutalism? OCISLY ❥ ", "import tf as np"];
    const majorBlurbs = ["Eliza Zijin Huang @ 2021", "design &amp; code w  ❥ in figma + react"];
    const emoticons = ["[⚈ ᵜ ⚈]", "[⚈ ₃⚈]", "[⚈‿⚈]", "[⚈ ᴥ ⚈]", "[⚈﹏⚈]", "[⚈  ͟ʖ ⚈]", "[⚈ ▿ ⚈]", "[⚈ ω⚈]", ]
    
    return (
        <p className="Marquee">
            <span>
                <nobr className="MinorBlurb">special thx to my doggo</nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
                <nobr className="MinorBlurb">credits to my rubber duck&nbsp;</nobr>[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈﹏⚈]&nbsp;
                <nobr className="MinorBlurb">Bye covid!</nobr>&nbsp;[⚈  ͟ʖ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈ ▿ ⚈]&nbsp;Design &amp; Code w  ❥ in figma &amp; react&nbsp;[⚈ ω⚈]&nbsp;
                <nobr className="MinorBlurb">Brutalism? OCISLY ❥ </nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
                <nobr className="MinorBlurb">import tf as np</nobr>&nbsp;[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈ ω⚈]&nbsp;
            </span>
            <span>
                <nobr className="MinorBlurb">special thx to my doggo</nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
                <nobr className="MinorBlurb">credits to my rubber duck&nbsp;</nobr>[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈﹏⚈]&nbsp;
                <nobr className="MinorBlurb">Bye covid!</nobr>&nbsp;[⚈  ͟ʖ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈ ▿ ⚈]&nbsp;Design &amp; Code w  ❥ in figma &amp; react&nbsp;[⚈ ω⚈]&nbsp;
                <nobr className="MinorBlurb">Brutalism? OCISLY ❥ </nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
                <nobr className="MinorBlurb">import tf as np</nobr>&nbsp;[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2021&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈ ω⚈]&nbsp;
            </span>
        </p>
    );
}

export default FooterMarquee;