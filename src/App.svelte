<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Logic (JavaScript)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<script>
    import Item from "./Item.svelte";
    const getItemData = () => {
        return ({
            state: { 
                brand: "Jeppson",
                name: "Rotgut",
                abv: 40,
                description: "a brief description. a brief description. a brief description. a brief description. \n a brief description. a brief description. a brief description. a brief description. \n a brief description. a brief description. a brief description. a brief description.",
                size: 750,
                price: 99.99,
            }
        });
    }
</script>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Styles (CSS)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<style>
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
    /* Some useful global styles (you may want to keep or add to) */
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
	:global(body) { /* syntax to apply global styles in Svelte */
		box-sizing: border-box;
		scroll-behavior: smooth;
        outline: none;
        padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
    }
    :global(*, *:before, *:after) {
		box-sizing: inherit;
	}
	:global(a) {
		text-decoration: none;
		color: inherit;
    }
    
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
    /* Styling for welcome message; please delete along with message in markup */
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
    .main-grid {
        display: grid;
        grid-template-columns: 1fr 1.615fr;
        background: rgb(243, 238, 238);
        background: linear-gradient(169deg, rgba(92,50,50,1) 7%, rgba(238,236,225,0.8743872549019608) 100%);
        width: 100vw;
        height: 300vh;
        color: coral;/*rgb(185, 160, 185);*/
        font-family: Lato, sans-serif;
        font-size: 1.5em;
        padding: 25vh 24vw;
        letter-spacing: 0.25em;
        line-height: 2em;
    }
    .text-grid {

    }
    p {
        max-width: 50vw;
    }
    h2 {
        font-family: Futura, sans-serif;
    }
    .italic {
        font-style: italic;
    }
    .small-caps {
        font-variant: small-caps;
        font-size: 1.33em;
    }
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
</style>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Markup (HTML template)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<div class="main-grid">
    <Item data={itemData}/>
    
</div><!--.main-grid-->-->   

    state