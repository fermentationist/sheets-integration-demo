<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Logic (JavaScript)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<script>
    import Item from "./Item.svelte";
    import {beforeUpdate, afterUpdate, onMount} from "svelte";

    let itemList, otherPromise;// will hold a Promise to return array of products imported from Google Sheet API

    beforeUpdate(() => {// Svelte lifecycle event that runs before mounting component
        otherPromise = itemList = getSheetData();
    }); 

    const getSheetData = async () => {// returns a Promise
        const data = await fetch("/api");
        let [headings, ...list] = JSON.parse(await data.json());
        const convertedList = list.map(item => {
            const newObj = {};
            headings.forEach((heading, i) => {
                newObj[heading] = item[i];
            });
            return newObj;
        })
        return convertedList;
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
    @font-face {
        font-family: "Raleway";
        src: url("../srcFonts/Raleway-Light.ttf");
    }
	:global(body) { /* syntax to apply global styles in Svelte */
		box-sizing: border-box;
		scroll-behavior: smooth;
        outline: none;
        padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
        width: 100%;
        height: 100%;
        font-family: "Raleway";
    }
    :global(*, *:before, *:after) {
		box-sizing: inherit;
        margin: 0;
        padding: 0;
	}
    .main-container {
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Markup (HTML template)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<div class="main-container">
    {#await otherPromise}
        {:then itemList}
        {#each itemList as item}
            <Item key={item.id} {item}/>
        {/each}
    {/await}
</div><!--.main-grid-->
