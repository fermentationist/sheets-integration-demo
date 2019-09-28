<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Logic (JavaScript)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<script>
    import Item from "./Item.svelte";
    const getItemData = {
        imageUrl: "https://cdn11.bigcommerce.com/s-qtoc3aerdw/images/stencil/2048x2048/products/1445/5696/021037010190__85648.1509206777.jpg?c=2&imbypass=on",
        brand: "Jeppson",
        website: "http://www.jeppsonsmalort.com/jm.html",
        name: "Rotgut",
        abv: 40,
        description: "a brief description. a brief description. a brief description. a brief description. \n a brief description. a brief description. a brief description. a brief description. \n a brief description. a brief description. a brief description. a brief description.",
        size: 750,
        price: 99.99,
    };
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
        width: 100%;
        height: 100%;
    }
    :global(*, *:before, *:after) {
		box-sizing: inherit;
        margin: 0;
        padding: 0;
	}
	:global(a) {
		/* text-decoration: none; */
		color: inherit;
    }
    .main-container {
        position: absolute;
    }
</style>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Markup (HTML template)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<div class="main-container">
    <Item state={getItemData}/>
    
</div><!--.main-grid-->-->   

    state