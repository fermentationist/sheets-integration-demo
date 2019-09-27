<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Logic (JavaScript)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<script>
    import Image from "./Image.svelte";
    export let state = {
        imageUrl: "url",
        brand: "brand",
        website: "url",
        name: "name",
        abv: 0,
        description: "description",
        size: 0,
        price: 0,
    }

</script>

<!--
    Styles (CSS)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<style>
    .main-grid {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1.615fr;
        background: rgb(243, 238, 238);
        width: 50vw;
        max-height: 100vh;
        color: darkslateblue;/*rgb(185, 160, 185);*/
        font-family: Lato, sans-serif;
        font-size: 1.5em;
        letter-spacing: 0.25em;
        line-height: 2em;
    }
    .text-grid {
        display: grid;
        max-height: 200px;
        grid-template-rows: repeat(3, 1fr) 2fr 1fr 1fr;
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
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
</style>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Markup (HTML template)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
 <!-- example markup, okay to delete -->
<div class="main-grid">
    <Image imageUrl={state.imageUrl} />
    <main class="text-grid" key={state.name}>
        <p class="brand"><a href={state.website}>{state.brand}</a></p>
        <p class="name">{state.name}</p>
        <p class="abv">{state.abv}</p>
        <p class="description">{state.description}</p>
        <p class="size">{state.size}</p>
        <p class="price">{state.price}</p>
    </main>
</div><!--.main-grid-->-->   

    