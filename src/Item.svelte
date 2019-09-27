<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Logic (JavaScript)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<script>
    import Image from "./Image.svelte";    export let state;
    state = {
        brand: "brand",
        name: "name",
        abv: 0,
        description: "description",
        size: 0,
        price: 0,
    }</script>
    Styles (CSS)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<style>
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
        display: grid;
        grid-template-rows: repeat(3, 1fr) 3fr 1fr 1fr;
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
 <!-- example markup, okay to delete -->
<div class="main-grid">
    <Image imageUrl={imageUrl} />
    <main class="text-grid" key={state.name}>
        <p class="brand">{state.brand}</p>
        <p class="name">{state.name}</p>
        <p class="abv">{state.abv}</p>
        <p class="description">{state.description}</p>
        <p class="size">{state.size}</p>
        <p class="price">{state.price}</p>
    </main>
    
</div><!--.main-grid-->-->   

    